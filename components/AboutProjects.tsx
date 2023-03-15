import Image from "next/image";
import illustrationFriendly from "../assets/home/desktop/illustration-friendly.svg";
import illustrationPassionate from "../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceful from "../assets/home/desktop/illustration-resourceful.svg";

const AboutProjects = () => {
  return (
    <div className="flex flex-col gap-[8rem] text-center   sm:gap-[3.2rem]">
      <div className="px-[2.4rem] text-dark-grey  sm:flex sm:gap-[4.80rem]  sm:px-[4rem]">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1) 100%)",
          }}
          className="mx-auto inline-block rounded-full   "
        >
          <Image
            src={illustrationPassionate}
            alt="passionate"
            width={202}
            height={202}
            className="w-[100%]  sm:h-full sm:w-auto"
          />
        </div>
        <div className=" sm:flex sm:flex-1 sm:flex-col sm:justify-center sm:text-left">
          <p className="mt-[4.8rem] mb-[3.2rem] text-[2rem] font-medium leading-[2.6rem] tracking-[0.5rem] sm:mt-0 sm:mb-[1.6rem] ">
            PASSIONATE
          </p>
          <p className="text-[1.6rem] font-normal leading-[2.6rem] ">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>

      <div className="px-[2.4rem] text-dark-grey  sm:flex sm:gap-[4.80rem]  sm:px-[4rem]">
        <div
          style={{
            background:
              "linear-gradient(-90deg, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1) 100%)",
          }}
          className="mx-auto inline-block rounded-full   "
        >
          <Image
            src={illustrationResourceful}
            alt="resourceful"
            width={202}
            height={202}
            className="w-[100%]  sm:h-full sm:w-auto"
          />
        </div>
        <div className=" sm:flex sm:flex-1 sm:flex-col sm:justify-center sm:text-left">
          <p className="mt-[4.8rem] mb-[3.2rem] text-[2rem] font-medium leading-[2.6rem] tracking-[0.5rem] sm:mt-0 sm:mb-[1.6rem] ">
            RESOURCEFUL
          </p>
          <p className="text-[1.6rem] font-normal leading-[2.6rem] ">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.{" "}
          </p>
        </div>
      </div>

      <div className="px-[2.4rem] text-dark-grey  sm:flex sm:gap-[4.80rem]  sm:px-[4rem]">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1) 100%)",
          }}
          className="mx-auto inline-block rounded-full   "
        >
          <Image
            src={illustrationFriendly}
            alt="friendly"
            width={202}
            height={202}
            className="w-[100%]  sm:h-full sm:w-auto"
          />
        </div>
        <div className=" sm:flex sm:flex-1 sm:flex-col sm:justify-center sm:text-left">
          <p className="mt-[4.8rem] mb-[3.2rem] text-[2rem] font-medium leading-[2.6rem] tracking-[0.5rem] sm:mt-0 sm:mb-[1.6rem] ">
            FRIENDLY
          </p>
          <p className="text-[1.6rem] font-normal leading-[2.6rem] ">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProjects;
