import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

export async function getArticles(locale: string): Promise<Article[]> {
  try {
    const localeDir = path.join(articlesDirectory, locale);

    if (!fs.existsSync(localeDir)) {
      return [];
    }

    const fileNames = fs.readdirSync(localeDir);
    const allArticles = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(localeDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt || content.substring(0, 150),
          content,
        };
      });

    // Sort articles by date
    return allArticles.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    return [];
  }
}

export async function getArticleBySlug(
  slug: string,
  locale: string
): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, locale, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || content.substring(0, 150),
      content,
    };
  } catch (error) {
    return null;
  }
}
