import React from "react";
import dynamic from "next/dynamic";
import { Routes } from "../../utils";

const Header = dynamic(() => import("../Header"));
const Footer = dynamic(() => import("../Footer"));
const ScrollToTop = dynamic(() => import("../Common/ScrollToTop"));

const Layout = ({ children }) => {

  return <div id={Routes[0].id}>
    <Header/>
    {children}
    <Footer/>
    <ScrollToTop/>
  </div>;
};

export default Layout;
