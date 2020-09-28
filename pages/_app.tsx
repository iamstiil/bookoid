import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import '../css/tailwind.css';

const queryCache = new QueryCache();

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <main className="min-h-screen bg-gray-400">
          <Component {...pageProps} />
        </main>
        <ReactQueryDevtools initialIsOpen />
      </ReactQueryCacheProvider>
    </>
  );
};

export default MyApp;
