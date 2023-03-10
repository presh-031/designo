import Image from "next/image";

type ProjectProps = {
  src: any;
  alt: string;
  title: string;
  info: string;
};
const Project = (props: ProjectProps) => {
  return (
    <div className="mx-auto  sm:flex sm:justify-center">
      <Image
        src={props.src}
        alt={props.alt}
        className="mx-auto h-[32rem] w-[32.7rem] rounded-t-2xl object-cover sm:w-[50%] sm:rounded-none sm:rounded-l-2xl md:h-[31rem] "
      />
      <div className="mx-auto w-[32.7rem] rounded-b-2xl bg-[#fdf3f0] px-[3rem] py-[3.2rem] text-center sm:flex sm:w-[50%] sm:flex-col sm:justify-center  sm:rounded-none sm:rounded-r-2xl  sm:px-[4.1rem] sm:py-0 ">
        <p className="mb-[1.6rem] text-[2rem] font-medium uppercase leading-[2.6rem] tracking-[0.5rem] text-peach sm:mb-[1.46rem]">
          {props.title}
        </p>
        <p className=" text-[1.6rem] font-normal leading-[2.6rem] text-dark-grey">
          {props.info}
        </p>
      </div>
    </div>
  );
};

export default Project;
