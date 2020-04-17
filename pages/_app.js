import React from "react";
import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
//import "../components/bottomnav/bottomNav.module.css";
import { AnimatePresence } from "framer-motion";
import { render } from "react-dom";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    );
  }
}
export default MyApp;
