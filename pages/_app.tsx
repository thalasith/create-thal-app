import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WalletSelectorContextProvider } from "../contexts/WalletSelectorProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletSelectorContextProvider>
      <Component {...pageProps} />
    </WalletSelectorContextProvider>
  );
}
