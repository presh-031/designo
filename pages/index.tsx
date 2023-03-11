import AboutProjects from "@/components/AboutProjects";
import Talk from "@/components/Cta";
import Hero from "@/components/Hero";
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
        <div className="my-[12rem] flex flex-col gap-[2.4rem] px-[2.4rem] sm:px-[4rem]">
          <ProjectType
            href="/web-design"
            projectType="WEB DESIGN"
            imageNumber={1}
          />
          <div className="flex flex-col gap-[2.4rem]">
            <ProjectType
              href="/app-design"
              projectType="APP DESIGN"
              imageNumber={2}
            />
            <ProjectType
              href="/graphic-design"
              projectType="GRAPHIC DESIGN"
              imageNumber={3}
            />
          </div>
        </div>

        <AboutProjects />
        <Talk />
      </>
    </>
  );
}
