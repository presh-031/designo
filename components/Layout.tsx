import Header from "./Header";

import { Jost } from "@next/font/google";
import Footer from "./Footer";
const jost = Jost({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    // <div className={jost.className}>
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
