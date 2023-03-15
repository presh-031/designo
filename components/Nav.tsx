import Link from "next/link";

type NavProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ setIsOpen }: NavProps) => {
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const handleNavBgClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      onClick={handleNavBgClick}
      className="absolute top-[9.7rem] right-0 bottom-0 z-[10000] w-full bg-black bg-opacity-50 text-[2.4rem] font-normal leading-[2.5rem] tracking-[0.2rem] text-white "
    >
      <ul
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-[3.2rem] bg-black px-[2.4rem] py-[4.8rem]"
      >
        <li>
          <Link onClick={handleMenuItemClick} href="/about">
            OUR COMPANY
          </Link>
        </li>
        <li>
          <Link onClick={handleMenuItemClick} href="/locations">
            LOCATIONS
          </Link>
        </li>
        <li>
          <Link onClick={handleMenuItemClick} href="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
