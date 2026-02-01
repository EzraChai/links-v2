import { ModeToggle } from "@/components/dark-mode-button";
import { Button } from "@/components/ui/button";
import { clientFetch } from "@/lib/sanity";
import { Website } from "@/lib/type";
import { track } from "@vercel/analytics";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default async function Home() {
  const websiteLinks = await clientFetch<Website[]>(
    `*[_type == "page"] | order(_createdAt asc)`,
  );

  const pinnedLinks = websiteLinks.filter((link) => link.isPinned);
  const unpinnedLinks = websiteLinks.filter((link) => !link.isPinned);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-20">
      <div className="grid md:grid-cols-2 md:bg-white dark:bg-transparent md:px-12 md:py-16 rounded-lg">
        <div className="flex justify-center items-center  flex-col">
          <h1 className="mt-24 md:mt-0 text-6xl md:text-6xl text-black font-black dark:text-white">
            Hallo!
          </h1>
          <h6 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
            I&apos;m
            <span className="text-xl md:text-2xl text-black dark:text-white font-extrabold">
              {" "}
              ezrachai.
            </span>
          </h6>
          <div className="mt-2 gap-1 flex justify-around items-center md:pr-2">
            <a
              href="https://github.com/EzraChai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-3 cursor-pointer" variant={"ghost"}>
                <FaGithub className="w-4 h-4 md:w-5.5 md:h-5.5" />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/juanzhx_/"
              rel="noopener noreferrer"
            >
              <Button className="px-3 cursor-pointer" variant={"ghost"}>
                <FaInstagram className="w-4 h-4 md:w-5.5 md:h-5.5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ezrachai"
              rel="noopener noreferrer"
            >
              <Button className="px-3 cursor-pointer" variant={"ghost"}>
                <FaLinkedin className="w-4 h-4 md:w-5.5 md:h-5.5" />
              </Button>
            </a>
          </div>
          <div className="md:mt-8">
            <ModeToggle />
          </div>
        </div>
        <div className="md:flex justify-center gap-12">
          <div className="mt-12 md:mt-0">
            <h6 className="text-center md:text-left md:ml-4 uppercase text-xs font-bold dark:text-red-200 text-red-600">
              Cool Projects
            </h6>
            <div className="flex mt-2 justify-center items-center md:items-start gap-0 md:gap-1 flex-col">
              {pinnedLinks.reverse().map((website) => (
                <a
                  className="w-max"
                  key={website._id}
                  href={website.url}
                  target="_blank"
                >
                  <Button variant={"ghost"} className="py-1 cursor-pointer">
                    <h4 className="text-md font-bold">{website.title}</h4>
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h6 className="text-center md:text-left md:ml-4 uppercase text-xs font-bold dark:text-red-200 text-red-600">
              Random Projects
            </h6>
            <div className="flex mt-2 justify-center items-center md:items-start gap-0 md:gap-1 flex-col">
              {unpinnedLinks.reverse().map((website) => (
                <a
                  className="w-max"
                  key={website._id}
                  href={website.url}
                  target="_blank"
                >
                  <Button variant={"ghost"} className="py-1 cursor-pointer">
                    <h4 className="text-md font-bold">{website.title}</h4>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
