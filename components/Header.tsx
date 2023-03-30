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
    <header className="flex items-center justify-between px-[2.4rem] py-[3.5rem]   sm:py-[6.4rem] sm:px-[3.9rem] xl:px-[16.5rem] xl:py-[7rem] ">
      <Link
        onClick={() => {
          setIsOpen(false);
        }}
        href="/"
      >
        <Image src={logo} alt="designo-logo" width={202} height={27} />
      </Link>

      <ul className="hidden text-[1.4rem]  sm:flex sm:items-center  sm:gap-[2rem] sm:font-normal  sm:leading-[1.4rem] sm:tracking-[2px] sm:text-dark-grey min-[680px]:gap-[4.2rem] ">
        <li>
          <Link href="/about" className="hover:underline ">
            OUR COMPANY
          </Link>
        </li>
        <li>
          <Link
            href="/locations"
            className="hover:underline hover:decoration-dark-grey hover:decoration-[1px] "
          >
            LOCATIONS
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:underline hover:decoration-dark-grey hover:decoration-[1px]"
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <div onClick={handleMenuClick} className="sm:hidden">
        {isOpen ? (
          <Image src={closeMenu} alt="closemenu" width={24} height={20} />
        ) : (
          <Image src={hamburgerMenu} alt="openmenu" width={24} height={20} />
        )}
      </div>
      {isOpen && <Nav setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
