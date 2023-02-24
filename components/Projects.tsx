import Link from "next/link";
import ProjectType from "./ProjectType";
const Projects = () => {
  return (
    <div className="mt-[12rem] px-[2.4rem]">
      <ProjectType href="/web-design" projectType="WEB DESIGN" />
      <div>
        <ProjectType href="/app-design" projectType="APP DESIGN" />
        <ProjectType href="/graphic-design" projectType="GRAPHIC DESIGN" />
      </div>

      {/* About projects section */}
    </div>
  );
};

export default Projects;
