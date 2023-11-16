import { NextPageWithLayout } from './_app';
import { getHomeLayout } from '@/layout/HomeLayout'
import Home from "@/modules/home/Home";
import Head from "next/head";

function App() {
  return (
    <>
      <Head>
        <title key="title">App | Home</title>
      </Head>
      <Home />
    </>
  )
}

(App as unknown as NextPageWithLayout).getLayout = getHomeLayout;
export default App;