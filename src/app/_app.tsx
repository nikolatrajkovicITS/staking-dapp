import ThemeRegistry from "@/themes/ThemeRegistry";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeRegistry>
      <Component {...pageProps} />
    </ThemeRegistry>
  );
}

export default MyApp;
