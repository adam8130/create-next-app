import { useEffect } from 'react';
import { Loading } from '@/components/Loading';
import { Header } from '@/layout/components/Header';
import { Footer } from '@/layout/components/Footer';
import Head from 'next/head';

function LayoutWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export const getHomeLayout = (page: React.ReactNode): JSX.Element => (
  <>
    <Head>{/* <script/> */}</Head>
    <LayoutWrapper>{page}</LayoutWrapper>
  </>
)
