import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 min-h-96 container mx-auto gap-4 py-8">
      <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">
            Retrieval-Augmented Generation
          </p>
          <small className="text-default-500">2024-2025</small>
          <h4 className="font-bold text-lg">Backend Developer</h4>
        </CardHeader>
        <CardBody className="h-full mt-4">
          <Image
            alt="Image of RAG system workflow"
            className="object-fit "
            src="/Rag.png"
            fill
          />
        </CardBody>
      </Card>
      <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">
            Hezare Sevom Social Network
          </p>
          <small className="text-default-500">2023-Present</small>
          <h4 className="font-bold text-lg">Full-Stack developer</h4>
        </CardHeader>
        <CardBody className="h-full mt-4">
          <Image
            alt="Image of social network"
            className="object-cover "
            src="/hezaresevom.png"
            fill
          />
        </CardBody>
      </Card>
      <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">
            Abniro Keyword Finder Scraper
          </p>
          <small className="text-default-500">2022-2023</small>
          <h4 className="font-bold text-lg">Automation Developer</h4>
        </CardHeader>
        <CardBody className="h-full mt-4">
          <Image
            alt="Image of social network"
            className="object-cover "
            src="/telegram.png"
            fill
          />
        </CardBody>
      </Card>
      <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Subway Path Finder</p>
          <small className="text-default-500">2022-2023</small>
          <h4 className="font-bold text-lg">React Native Developer</h4>
        </CardHeader>
        <CardBody className="h-full mt-4">
          <Image
            alt="Image of social network"
            className="object-cover "
            src="/metro.jpg"
            fill
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Projects;
