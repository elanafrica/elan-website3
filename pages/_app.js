import { useEffect } from "react";
import { initGA, logPageView } from "../gaConfig";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}
