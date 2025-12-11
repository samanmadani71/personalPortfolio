import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import iransans from "@/fonts/fonts";
import "../globals.css";
import Menu from "../ui/menu/menu";
import Footer from "../ui/footer/Footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    metadataBase: new URL("https://samanmadani.com"),
    title: messages.seo.title,
    description: messages.seo.description,
    keywords: messages.seo.keywords,
    authors: [{ name: "Saman Madani" }],
    openGraph: {
      title: messages.seo.title,
      description: messages.seo.description,
      url: "https://samanmadani.com",
      siteName: "Saman Madani Portfolio",
      images: [
        {
          url: "/hero.jpg",
          width: 1200,
          height: 630,
          alt: "Saman Madani - Full-Stack Developer",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.seo.title,
      description: messages.seo.description,
      images: ["/hero.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://samanmadani.com/${locale}`,
      languages: {
        en: "https://samanmadani.com/en",
        fa: "https://samanmadani.com/fa",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!["en", "fa"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const fontClass = locale === "fa" ? iransans.className : inter.className;

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body className={fontClass}>
        <NextIntlClientProvider messages={messages}>
          <Menu />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
