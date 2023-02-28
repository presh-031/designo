import Header from "./Header";

import Footer from "./Footer";

// Universal app font setup
import { Jost } from "@next/font/google";
const jost = Jost({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // const getIsOpen = (isOpen: boolean): any => {
  //   setMenuOpen(isOpen);
  // };

  return (
    <div className={`${jost.className} relative`}>
      {/* <Header getIsOpen={getIsOpen} /> */}
      <Header />
      {/* {menuOpen && <Nav />} */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
