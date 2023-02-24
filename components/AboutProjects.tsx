import Image from "next/image";

import illustrationPassionate from "../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../assets/home/desktop/illustration-friendly.svg";

const AboutProjects = () => {
  return (
    <div className=" outline">
      <div>
        <Image src={illustrationPassionate} alt="passionate" />
        <p>PASSIONATE</p>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
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
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </div>
  );
};

export default AboutProjects;
