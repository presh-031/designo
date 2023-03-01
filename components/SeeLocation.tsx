import Image from "next/image";
import Link from "next/link";

type seeLocationProps = {
  src: any;
  location: string;
  href: string;
};

const SeeLocation = (props: seeLocationProps) => {
  return (
    <div className=" border border-red-800 text-center font-normal ">
      <div
        className=" mx-auto mb-[4.8rem]  grid h-[20.2rem] w-[20.2rem]  rounded-full   outline "
        style={{
          background:
            "linear-gradient(180deg, rgba(93,2,2,0) 0%, rgba(93,2,2,0.005) 100%)",
        }}
      >
        <Image
          className="border border-red-800"
          src={props.src}
          alt={props.location}
        />
      </div>
      <p className="mb-[3.2rem] text-[2rem]  uppercase leading-[2.6rem] tracking-[0.5rem]  text-dark-grey">
        {props.location}
      </p>
      <Link
        href={`/locations/#${props.href}`}
        scroll={false}
        className="inline-block rounded-2xl bg-peach p-[1.8rem] text-[1.5rem] uppercase leading-[2.1rem]  tracking-[0.1rem] text-white"
      >
        see location
      </Link>
    </div>
  );
};

export default SeeLocation;
