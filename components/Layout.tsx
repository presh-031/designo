import Header from "./Header";

import Footer from "./Footer";

// Universal app font setup
import { Jost } from "@next/font/google";
const jost = Jost({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className={jost.className}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
