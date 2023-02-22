import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div>
        <div>
          <p>WEB DESIGN</p>
          <p>VIEW PROJECTS</p>
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
          <Image />
          <p>PASSIONATE</p>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div>
          <Image />
          <p>RESOURCEFUL</p>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.{" "}
          </p>
        </div>
        <div>
          <Image />
          <p>FRIENDLY</p>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
