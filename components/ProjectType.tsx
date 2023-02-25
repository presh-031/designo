import Link from "next/link";

type ProjectTypeProps = {
  href: string;
  // bgUrl: string;
  projectType: string;
};
const ProjectType = (props: ProjectTypeProps) => {
  return (
    <Link
      href={props.href}
      className=" grid place-items-center rounded-2xl bg-[url('../assets/home/mobile/image-web-design.jpg')]  py-[9.0rem] font-medium text-white"
    >
      <p className="mb-[1.197rem] text-[2.8rem] leading-[3.6rem] tracking-[0.14rem]">
        {props.projectType}
      </p>
      <p className="text-[1.5rem] leading-[2.1rem] tracking-[0.5rem]">
        VIEW PROJECTS
        <span></span>
      </p>
    </Link>
  );
};

export default ProjectType;
