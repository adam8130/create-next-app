import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { getHomeLayout } from '@/layout/HomeLayout';
import NextHead from 'next/head';
import '@/styles/globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function Head(): JSX.Element {
  return (
    <NextHead>
      <title key="title">Adalia Shop</title>
      <meta property="og:title" content={'og.title'} />
      <meta name="description" content={'og.description'} />
      <meta property="og:description" content={'og.description'} />
    </NextHead>
  );
}

export function AdaliaShop(props: AppPropsWithLayout): JSX.Element {
  const { Component, pageProps } = props;
  return (
    <>
      <Head />
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

(AdaliaShop as NextPageWithLayout).getLayout = getHomeLayout;
export default AdaliaShop;
