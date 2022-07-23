import "../styles/globals.css";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
