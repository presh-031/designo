import WhiteButton from "./WhiteButton";

const Hero = () => {
  return (
    <div className=" bg-peach bg-[url('../assets/home/desktop/bg-pattern-hero-home.svg')] bg-left bg-no-repeat pt-[8.0rem] text-center text-white sm:mx-[4rem] sm:rounded-2xl sm:pt-[6rem] xl:mx-[16.5rem] xl:flex xl:pt-0">
      <div className="mx-[2.4rem] outline sm:mx-[5.80rem] xl:mx-0 xl:w-[50%] xl:text-left">
        <p className="mb-[1.4rem] text-[3.2rem] font-medium leading-[3.6rem]  sm:mb-[0.80rem] sm:text-[4.8rem] sm:leading-[4.8rem]">
          Award-winning custom designs and digital branding solutions
        </p>
        <p className="mb-[2.4rem] text-[1.5rem] font-normal leading-[2.5rem] sm:mb-[1.90rem] sm:px-[6.9rem] sm:text-[1.6rem] sm:leading-[2.6rem]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <WhiteButton text="learn more" url="/about" />
      </div>

      {/* h-37.1rem? */}
      <div className="h-[47.1rem] bg-[url('../assets/home/desktop/image-hero-phone.png')] bg-[center_top_-6.55rem] bg-no-repeat  px-[2.1rem]  outline xl:w-[40%]"></div>
    </div>
  );
};

export default Hero;
