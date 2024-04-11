// eslint-disable-next-line import/order
import { useFetcher } from '@/hooks/api/network/useFetcher';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  const { fetcher } = useFetcher();
  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
