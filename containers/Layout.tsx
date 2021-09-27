import React, { ReactNode } from "react";
import Headers from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};
function Layout({ children, title = "Sell Product" }: Props) {
  return (
    <div>
      <Head>
        <title>{title + " | Slincer"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Headers />
      <div className="min-hight">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
