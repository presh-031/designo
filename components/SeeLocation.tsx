import Image from "next/image";

type seeLocationProps = {
  src: any;
  location: string;
};

const SeeLocation = (props: seeLocationProps) => {
  return (
    <div>
      <div>
        <Image src={props.src} alt={props.location} />
      </div>
      <p>{props.location}</p>
      <button>see location</button>
    </div>
  );
};

export default SeeLocation;
