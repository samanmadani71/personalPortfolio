"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Menu as MenuIcon, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations, useLocale } from "next-intl";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const menuItems = [
    { title: t("home"), href: `/${locale}` },
    { title: t("about"), href: `/${locale}#about` },
    { title: t("projects"), href: `/${locale}#projects` },
    { title: t("articles"), href: `/${locale}/articles` },
    { title: t("contact"), href: `/${locale}#contact` },
  ];

  const switchLocale = () => {
    const newLocale = locale === "en" ? "fa" : "en";
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };
  return (
    <nav className="border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === "fa" ? "right" : "left"}>
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Brand */}
        <div className="flex-1 sm:flex-initial">
          <Link href={`/${locale}`} className="font-bold text-lg">
            {t("home")}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Language Switcher & Resume */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={switchLocale}
            aria-label={`Switch language to ${locale === "fa" ? "en" : "fa"}`}
          >
            <span className="uppercase text-sm font-medium">
              {locale === "fa" ? "en" : "fa"}
            </span>
          </Button>
          <Link
            href="/Saman_Madani_CV_app_flow.pdf"
            download={true}
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <FaCloudDownloadAlt className="text-blue-400" />
            <span className="hidden sm:inline">{t("resume")}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
