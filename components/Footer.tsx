import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import logo from "../assets/shared/desktop/logo-light.png";

const Footer = () => {
  const router = useRouter();
  const isContactPage = router.pathname === "/contact";

  return (
    <footer
      className={`bg-black px-[2.4rem]  ${
        isContactPage
          ? "pt-[6.4rem] sm:pt-[8.0rem]"
          : "pt-[25.35rem] sm:pt-[16.6rem]"
      } text-center font-normal text-white  sm:px-[3.9rem] xl:px-[16.5rem]`}
    >
      <div className=" sm:flex sm:justify-between sm:border-b-[1px] sm:border-white sm:border-opacity-10 sm:pb-[4rem]">
        <Link
          href="/"
          className="mb-[3.2rem] block border-b-[1px] border-white border-opacity-10 sm:mb-0  sm:border-none"
        >
          <Image
            className="mx-auto mb-[3.2rem] sm:mb-0"
            src={logo}
            alt="designo-logo"
            width={202}
            height={27}
          />
        </Link>
        <ul className=" flex flex-col gap-[2.2rem] text-[1.4rem] font-normal leading-[1.4rem] tracking-[0.2rem] max-[639px]:gap-[3.2rem]  sm:flex-row sm:items-center min-[700px]:gap-[4.2rem]">
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
      </div>

      <div className="mt-[4rem] flex flex-col gap-[4rem]   pb-[6.4rem] sm:justify-between min-[717px]:flex-row min-[717px]:items-end min-[717px]:text-left">
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
