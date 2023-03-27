import AllLocations from "@/components/AllLocations";
import Talk from "@/components/Cta";

const about = () => {
  return (
    <div className="">
      <div className="  sm:mx-[4rem] sm:mb-[12rem] xl:mx-[16.5rem] xl:mb-[16rem] xl:flex xl:h-[48rem] xl:flex-row-reverse">
        <div className="h-[32rem] bg-[url('../assets/about/mobile/image-about-hero.jpg')] bg-cover bg-center min-[450px]:bg-[url('../assets/about/tablet/image-about-hero.jpg')] sm:rounded-t-2xl xl:h-full  xl:w-[42.8%] xl:rounded-none xl:rounded-r-2xl xl:bg-[url('../assets/about/desktop/image-about-hero.jpg')]"></div>
        <div className="bg-peach bg-[url('../assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat py-[8rem] px-[2.4rem] text-center text-white sm:rounded-b-2xl sm:px-[5.8rem] sm:py-[6.4rem]  xl:flex xl:w-[57.2%] xl:flex-col xl:justify-center xl:rounded-none xl:rounded-l-2xl xl:py-[0] xl:pr-[8.2rem] xl:pl-[9.5rem] xl:text-left">
          <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] sm:mb-[3.2rem] sm:text-[4.8rem] sm:leading-[4.8rem] ">
            About Us
          </p>
          <p className="text-[1.5rem] font-normal leading-[2.5rem]  sm:text-[1.6rem] sm:leading-[2.6rem]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className=" sm:mx-[4rem] sm:overflow-hidden sm:rounded-2xl xl:mx-[16.5rem] xl:flex xl:h-[64rem]">
        <div className="h-[32rem] bg-[url('../assets/about/mobile/image-world-class-talent.jpg')]  bg-cover bg-center  min-[450px]:bg-[url('../assets/about/tablet/image-world-class-talent.jpg')] xl:h-full xl:w-[42.8%] xl:bg-[url('../assets/about/desktop/image-world-class-talent.jpg')]"></div>
        <div className="bg-[#fdf3f0] bg-[url('../assets/shared/desktop/bg-pattern-two-circles.svg')] py-[8rem] px-[2.4rem] text-center sm:px-[5.8rem] sm:py-[6.8rem] xl:flex xl:w-[57.2%] xl:flex-col xl:justify-center xl:py-[0] xl:px-[9.4rem] xl:text-left ">
          <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] text-peach sm:text-[4rem] sm:leading-[4.8rem]">
            World-class talent
          </p>

          <p className="mb-[2.4rem] text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey sm:text-[1.6rem] sm:leading-[2.6rem]">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey sm:text-[1.6rem] sm:leading-[2.6rem]">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <AllLocations />

      <div className=" sm:mx-[4rem] sm:overflow-hidden sm:rounded-2xl xl:mx-[16.5rem] xl:flex xl:h-[64rem] xl:flex-row-reverse">
        <div className="h-[32rem]  bg-[url('../assets/about/mobile/image-real-deal.jpg')] bg-cover bg-center min-[450px]:bg-[url('../assets/about/tablet/image-real-deal.jpg')] xl:h-full xl:w-[42.8%] xl:bg-[url('../assets/about/desktop/image-real-deal.jpg')]"></div>
        <div className="bg-[#fdf3f0] bg-[url('../assets/shared/desktop/bg-pattern-two-circles.svg')] py-[8rem] px-[2.4rem] text-center sm:px-[5.8rem] sm:py-[6.8rem] xl:flex xl:w-[57.2%] xl:flex-col xl:justify-center xl:py-[15.4rem] xl:px-[9.4rem] xl:text-left ">
          <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] text-peach sm:text-[4rem] sm:leading-[4.8rem]">
            The real deal
          </p>

          <p className="mb-[2.4rem] text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey sm:text-[1.6rem] sm:leading-[2.6rem]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey sm:text-[1.6rem] sm:leading-[2.6rem]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>

      <Talk />
    </div>
  );
};

export default about;
