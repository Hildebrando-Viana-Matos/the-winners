// React
import { Fragment, ReactNode } from "react";

// Components
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <Header />
    <div>{children}</div>
    <Footer />
  </Fragment>
);

export default Layout;
