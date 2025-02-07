import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certificates = () => {
  return (
    <div className="grid grid-cols-3 min-h-96 container mx-auto gap-4 py-8">
      <Link
        href="https://coursera.org/share/42d2900a32864d58bbe72e9b895417d2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">IBM</p>
            <small className="text-default-500">2025</small>
            <h4 className="font-bold text-lg">Machine Learning with Python</h4>
          </CardHeader>
          <CardBody className="h-full mt-4">
            <Image
              alt="Image of RAG system workflow"
              className="object-fit "
              src="/IBM_Machine_Learning_with_Python.png"
              fill
            />
          </CardBody>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/2e456fe1967d744aecf1b6904afd5fa9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              Wharton - University of Pennsylvania
            </p>
            <small className="text-default-500">2025</small>
            <h4 className="font-bold text-lg">
              AI Fundamentals for Non-Data Scientists
            </h4>
          </CardHeader>
          <CardBody className="h-full mt-4">
            <Image
              alt="Image of RAG system workflow"
              className="object-fit "
              src="/fundamental_of_AI_for_non_data_scientists.png"
              fill
            />
          </CardBody>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/bab4dc91e380835f412ce45ce329aeae"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="pt-4 h-96 col-span-3 md:col-span-1 rounded-none md:rounded-lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              Wharton - University of Pennsylvania
            </p>
            <small className="text-default-500">2025</small>
            <h4 className="font-bold text-lg">
              AI Applications in People Management
            </h4>
          </CardHeader>
          <CardBody className="h-full mt-4">
            <Image
              alt="Image of social network"
              className="object-fit "
              src="/AI_in_people_management.png"
              fill
            />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Certificates;
