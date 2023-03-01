import Link from "next/link";

type ProjectTypeProps = {
  href: string;
  projectType: string;
  imageNumber: number;
};

const ProjectType = ({ href, projectType, imageNumber }: ProjectTypeProps) => {
  let bgClass;

  if (imageNumber === 1) {
    bgClass = "bg-image-1";
  } else if (imageNumber === 2) {
    bgClass = "bg-image-2";
  } else {
    bgClass = "bg-image-3";
  }

  return (
    <Link
      href={href}
      className={`${bgClass}  grid place-items-center rounded-2xl py-[9.0rem] font-medium text-white`}
    >
      <p className="mb-[1.197rem] text-[2.8rem] leading-[3.6rem] tracking-[0.14rem]">
        {projectType}
      </p>
      <p className="text-[1.5rem] leading-[2.1rem] tracking-[0.5rem]">
        VIEW PROJECTS
        <span></span>
      </p>
    </Link>
  );
};

export default ProjectType;
