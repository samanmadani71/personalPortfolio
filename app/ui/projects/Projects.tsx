import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 min-h-96 container mx-auto gap-4 py-8">
      <Card className="h-96 col-span-3 md:col-span-1">
        <CardHeader>
          <CardDescription className="text-xs uppercase font-bold">
            Retrieval-Augmented Generation
          </CardDescription>
          <CardDescription className="text-xs text-muted-foreground">
            2024-2025
          </CardDescription>
          <CardTitle className="text-lg">Backend Developer</CardTitle>
        </CardHeader>
        <CardContent className="relative h-48">
          <Image
            alt="Image of RAG system workflow"
            className="object-contain"
            src="/Rag.png"
            fill
          />
        </CardContent>
      </Card>
      <Card className="h-96 col-span-3 md:col-span-1">
        <CardHeader>
          <CardDescription className="text-xs uppercase font-bold">
            Hezare Sevom Social Network
          </CardDescription>
          <CardDescription className="text-xs text-muted-foreground">
            2023-Present
          </CardDescription>
          <CardTitle className="text-lg">Full-Stack developer</CardTitle>
        </CardHeader>
        <CardContent className="relative h-48">
          <Image
            alt="Image of social network"
            className="object-cover"
            src="/hezaresevom.png"
            fill
          />
        </CardContent>
      </Card>
      <Card className="h-96 col-span-3 md:col-span-1">
        <CardHeader>
          <CardDescription className="text-xs uppercase font-bold">
            Abniro Keyword Finder Scraper
          </CardDescription>
          <CardDescription className="text-xs text-muted-foreground">
            2022-2023
          </CardDescription>
          <CardTitle className="text-lg">Automation Developer</CardTitle>
        </CardHeader>
        <CardContent className="relative h-48">
          <Image
            alt="Image of social network"
            className="object-cover"
            src="/telegram.png"
            fill
          />
        </CardContent>
      </Card>
      <Card className="h-96 col-span-3 md:col-span-1">
        <CardHeader>
          <CardDescription className="text-xs uppercase font-bold">
            Subway Path Finder
          </CardDescription>
          <CardDescription className="text-xs text-muted-foreground">
            2022-2023
          </CardDescription>
          <CardTitle className="text-lg">React Native Developer</CardTitle>
        </CardHeader>
        <CardContent className="relative h-48">
          <Image
            alt="Image of social network"
            className="object-cover"
            src="/metro.jpg"
            fill
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
