import OtherPagesHero from "@/components/OtherPagesHero";
import OtherProjectTypesCard from "@/ui/OtherProjectTypesCard";
import Project from "@/components/Project";
import ProjectType from "@/components/ProjectType";
import Talk from "@/components/Cta";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import express from "../assets/web-design/desktop/image-express.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";

const webDesign = () => {
  return (
    <>
      <OtherPagesHero
        title="Web Design"
        aboutTitle="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />

      {/* <ProjectsCard> */}
      <div className="mb-[9.6rem] grid grid-cols-1 gap-[4rem]  sm:mb-[12rem] sm:gap-[3.2rem] sm:px-[3.9rem] xl:mb-[16rem] xl:grid-cols-3  xl:gap-[3rem] xl:px-[16.5rem]">
        <Project
          src={express}
          alt="express"
          title="express"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={transfer}
          alt="transfer"
          title="transfer"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={photon}
          alt="photon"
          title="photon"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={builder}
          alt="builder"
          title="builder"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={blogr}
          alt="blogr"
          title="blogr"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={camp}
          alt="camp"
          title="camp"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        {/* </ProjectsCard> */}
      </div>

      <OtherProjectTypesCard>
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
      </OtherProjectTypesCard>

      <Talk />
    </>
  );
};

export default webDesign;
