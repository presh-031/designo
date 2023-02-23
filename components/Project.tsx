import Image from "next/image";

type ProjectProps = {
  title: string;
  info: string;
};
const Project = (props: ProjectProps) => {
  return (
    <div>
      <div>
        <Image src={} alt="project" />
      </div>
      <div>
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default Project;
