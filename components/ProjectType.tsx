import Image from "next/image";
import Link from "next/link";
import rightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

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
      className={`${bgClass} grid place-items-center rounded-2xl   py-[9.0rem] font-medium text-white sm:py-[5.3rem]`}
    >
      <p className="mb-[1.197rem] text-[2.8rem] leading-[3.6rem] tracking-[0.14rem] sm:mb-[2.4rem] sm:text-[4rem] sm:leading-[4.8rem] sm:tracking-[.2]">
        {projectType}
      </p>
      <p className="flex items-center gap-[1.6rem] text-[1.5rem] leading-[2.1rem] tracking-[0.5rem] sm:gap-[2.1rem] ">
        VIEW PROJECTS
        <Image src={rightArrow} alt="arrow-right" />
      </p>
    </Link>
  );
};

export default ProjectType;
