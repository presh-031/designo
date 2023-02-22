import Image from "next/image";
import imgHeroPhone from "../assets/home/desktop/image-hero-phone.png";

const Hero = () => {
  return (
    <div className="bg-[url('../assets/home/desktop/bg-pattern-hero-home.svg')]">
      <div>
        <p>Award-winning custom designs and digital branding solutions.</p>
        <p>
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
