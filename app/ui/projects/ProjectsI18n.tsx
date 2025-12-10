"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("projects");

  const projects = [
    {
      category: t("rag.category"),
      year: t("rag.year"),
      role: t("rag.role"),
      image: "/Rag.png",
      alt: "Image of RAG system workflow",
    },
    {
      category: t("hezaresevom.category"),
      year: t("hezaresevom.year"),
      role: t("hezaresevom.role"),
      image: "/hezaresevom.png",
      alt: "Image of social network",
    },
    {
      category: t("abniro.category"),
      year: t("abniro.year"),
      role: t("abniro.role"),
      image: "/telegram.png",
      alt: "Image of automation tool",
    },
    {
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
        <Card key={index} className="h-96">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              {project.category}
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              {project.year}
            </CardDescription>
            <CardTitle className="text-lg">{project.role}</CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt={project.alt}
              className="object-contain"
              src={project.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
