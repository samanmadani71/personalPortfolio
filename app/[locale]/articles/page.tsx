import { getTranslations } from "next-intl/server";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getArticles } from "@/lib/articles";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("articles");
  const articles = await getArticles(locale);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">{t("title")}</h1>

      {articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">{t("noArticles")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/articles/${article.slug}`}
              className="hover:scale-105 transition-transform"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>
                    {t("publishedOn")} {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <p className="text-primary mt-4 font-medium">
                    {t("readMore")} →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
