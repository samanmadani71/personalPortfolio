"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
  const t = useTranslations("projects");
  const params = useParams();
  const locale = params?.locale as string;

  const projects = [
    {
      slug: "rag-system",
      category: t("rag.category"),
      year: t("rag.year"),
      role: t("rag.role"),
      image: "/Rag.png",
      alt: "Image of RAG system workflow",
    },
    {
      slug: "hezaresevom-automation",
      category: t("hezaresevom.category"),
      year: t("hezaresevom.year"),
      role: t("hezaresevom.role"),
      image: "/hezaresevom.png",
      alt: "Image of social network",
    },
    {
      slug: "abniro-automation",
      category: t("abniro.category"),
      year: t("abniro.year"),
      role: t("abniro.role"),
      image: "/telegram.png",
      alt: "Image of automation tool",
    },
    {
      slug: "tehran-subway-app",
      category: t("subway.category"),
      year: t("subway.year"),
      role: t("subway.role"),
      image: "/metro.jpg",
      alt: "Image of subway app",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-96 container mx-auto gap-4 py-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="h-full flex flex-col group hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              {project.category}
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              {project.year}
            </CardDescription>
            <CardTitle className="text-lg">{project.role}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="relative h-48 mb-4">
              <Image
                alt={project.alt}
                className="object-contain"
                src={project.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="mt-auto"
            >
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                {locale === "fa" ? (
                  <>
                    <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                    {t("viewDetails")}
                  </>
                ) : (
                  <>
                    {t("viewDetails")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
