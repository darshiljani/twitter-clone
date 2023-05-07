import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import "@fontsource/inter";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Layout from "~/components/Layout/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        baseTheme: dark,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
