import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";

const webDesign = () => {
  return (
    <div>
      <OtherPagesHero
        title="Graphic Design"
        aboutTitle="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div>
        <Project />
      </div>
    </div>
  );
};

export default webDesign;
