import "../styles/main.scss";
import type { AppProps } from "next/app";
import { LunchProvider } from "../context/LunchContext";


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <LunchProvider>
      <Component {...pageProps} />;
    </LunchProvider>
  </>

}

export default MyApp;
