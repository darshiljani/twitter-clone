import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import "@fontsource/poppins";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { neobrutalism, dark } from "@clerk/themes";
import Layout from "~/components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const doc = document.documentElement;
    darkMode === true
      ? doc?.classList.remove("dark")
      : doc?.classList.add("dark");
  }, [darkMode]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content={`width=device-width, initial-scale=${
            typeof window !== "undefined" ? 2 / window.devicePixelRatio : 1
          }, maximum-scale=1.0`}
        />
      </Head>
      <ClerkProvider
        {...pageProps}
        appearance={{
          baseTheme: darkMode ? dark : neobrutalism,
        }}
      >
        <Layout darkMode={darkMode} changeTheme={setDarkMode}>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
