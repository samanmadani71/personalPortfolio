import { getProjectBySlug, getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const locales = ["en", "fa"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const projects = getProjects(locale);
    projects.forEach((project) => {
      params.push({
        locale,
        slug: project.slug,
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
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Saman Madani`,
    description: project.description[0].substring(0, 160),
    openGraph: {
      title: project.title,
      description: project.description[0].substring(0, 160),
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.alt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale, slug);
  const t = await getTranslations("projectDetail");

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description[0],
    image: project.image,
    author: {
      "@type": "Person",
      name: "Saman Madani",
    },
    datePublished: project.year,
    keywords: project.technologies?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Link href={`/${locale}#projects`}>
          <Button variant="ghost" className="mb-8">
            {locale === "fa" ? (
              <ArrowRight className="ml-2 h-4 w-4" />
            ) : (
              <ArrowLeft className="mr-2 h-4 w-4" />
            )}

            {t("backToProjects")}
          </Button>
        </Link>

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.role}</p>
          </header>

          {/* Project Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>

          {/* Project Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            {project.description.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {t("technologiesUsed")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-6 border-t">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("visitWebsite")}
                </Button>
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  {t("viewOnGithub")}
                </Button>
              </Link>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
