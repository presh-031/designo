import Image from "next/image";
import Link from "next/link";

type seeLocationProps = {
  src: any;
  location: string;
  href: string;
  gradientDirection: string;
};

const SeeLocation = ({
  src,
  location,
  href,
  gradientDirection,
}: seeLocationProps) => {
  const gradient = `linear-gradient(${gradientDirection}, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1) 100%)`;

  return (
    <div className="w-[35rem] text-center font-normal  max-[300px]:w-full">
      <div
        className="mx-auto mb-[4.8rem] grid h-[20.2rem]  w-[20.2rem] rounded-full"
        style={{
          background: gradient,
        }}
      >
        <Image src={src} alt={location} />
      </div>
      <p className="mb-[3.2rem] text-[2rem]  uppercase leading-[2.6rem] tracking-[0.5rem]  text-dark-grey">
        {location}
      </p>
      <Link
        href={`/locations/#${href}`}
        scroll={false}
        className="inline-block rounded-2xl bg-peach p-[1.8rem] text-[1.5rem] uppercase leading-[2.1rem] tracking-[0.1rem]  text-white transition duration-300 hover:bg-light-peach"
      >
        see location
      </Link>
    </div>
  );
};

export default SeeLocation;
