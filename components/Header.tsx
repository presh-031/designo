import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "../assets/shared/desktop/logo-dark.png";
import hamburgerMenu from "../assets/shared/mobile/icon-hamburger.svg";

type HeaderProps = {
  getIsOpen: (isOpen: boolean) => boolean;
};

const Header = ({ getIsOpen }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    getIsOpen(isOpen);
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between px-[2.4rem] py-[3.9rem]  ">
      <Image src={logo} alt="designo-logo" width={202} height={27} />
      <Image
        onClick={handleMenuClick}
        src={hamburgerMenu}
        alt="menu"
        width={24}
        height={20}
      />
    </header>
  );
};

export default Header;
