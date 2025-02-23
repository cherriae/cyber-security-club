import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

export const TerminalWindow = () => (
  <motion.div 
    className="w-full md:w-1/2 aspect-video bg-black rounded-lg border border-green-500/30 relative"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="absolute top-0 left-0 w-full h-8 bg-green-500/10 flex items-center px-4">
      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <Image 
      src="/imgs/about.png" 
      alt="Your description"
      width={1920}
      height={1080}
      className="w-full h-full object-fill pt-8"
    />
  </motion.div>
);

export const TerminalContent = () => (
  <motion.div 
    className="w-full md:w-1/2 space-y-4  text-green-400 px-8"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex items-start">
      <span className="text-green-500 mr-4 flex-shrink-0">&gt;</span>
      <p className="flex-1">Your first paragraph of text here.</p>
    </div>
    <div className="flex items-start">
      <span className="text-green-500 mr-4 flex-shrink-0">&gt;</span>
      <p className="flex-1">Your second paragraph of text here.</p>
    </div>
    <div className="flex items-start">
      <span className="text-green-500 mr-4 flex-shrink-0">&gt;</span>
      <p className="flex-1">Your third paragraph of text here.</p>
    </div>
    <div className="flex items-start">
      <span className="text-green-500 mr-4 flex-shrink-0">&gt;</span>
      <p className="flex-1">Your fourth paragraph of text here.</p>
    </div>
  </motion.div>
);

export const JoinSection = () => (
  <motion.div 
    className="mt-24 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-4xl text-green-500 mb-8 ">[Join_Our_Network]</h3>
    <a 
      href="/your-signup-link" 
      className="inline-block px-8 py-3 rounded-sm border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300  relative group overflow-hidden"
    >
      <span className="relative z-10">INITIALIZE_ACCESS()</span>
      <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </a>
  </motion.div>
);

export const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef }) => {
  return (
    <div 
      ref={aboutRef} 
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
      <h2 className="text-4xl text-green-500 mb-16  border-b-2 border-green-500/30 pb-2 relative">
        &lt;About_Us /&gt;
        <span className="absolute -bottom-1 left-0 w-1/4 h-0.5 bg-green-500 animate-pulse"></span>
      </h2>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <TerminalWindow />
        <TerminalContent />
      </div>

      <JoinSection />
    </div>
  );
}; 