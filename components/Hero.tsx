import Image from "next/image";
import imgHeroPhone from "../assets/home/desktop/image-hero-phone.png";

const Hero = () => {
  return (
    <div className="pt-[8.0rem] bg-peach bg-left px-[2.4rem] text-center bg-[url('../assets/home/desktop/bg-pattern-hero-home.svg')]">
      <div>
        <p className="font-medium  mb-[1.4rem] text-[3.2rem] leading-[3.6rem]">
          Award-winning custom designs and digital branding solutions.
        </p>
        <p className="font-normal text-[1.5rem] leading-[2.5rem]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div>
        <Image src={imgHeroPhone} alt="hero-phone" />
      </div>
    </div>
  );
};

export default Hero;
