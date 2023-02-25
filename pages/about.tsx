import AllLocations from "@/components/AllLocations";
import Talk from "@/components/Talk";

const about = () => {
  return (
    <div>
      <div>
        <div className="h-[32rem] bg-[url('../assets/about/mobile/image-about-hero.jpg')]  bg-center "></div>
        <div className="bg-peach py-[8rem] px-[2.4rem] text-center text-white">
          <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem]">
            About Us
          </p>
          <p className="text-[1.5rem] font-normal leading-[2.5rem]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>

      <div>
        <div className="h-[32rem] bg-[url('../assets/about/mobile/image-world-class-talent.jpg')]"></div>
        <div className="py-[8rem] px-[2.4rem] text-center ">
          <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] text-peach">
            World-class talent
          </p>
          <p className="mb-[2.4rem] text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <AllLocations />

      <div>
        <div className="h-[32rem] bg-[url('../assets/about/mobile/image-real-deal.jpg')]"></div>
        <div className="py-[8rem] px-[2.4rem] text-center ">
          <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] text-peach">
            The real deal
          </p>
          <p className="mb-[2.4rem] text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[1.5rem] font-normal leading-[2.5rem] text-dark-grey">
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
