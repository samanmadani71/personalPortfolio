import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Skills from "./ui/skills/skills";
import Projects from "./ui/projects/Projects";
export default function Home() {
  return (
    <main>
      <section className="w-full min-h-96 h-[400px] lg:h-[650px] max-h-screen relative justify-start items-center">
        <Image
          src="/hero.jpg"
          fill
          alt="hero image of a screen with codes in it"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute  top-1/2 left-1/2 w-64 -translate-x-32 h-64 -translate-y-32 flex flex-col justify-center items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-large">
            <Image
              className="object-cover"
              src={"/profile.jpg"}
              fill
              alt="an image of Saman Madani"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Saman Madani</h2>
          <h4 className="text-lg  text-white">Full-Stack developer</h4>
          <div className="flex justify-center items-center gap-4">
            <Link
              href="https://github.com/samanmadani71"
              passHref
              legacyBehavior
            >
              <a rel="noopener noreferrer" target="_blank">
                <FaGithub className="text-white text-2xl hover:opacity-50" />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/saman-madani/"
              passHref
              legacyBehavior
            >
              <a rel="noopener noreferrer" target="_blank">
                <FaLinkedin className="text-white text-2xl hover:opacity-50" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="about" className="container mx-auto my-12">
        <h2 className="text-3xl font-bold text-center my-8">About me</h2>
        <p className="max-w-2xl mx-auto text-justify leading-loose px-4">
          Versatile Full-Stack Developer with 5 years of professional coding
          experience in Python and JavaScript, complemented by a robust academic
          foundation in mechanical engineering from Sharif University of
          Technology and the University of Tehran, the top universities in Iran.
          Skilled in developing scalable web applications, proficient in machine
          learning and data science, and passionate about leveraging innovative
          technologies to deliver impactful solutions.
        </p>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-center mt-8">Skills</h2>
          <p className="max-w-2xl mx-auto text-justify leading-loose my-8 px-4">
            The websites I have created so far showcase my skills using modern
            web development technologies. For the frontend, I use React and
            Next.js, styled with NextUI for components and Tailwind CSS for
            custom designs. On the backend, I leverage Django and Django REST
            Framework to develop robust APIs that seamlessly deliver data to the
            frontend. To ensure reliability and correctness, I write
            comprehensive tests using Django REST Framework&apos;s TestCase.
            This combination of technologies demonstrates my ability to build
            scalable, well-tested, and visually appealing full-stack
            applications.
          </p>
          <Skills />
        </div>
      </section>
      <section className="my-12 bg-blue-50 py-8">
        <h2 className="text-3xl font-bold text-center pt-8">Projects</h2>
        <Projects />
      </section>
      <section className="my-12 px-4" id="contact">
        <h2 className="text-3xl font-bold text-center pt-8">Contact me</h2>
        <p className="max-w-2xl mx-auto text-justify leading-loose my-8">
          If you have any further questions, please don’t hesitate to contact
          me. I will do my best to respond to your email within 3 working days
          at most. You can find my contact information below:
        </p>
        <div
          itemScope
          itemType="https://schema.org/Person"
          className="max-w-2xl mx-auto flex flex-col "
        >
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-large">
              <Image
                className="object-cover"
                src={"/profile.jpg"}
                fill
                alt="an image of Saman Madani"
              />
            </div>
            <span itemProp="name">Saman Madani</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span itemProp="jobTitle">Full Stack Developer</span>
            <div className="flex flex-col  justify-center items-center">
              <p className="font-bold">
                Phone:{" "}
                <span itemProp="telephone" className="font-normal">
                  +989124733987
                </span>
              </p>
              <a href="mailto:samanmadani.dev@gmail.com" itemProp="email">
                <span className="font-bold">Email: </span>
                samanmadani.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
