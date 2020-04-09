import React from "react";
import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
