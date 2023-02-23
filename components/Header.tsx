import Image from "next/image";

import logo from "../assets/shared/desktop/logo-dark.png";
import hamburgerMenu from "../assets/shared/mobile/icon-hamburger.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[2.4rem] py-[3.9rem] ">
      <div className="">
        <Image src={logo} alt="designo-logo" width={202} height={27} />
      </div>
      <div className="">
        <Image src={hamburgerMenu} alt="menu" width={24} height={20} />
      </div>
      <div className="hidden">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
