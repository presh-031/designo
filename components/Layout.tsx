import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
