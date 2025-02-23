import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Viewport Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {/* Favicon */}
        <link rel="icon" href="/cyber-security-club/favicon.ico" />

        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="keywords" content="cyber security, club, technology, security" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cyber Security Club" />
        <meta property="og:description" content="Official website of the Cyber Security Club" />
        <meta property="og:image" content="/cyber-security-club/imgs/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" href="/cyber-security-club/imgs/logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
