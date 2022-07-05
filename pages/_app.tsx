import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MantineProvider
        theme={{
          colorScheme: "dark",
          colors: {
            brand: [
              "#F0BBDD",
              "#ED9BCF",
              "#EC7CC3",
              "#ED5DB8",
              "#F13EAF",
              "#F71FA7",
              "#FF00A1",
              "#E00890",
              "#C50E82",
              "#AD1374",
            ],
          },
          primaryColor: "brand",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
      </MantineProvider>
    </UserProvider>
  );
}

export default MyApp;
