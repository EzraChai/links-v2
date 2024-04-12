import { ModeToggle } from "@/components/dark-mode-button";
import { Button } from "@/components/ui/button";
import { clientFetch } from "@/lib/sanity";
import { Website } from "@/lib/type";
import Image from "next/image";
import JapanImage from "@/../public/japan.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default async function Home() {
  const websiteLinks = await clientFetch<Website[]>(
    `*[_type == "page"] | order(_createdAt asc)`
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-20">
      <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-transparent px-12 py-16 rounded-lg">
        <div className="flex justify-center items-center  flex-col">
          <h1 className="text-3xl md:text-6xl text-black font-black dark:text-white">
            Hello!
          </h1>
          <h6 className="text-md md:text-2xl text-neutral-600 dark:text-neutral-300">
            I&apos;m
            <span className="text-md md:text-2xl text-black dark:text-white font-extrabold">
              {" "}
              ezrachai.
            </span>
          </h6>
          <div className="mt-2 gap-1 flex justify-around items-center pr-2">
            <a
              href="https://github.com/EzraChai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-3 " variant={"ghost"}>
                <FaGithub className="w-[16px] h-[16px] md:w-[22px] md:h-[22px]" />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/juanzhx_/"
              rel="noopener noreferrer"
            >
              <Button className="px-3" variant={"ghost"}>
                <FaInstagram className="w-[16px] h-[16px] md:w-[22px] md:h-[22px]" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ezra-chai-juan-zhe-9b8b3a209/"
              rel="noopener noreferrer"
            >
              <Button className="px-3" variant={"ghost"}>
                <FaLinkedin className="w-[16px] h-[16px] md:w-[22px] md:h-[22px]" />
              </Button>
            </a>
          </div>
          <div className="hidden md:block md:mt-8">
            <ModeToggle />
          </div>
        </div>
        <div>
          <h6 className="ml-4 uppercase text-sm font-extrabold dark:text-neutral-300 text-neutral-600">
            Projects
          </h6>
          <div className="flex justify-start mt-4 gap-1 flex-col">
            {websiteLinks.map((website) => (
              <a
                className="w-max"
                key={website._id}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"ghost"} className="py-1">
                  <h4 className="text-md font-bold">{website.title}</h4>
                </Button>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:hidden mt-8">
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}