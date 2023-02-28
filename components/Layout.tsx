import Header from "./Header";

import Footer from "./Footer";

// Universal app font setup
import { Jost } from "@next/font/google";
import { useState } from "react";
import Nav from "./Nav";
const jost = Jost({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const getIsOpen = (isOpen: boolean) => {
    setMenuOpen(isOpen);
  };
  return (
    <div className={jost.className}>
      <Header getIsOpen={getIsOpen} />
      {menuOpen && <Nav />}
      {/* <Nav /> */}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
