import ThemeRegistry from "@/themes/ThemeRegistry";
import type { AppProps } from "next/app";
import { Web3ContextProvider } from "@/context/web3.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeRegistry>
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </ThemeRegistry>
  );
}

export default MyApp;
