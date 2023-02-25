import Image from "next/image";
import Nav from "./Nav";

import logo from "../assets/shared/desktop/logo-light.png";

import facebook from "../assets/shared/desktop/icon-facebook.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-black px-[2.4rem] pt-[25.35rem] text-center  font-normal text-white">
      <div>
        <div className="border-b-[1px] border-white border-opacity-50">
          <Image
            className=" mx-auto  mb-[3.2rem]"
            src={logo}
            alt="designo-logo"
            width={202}
            height={27}
          />
        </div>
        <Nav />
      </div>
      <div className="mt-[4rem] flex flex-col gap-[4rem] pb-[6.4rem]">
        <ul className=" text-[1.6rem] leading-[2.6rem] opacity-50">
          <li className="font-bold">Designo Central Office</li>
          <li>3886 Wellington Street</li>
          <li>Toronto, Ontario M9C 3J5</li>
        </ul>

        <ul className=" text-[1.6rem] leading-[2.6rem] opacity-50">
          <li className="font-bold">Contact Us (Central Office)</li>
          <li>P : +1 253-863-8967</li>
          <li>M : contact@designo.co</li>
        </ul>

        <div className="flex  items-center justify-center gap-[1.6rem]">
          <Image src={facebook} alt="facebook" />
          <Image src={youtube} alt="youtube" />
          <Image src={twitter} alt="twitter" />
          <Image src={pinterest} alt="pinterest" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
