import type { AppProps } from "next/app";
import Head from "next/head";

import { createApolloClient } from "@anitimeline/apollo";
import { ApolloProvider } from "@apollo/client";

import { AppProvider } from "$core/contexts/app/appProvider";
import { DataProvider } from "$core/contexts/data/dataProvider";
import "$styles/global.scss";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AniTimeline</title>
        <meta
          content="App for viewing your anime timeline!"
          name="description"
        />
      </Head>

      <ApolloProvider client={client}>
        <AppProvider>
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </AppProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
