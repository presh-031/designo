import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";

import express from "../assets/web-design/desktop/image-express.jpg";
const webDesign = () => {
  return (
    <div>
      <OtherPagesHero
        title="Graphic Design"
        aboutTitle="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div>
        <Project
          src={express}
          alt="express"
          title="express"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
      </div>
    </div>
  );
};

export default webDesign;
