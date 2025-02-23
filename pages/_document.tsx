import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/cyber-security-club/imgs/logo.png" />

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
