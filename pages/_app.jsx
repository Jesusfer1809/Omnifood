import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
