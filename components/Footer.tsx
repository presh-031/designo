import Image from "next/image";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Image />
        </div>
        <Nav />
      </div>
      <div>
        <div>
          <ul>
            <li>Contact Us (Central Office)</li>
            <li>P : +1 253-863-8967</li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
