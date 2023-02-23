import Image from "next/image";

type ProjectProps = {
  src: any;
  alt: string;
  title: string;
  info: string;
};
const Project = (props: ProjectProps) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Image src={props.src} alt={props.alt} width={327} height={320} />
      <div className="bg-[#fdf3f0] py-[3.2rem] text-center">
        <p className="mb-[1.6rem] text-[2rem] font-medium uppercase leading-[2.6rem] tracking-[0.5rem] text-peach">
          {props.title}
        </p>
        <p className="mx-[3rem] text-[1.6rem] font-normal leading-[2.6rem] text-dark-grey">
          {props.info}
        </p>
      </div>
    </div>
  );
};

export default Project;
