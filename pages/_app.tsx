import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
