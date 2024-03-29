import Talk from "@/components/Cta";
import Meta from "@/components/Head";
import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";
import ProjectType from "@/components/ProjectType";
import OtherProjectTypesCard from "@/ui/OtherProjectTypesCard";
import ProjectsCard from "@/ui/ProjectsCard";
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";

const appDesign = () => {
  return (
    <>
      <Meta page="App Design" />

      <OtherPagesHero
        title="App Design"
        aboutTitle="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <ProjectsCard>
        <Project
          src={airfilter}
          alt="airfilter"
          title="tim brown"
          info="Solving the problem of poor indoor air quality by filtering the air"
        />
        <Project
          src={eyecam}
          alt="eyecam"
          title="tim brown"
          info="Product that lets you edit your favorite photos and videos at any time"
        />
        <Project
          src={faceit}
          alt="faceit"
          title="tim brown"
          info="Get to meet your favorite internet superstar with the faceit app"
        />
        <Project
          src={todo}
          alt="todo"
          title="tim brown"
          info="A todo app that features cloud sync with light and dark mode"
        />
        <Project
          src={loopstudios}
          alt="loopstudios"
          title="tim brown"
          info="A VR experience app made for Loopstudios"
        />
      </ProjectsCard>

      <OtherProjectTypesCard>
        <ProjectType
          href="/web-design"
          projectType="WEB DESIGN"
          imageNumber={1}
        />
        <ProjectType
          href="/graphic-design"
          projectType="GRAPHIC DESIGN"
          imageNumber={3}
        />
      </OtherProjectTypesCard>

      <Talk />
    </>
  );
};

export default appDesign;
