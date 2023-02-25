import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";

import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import ProjectType from "@/components/ProjectType";
import Talk from "@/components/Talk";
const webDesign = () => {
  return (
    <div>
      <OtherPagesHero
        title="Web Design"
        aboutTitle="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <div className="grid grid-cols-1 gap-[4rem] px-[2.4rem] pt-[9.6rem]">
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
      </div>

      <div className="mt-[9.6rem] mb-[-9.4rem] flex flex-col gap-[2.4rem] border border-red-800 px-[2.4rem]">
        <ProjectType href="/app-design" projectType="APP DESIGN" />
        <ProjectType href="/graphic-design" projectType="GRAPHIC DESIGN" />
      </div>

      <Talk />
    </div>
  );
};

export default webDesign;
