import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";

import change from "../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";

const graphicDesign = () => {
  return (
    <div>
      <OtherPagesHero
        title="Graphic Design"
        aboutTitle="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div className="grid grid-cols-1 gap-[4rem] px-[2.4rem] pt-[9.6rem]">
        <Project
          src={change}
          alt="change"
          title="tim brown"
          info="A book cover designed for 
          Tim Brown&lsquo;s new release, &rsquo;Change&rsquo;"
        />
        <Project
          src={boxedWater}
          alt="boxedWater"
          title="boxed water"
          info="A simple packaging concept made for Boxed Water"
        />
        <Project
          src={science}
          alt="science"
          title="science!"
          info="A poster made in collaboration with the Federal Art Project"
        />
      </div>
    </div>
  );
};

export default graphicDesign;
