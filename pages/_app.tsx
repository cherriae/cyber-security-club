import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/nav";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cyber Security Club</title>
        <meta name="description" content="Official website of the Cyber Security Club" />
        
        {/* Viewport meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className="flex h-screen overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
