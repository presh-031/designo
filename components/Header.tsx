import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/shared/desktop/logo-dark.png";
import closeMenu from "../assets/shared/mobile/icon-close.svg";
import hamburgerMenu from "../assets/shared/mobile/icon-hamburger.svg";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="flex items-center justify-between px-[2.4rem] py-[3.5rem]  ">
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        href="/"
      >
        <Image src={logo} alt="designo-logo" width={202} height={27} />
      </Link>
      <div onClick={handleMenuClick}>
        {isOpen ? (
          <Image src={closeMenu} alt="menu" width={24} height={20} />
        ) : (
          <Image src={hamburgerMenu} alt="menu" width={24} height={20} />
        )}
      </div>
      {isOpen && <Nav setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
