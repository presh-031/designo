import Image from "next/image";
import imgHeroPhone from "../assets/home/desktop/image-hero-phone.png";
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
      <div className="h-[37.1rem] bg-[url('../assets/home/desktop/image-hero-phone.png')] bg-top bg-no-repeat px-[2.1rem] outline ">
        {/* <Image
          className="object-cover outline border-2 border-red-800"
          src={imgHeroPhone}
          alt="hero-phone"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
