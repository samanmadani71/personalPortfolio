"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/samanmadani71"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/saman-madani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:samanmadani71@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t("madeWith")}</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>{t("and")}</span>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Next.js
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {t("year")} - {t("name")} - {t("copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
