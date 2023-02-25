import Link from "next/link";

const Nav = () => {
  return (
    <nav className="mt-[3.2rem] text-[1.4rem] font-normal leading-[1.4rem] tracking-[0.2rem] text-white">
      <ul className="flex flex-col gap-[3.2rem]">
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
