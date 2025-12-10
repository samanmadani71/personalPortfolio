import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certificates = () => {
  return (
    <div className="grid grid-cols-3 min-h-96 container mx-auto gap-4 py-8">
      <Link
        href="https://coursera.org/share/229dde1357365e467d45b09d2cab982a"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-3 md:col-span-1"
      >
        <Card className="h-96 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              Google
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              2025
            </CardDescription>
            <CardTitle className="text-lg">
              Introduction to Git and Github
            </CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt="Image of cerification"
              className="object-contain"
              src="/google_git.png"
              fill
            />
          </CardContent>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/a39d4a477db11ac4eb70d3a751eb257f"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-3 md:col-span-1"
      >
        <Card className="h-96 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              Wharton - University of Pennsylvania
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              2025
            </CardDescription>
            <CardTitle className="text-lg">
              AI for business specialization
            </CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt="Image of cerification"
              className="object-contain"
              src="/AI_for_business.png"
              fill
            />
          </CardContent>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/8a582697626fce69f5681513db4a9915"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-3 md:col-span-1"
      >
        <Card className="h-96 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              Wharton - University of Pennsylvania
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              2025
            </CardDescription>
            <CardTitle className="text-lg">
              AI Application in marketing and finance
            </CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt="Image of cerification"
              className="object-contain"
              src="/AI_application_in_marketing_and_finance.png"
              fill
            />
          </CardContent>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/42d2900a32864d58bbe72e9b895417d2"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-3 md:col-span-1"
      >
        <Card className="h-96 col-span-3 md:col-span-1 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              IBM
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              2025
            </CardDescription>
            <CardTitle className="text-lg">
              Machine Learning with Python
            </CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt="Image of cerification"
              className="object-contain"
              src="/IBM_Machine_Learning_with_Python.png"
              fill
            />
          </CardContent>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/2e456fe1967d744aecf1b6904afd5fa9"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-3 md:col-span-1"
      >
        <Card className="h-96 col-span-3 md:col-span-1 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              Wharton - University of Pennsylvania
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              2025
            </CardDescription>
            <CardTitle className="text-lg">
              AI Fundamentals for Non-Data Scientists
            </CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt="Image of cerification"
              className="object-contain"
              src="/fundamental_of_AI_for_non_data_scientists.png"
              fill
            />
          </CardContent>
        </Card>
      </Link>
      <Link
        href="https://coursera.org/share/bab4dc91e380835f412ce45ce329aeae"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-3 md:col-span-1"
      >
        <Card className="h-96 col-span-3 md:col-span-1 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardDescription className="text-xs uppercase font-bold">
              Wharton - University of Pennsylvania
            </CardDescription>
            <CardDescription className="text-xs text-muted-foreground">
              2025
            </CardDescription>
            <CardTitle className="text-lg">
              AI Applications in People Management
            </CardTitle>
          </CardHeader>
          <CardContent className="relative h-48">
            <Image
              alt="Image of social network"
              className="object-contain"
              src="/AI_in_people_management.png"
              fill
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Certificates;
