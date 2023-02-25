import Head from "next/head";
import Image from "next/image";

import Hero from "@/components/Hero";
import Talk from "@/components/Talk";
import AboutProjects from "@/components/AboutProjects";
import ProjectType from "@/components/ProjectType";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* Homepage proper */}
      <>
        <Hero />

        {/* Projects */}
        <div className="my-[12rem] flex flex-col gap-[2.4rem] px-[2.4rem] outline">
          <ProjectType href="/web-design" projectType="WEB DESIGN" />
          <div className="flex flex-col gap-[2.4rem]">
            <ProjectType href="/app-design" projectType="APP DESIGN" />
            <ProjectType href="/graphic-design" projectType="GRAPHIC DESIGN" />
          </div>
        </div>

        <AboutProjects />
        <Talk />
      </>
    </>
  );
}
