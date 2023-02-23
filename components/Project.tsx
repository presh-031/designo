import Image from "next/image";

type ProjectProps = {
  src: any;
  alt: string;
  title: string;
  info: string;
};
const Project = (props: ProjectProps) => {
  return (
    <div>
      <div>
        <Image src={props.src} alt={props.alt} />
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default Project;
