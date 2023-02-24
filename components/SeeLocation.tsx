import Image from "next/image";

type seeLocationProps = {
  src: any;
  location: string;
};

const SeeLocation = (props: seeLocationProps) => {
  return (
    <div className="text-center font-normal ">
      <div className="mx-auto mb-[4.8rem] grid  h-[20.2rem] w-[20.2rem] place-items-center rounded-full outline ">
        <Image src={props.src} alt={props.location} />
      </div>
      <p className="mb-[3.2rem] text-[2rem]  uppercase leading-[2.6rem] tracking-[0.5rem]  text-dark-grey">
        {props.location}
      </p>
      <button className="rounded-2xl bg-peach p-[1.8rem] text-[1.5rem] uppercase leading-[2.1rem]  tracking-[0.1rem] text-white">
        see location
      </button>
    </div>
  );
};

export default SeeLocation;
