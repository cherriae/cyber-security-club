import { Key } from "@/components/ui/key";
import { useRef, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading";
import { CircuitBackground, CpuDisplay } from "@/components/ui/circuit";
import { AboutSection } from "@/components/ui/AboutSection";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null!);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CircuitBackground />

      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative w-full h-full bg-black/30 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <CpuDisplay />
          </div>

          <Key scrollToAbout={scrollToAbout} />
        </div>
      )}

      <AboutSection aboutRef={aboutRef} />
    </>
  );
}
