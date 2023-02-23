import OtherPagesHero from "@/components/OtherPagesHero";
import Project from "@/components/Project";

import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

const appDesign = () => {
  return (
    <div>
      <OtherPagesHero
        title="Web Design"
        aboutTitle="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <div className="grid grid-cols-1 gap-[4rem] px-[2.4rem] pt-[9.6rem]">
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
      </div>
    </div>
  );
};

export default appDesign;
