import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute top-[10.5rem] right-0 bottom-0 z-10 w-full bg-black bg-opacity-50 text-[2.4rem] font-normal leading-[2.5rem] tracking-[0.2rem] text-white ">
      <ul className="flex flex-col gap-[3.2rem] bg-black px-[2.4rem] py-[4.8rem]">
        <li>
          <Link href="/about">OUR COMPANY</Link>
        </li>
        <li>
          <Link href="/locations">LOCATIONS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
