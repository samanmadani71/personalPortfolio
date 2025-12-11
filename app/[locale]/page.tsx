import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Skills from "../ui/skills/skills";
import Projects from "../ui/projects/ProjectsI18n";
import Certificates from "../ui/certificates/CertificatesI18n";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saman Madani",
    jobTitle: "Full-Stack Developer",
    url: "https://samanmadani.com",
    sameAs: [
      "https://github.com/samanmadani71",
      "https://www.linkedin.com/in/saman-madani/",
    ],
    telephone: "+989124733987",
    email: "samanmadani.dev@gmail.com",
    knowsAbout: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Django",
      "Machine Learning",
      "Web Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="w-full min-h-96 h-[400px] lg:h-[650px] max-h-screen relative justify-start items-center">
          <Image
            src="/hero.jpg"
            fill
            alt="hero image of a screen with codes in it"
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 w-72 -translate-x-36 h-72 -translate-y-36 flex flex-col justify-center items-center">
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white">
              <Image
                className="object-cover"
                src={"/profile.jpg"}
                fill
                alt={`an image of ${t("hero.name")}`}
                sizes="(max-width: 768px) 160px, 208px"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white mt-4">
              {t("hero.name")}
            </h1>
            <h2 className="text-lg text-white">{t("hero.title")}</h2>
            <div className="flex justify-center items-center gap-4 mt-2">
              <Link
                href="https://github.com/samanmadani71"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-white text-2xl hover:opacity-50 transition-opacity" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/saman-madani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-white text-2xl hover:opacity-50 transition-opacity" />
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto my-12">
          <h2 className="text-3xl font-bold text-center pt-16">
            {t("about.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-justify leading-loose px-4 my-8">
            {t("about.description")}
          </p>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-center mt-8">
              {t("skills.title")}
            </h2>
            <p className="max-w-2xl mx-auto text-justify leading-loose my-8 px-4">
              {t("skills.description")}
            </p>
            <Skills />
          </div>
        </section>

        <section className="my-12 bg-blue-50 py-8" id="projects">
          <h2 className="text-3xl font-bold text-center pt-8">
            {t("projects.title")}
          </h2>
          <Projects />
        </section>

        <section className="my-12 bg-blue-50 py-8" id="certificates">
          <h2 className="text-3xl font-bold text-center pt-8">
            {t("certificates.title")}
          </h2>
          <Certificates />
        </section>

        <section className="my-12 px-4" id="contact">
          <h2 className="text-3xl font-bold text-center pt-8">
            {t("contact.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-justify leading-loose my-8">
            {t("contact.description")}
          </p>
          <div
            itemScope
            itemType="https://schema.org/Person"
            className="max-w-2xl mx-auto flex flex-col"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4">
                <Image
                  className="object-cover"
                  src={"/profile.jpg"}
                  fill
                  alt={`an image of ${t("hero.name")}`}
                  sizes="128px"
                />
              </div>
              <span itemProp="name" className="mt-2 font-semibold">
                {t("hero.name")}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <span itemProp="jobTitle" className="text-lg">
                {t("contact.jobTitle")}
              </span>
              <div className="flex flex-col justify-center items-center mt-2">
                <p className="font-bold">
                  {t("contact.phone")}:{" "}
                  <span itemProp="telephone" className="font-normal">
                    +989124733987
                  </span>
                </p>
                <a
                  href="mailto:samanmadani.dev@gmail.com"
                  itemProp="email"
                  className="hover:text-primary transition-colors"
                >
                  <span className="font-bold">{t("contact.email")}: </span>
                  samanmadani.dev@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
