import AboutProjects from "@/components/AboutProjects";
import Cta from "@/components/Cta";
import Meta from "@/components/Head";
import Hero from "@/components/Hero";
import ProjectType from "@/components/ProjectType";

export default function Home() {
  return (
    <>
      <Meta page="Home" />
      <>
        <Hero />

        {/* Projects */}
        <div className="my-[12rem] flex flex-col gap-[2.4rem] px-[2.4rem] max-[300px]:px-[1.8rem]  sm:px-[4rem] xl:my-[16rem] xl:flex-row xl:px-[16.5rem]">
          <div className=" xl:h-[64rem] xl:flex-1">
            <ProjectType
              href="/web-design"
              projectType="WEB DESIGN"
              imageNumber={1}
            />
          </div>
          <div className="flex flex-col gap-[2.4rem] xl:flex-1">
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
        <Cta />
      </>
    </>
  );
}
