import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
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
          <Avatar className="h-32 w-32 border-large" src="/profile.jpg" />
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
      <section id="about" className="container mx-auto">
        <h2 className="text-3xl font-bold text-center my-8">About me</h2>
        <p className="text-lg max-w-2xl mx-auto text-justify leading-loose">
          Versatile Full-Stack Developer with 5 years of professional coding
          experience in Python and JavaScript, complemented by a robust academic
          foundation in mechanical engineering from Sharif University of
          Technology and the University of Tehran, the top universities in Iran.
          Skilled in developing scalable web applications, proficient in machine
          learning and data science, and passionate about leveraging innovative
          technologies to deliver impactful solutions.
        </p>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-center my-8">Skills</h2>
        </div>
      </section>
    </main>
  );
}
