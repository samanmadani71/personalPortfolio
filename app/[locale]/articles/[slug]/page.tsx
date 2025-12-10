import { getArticleBySlug, getArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const locales = ["en", "fa"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const articles = await getArticles(locale);
    articles.forEach((article) => {
      params.push({
        locale,
        slug: article.slug,
      });
    });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug, locale);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} - Saman Madani`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["Saman Madani"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("articles");
  const article = await getArticleBySlug(slug, locale);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Saman Madani",
    },
    description: article.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href={`/${locale}/articles`}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("backToArticles")}
          </Button>
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <time className="text-muted-foreground">
              {t("publishedOn")} {article.date}
            </time>
          </header>

          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
    </>
  );
}
