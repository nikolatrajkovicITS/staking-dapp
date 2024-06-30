import Header from "@/components/molecules/header/Header";
import ModalManager from "@/components/organisms/modals/ModalManager";
import ModalState from "@/context/modal/modal.provider";
import { Web3Provider } from "@/context/web3provider/web3.provider";
import ThemeRegistry from "@/themes/ThemeRegistry";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <ThemeRegistry>
          <Web3Provider>
            <ModalState>
              <Header />

              <Box component="main" p={3} pb={5}>
                {children}
              </Box>

              <ModalManager />
            </ModalState>
          </Web3Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
