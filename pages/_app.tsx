import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function Dapp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Dapp;
