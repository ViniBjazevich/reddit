import React, { FC, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

// This file displays all of the content that will always exists on the page (Navbar) and renders the children below

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
