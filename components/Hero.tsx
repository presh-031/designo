import Image from "next/image";
import imgHeroPhone from "../assets/home/desktop/image-hero-phone.png";
import WhiteButton from "./WhiteButton";

const Hero = () => {
  return (
    <div className=" pt-[8.0rem] text-white bg-peach bg-no-repeat bg-left px-[2.4rem] text-center bg-[url('../assets/home/desktop/bg-pattern-hero-home.svg')]">
      <div>
        <p className="font-medium  mb-[1.4rem] text-[3.2rem] leading-[3.6rem]">
          Award-winning custom designs and digital branding solutions.
        </p>
        <p className="mb-[2.4rem] font-normal text-[1.5rem] leading-[2.5rem]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <WhiteButton text="learn more" />
      </div>
      <div className="outline h-[37.1rem] px-[2.1rem] bg-[url('../assets/home/desktop/image-hero-phone.png')] bg-top bg-no-repeat ">
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
