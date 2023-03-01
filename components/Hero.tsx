import WhiteButton from "./WhiteButton";

const Hero = () => {
  return (
    <div className=" bg-peach bg-[url('../assets/home/desktop/bg-pattern-hero-home.svg')] bg-left bg-no-repeat px-[2.4rem] pt-[8.0rem] text-center text-white">
      <div>
        <p className="mb-[1.4rem]  text-[3.2rem] font-medium leading-[3.6rem]">
          Award-winning custom designs and digital branding solutions.
        </p>
        <p className="mb-[2.4rem] text-[1.5rem] font-normal leading-[2.5rem]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <WhiteButton text="learn more" url="/about" />
      </div>

      {/* h-37.1rem? */}
      <div className="h-[47.1rem] bg-[url('../assets/home/desktop/image-hero-phone.png')]  bg-[center_top_-6.55rem]  bg-no-repeat px-[2.1rem]"></div>
    </div>
  );
};

export default Hero;
