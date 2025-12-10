"use client";

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
import { useTranslations } from "next-intl";

const Certificates = () => {
  const t = useTranslations("certificates");

  const certificates = [
    {
      href: "https://coursera.org/share/229dde1357365e467d45b09d2cab982a",
      issuer: t("google.issuer"),
      year: t("google.year"),
      title: t("google.title"),
      image: "/google_git.png",
    },
    {
      href: "https://coursera.org/share/a39d4a477db11ac4eb70d3a751eb257f",
      issuer: t("wharton1.issuer"),
      year: t("wharton1.year"),
      title: t("wharton1.title"),
      image: "/AI_for_business.png",
    },
    {
      href: "https://coursera.org/share/8a582697626fce69f5681513db4a9915",
      issuer: t("wharton2.issuer"),
      year: t("wharton2.year"),
      title: t("wharton2.title"),
      image: "/AI_application_in_marketing_and_finance.png",
    },
    {
      href: "https://coursera.org/share/42d2900a32864d58bbe72e9b895417d2",
      issuer: t("ibm.issuer"),
      year: t("ibm.year"),
      title: t("ibm.title"),
      image: "/IBM_Machine_Learning_with_Python.png",
    },
    {
      href: "https://coursera.org/share/2e456fe1967d744aecf1b6904afd5fa9",
      issuer: t("wharton3.issuer"),
      year: t("wharton3.year"),
      title: t("wharton3.title"),
      image: "/fundamental_of_AI_for_non_data_scientists.png",
    },
    {
      href: "https://coursera.org/share/bab4dc91e380835f412ce45ce329aeae",
      issuer: t("wharton4.issuer"),
      year: t("wharton4.year"),
      title: t("wharton4.title"),
      image: "/AI_in_people_management.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-96 container mx-auto gap-4 py-8">
      {certificates.map((cert, index) => (
        <Link
          key={index}
          href={cert.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          <Card className="h-96">
            <CardHeader>
              <CardDescription className="text-xs uppercase font-bold">
                {cert.issuer}
              </CardDescription>
              <CardDescription className="text-xs text-muted-foreground">
                {cert.year}
              </CardDescription>
              <CardTitle className="text-lg">{cert.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative h-48">
              <Image
                alt={`Certificate: ${cert.title}`}
                className="object-contain"
                src={cert.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Certificates;
