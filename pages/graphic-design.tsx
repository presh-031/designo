import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";

import change from "../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";
const graphicDesign = () => {
  return (
    <div>
      <OtherPagesHero
        title="Web Design"
        aboutTitle="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <div className="grid grid-cols-1 gap-[4rem] px-[2.4rem] pt-[9.6rem]">
        <Project
          src={change}
          alt="change"
          title="the brown"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={boxedWater}
          alt="boxedWater"
          title="boxedWater"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
        <Project
          src={science}
          alt="science"
          title="science!"
          info="A multi-carrier shipping website for ecommerce businesses"
        />
      </div>
    </div>
  );
};

export default graphicDesign;
