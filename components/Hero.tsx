import Image from "next/image";
import imgHeroPhone from "../assets/home/desktop/image-hero-phone.png";

const Hero = () => {
  return (
    <div className="pt-[8.0rem] text-white bg-peach bg-no-repeat bg-left px-[2.4rem] text-center bg-[url('../assets/home/desktop/bg-pattern-hero-home.svg')]">
      <div>
        <p className="font-medium  mb-[1.4rem] text-[3.2rem] leading-[3.6rem]">
          Award-winning custom designs and digital branding solutions.
        </p>
        <p className="mb-[2.4rem] font-normal text-[1.5rem] leading-[2.5rem]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="bg-light-grey rounded-2xl text-dark-grey px-[2.4rem] py-[1.8rem] font-medium text-[1.5rem] leading-[2.198rem] tracking-[0.1rem]">
          LEARN MORE
        </button>
      </div>
      <div className="outline">
        <Image
          className="object-cover outline"
          src={imgHeroPhone}
          alt="hero-phone"
        />
      </div>
    </div>
  );
};

export default Hero;
