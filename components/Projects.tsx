import Image from "next/image";

import illustrationPassionate from "../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../assets/home/desktop/illustration-friendly.svg";
const Projects = () => {
  return (
    <div className="px-[2.4rem]">
      <div>
        <div className="outline rounded-2xl font-medium  grid place-items-center py-[9.0rem]">
          <p className="text-[2.8rem] mb-[1.197rem] leading-[3.6rem] tracking-[0.14rem]">
            WEB DESIGN
          </p>
          <p className="text-[1.5rem] leading-[2.1rem] tracking-[0.5rem]">
            VIEW PROJECTS
            <span></span>
          </p>
        </div>
        <div>
          <div>
            <p>APP DESIGN</p>
            <p>VIEW PROJECTS</p>
          </div>
          <div>
            <p>GRAPHIC DESIGN</p>
            <p>VIEW PROJECTS</p>
          </div>
        </div>
      </div>

      {/* About projects section */}
      <div>
        <div>
          <Image src={illustrationPassionate} alt="passionate" />
          <p>PASSIONATE</p>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div>
          <Image src={illustrationResourceful} alt="resourceful" />
          <p>RESOURCEFUL</p>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.{" "}
          </p>
        </div>
        <div>
          <Image src={illustrationFriendly} alt="friendly" />
          <p>FRIENDLY</p>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
