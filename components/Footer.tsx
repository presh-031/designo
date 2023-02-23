import Image from "next/image";
import Nav from "./Nav";

import logo from "../assets/shared/desktop/logo-light.png";
const Footer = () => {
  return (
    <footer className="px-[2.4rem] font-normal bg-black pt-[6.4rem] text-white text-center">
      <div>
        <div className="border-b-[1px] border-white">
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
      <div className="">
        <ul className=" text-[1.6rem] leading-[2.6rem]">
          <li className="font-bold">Designo Central Office</li>
          <li>3886 Wellington Street</li>
          <li>Toronto, Ontario M9C 3J5</li>
        </ul>

        <ul>
          <li className="font-bold">Contact Us (Central Office)</li>
          <li>P : +1 253-863-8967</li>
          <li>M : contact@designo.co</li>
        </ul>

        <div>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
