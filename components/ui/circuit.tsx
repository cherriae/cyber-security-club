import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

export const hackerText = {
    line1: "C46ER 53CUR17Y",
    line2: "C1U6"
};

const hackerChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function useDecryptEffect(text: string, startDelay: number = 0) {
  const [displayText, setDisplayText] = useState(() => {
    // Initialize with random characters instead of '0'
    return text.split('').map(char => 
      char === ' ' ? ' ' : hackerChars[Math.floor(Math.random() * hackerChars.length)]
    ).join('');
  });
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIndex = 0;
    let iterationCount = 0;
    const maxIterations = 3; // Number of scrambles before settling on final character

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(prev => {
          const arr = text.split('').map((char, index) => {
            // If this position is not yet being animated, show random char
            if (index > currentIndex) {
              return char === ' ' ? ' ' : hackerChars[Math.floor(Math.random() * hackerChars.length)];
            }
            // If we haven't reached max iterations for this position, show random char
            if (index === currentIndex && iterationCount < maxIterations) {
              return char === ' ' ? ' ' : hackerChars[Math.floor(Math.random() * hackerChars.length)];
            }
            // Otherwise show the final character
            return char;
          }).join('');

          // Move to next character after maxIterations
          if (iterationCount >= maxIterations) {
            currentIndex++;
            iterationCount = 0;
          } else {
            iterationCount++;
          }

          // Stop when we've processed all characters
          if (currentIndex >= text.length) {
            clearInterval(interval);
          }

          return arr;
        });
      }, 50);
    };

    // Initial delay before starting animation
    setTimeout(startAnimation, startDelay);

    return () => clearInterval(interval);
  }, [text, startDelay]);

  return displayText;
}

// CPU Component
export function CpuDisplay() {
  const decryptedLine1 = useDecryptEffect(hackerText.line1, 500);
  const decryptedLine2 = useDecryptEffect(hackerText.line2, 1500);

  return (
    <motion.div 
      className="relative text-center z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* CPU Border */}
      <motion.div
        className="absolute inset-[-2rem] border-2 border-blue-500/50 [clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]"
        animate={{
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    
      {/* Corner Accents */}
      {[0, 90, 180, 270].map((rotation) => (
        <motion.div
          key={rotation}
          className={`absolute w-8 h-8 border-2 border-blue-500/70 [clip-path:polygon(0_0,100%_0,100%_2px,2px_2px,2px_100%,0_100%)]
            ${rotation < 180 ? 'top-[-1rem]' : 'bottom-[-1rem]'}
            ${rotation === 0 ? 'left-[-1rem]' : ''}
            ${rotation === 180 ? 'right-[-1rem]' : ''}
            ${[90, 270].includes(rotation) ? 'left-1/2' : ''}`}
          style={{
            transform: `rotate(${rotation}deg)`
          }}
        />
      ))}

      {/* Text Container */}
      <div className="relative px-16 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl text-white tracking-wider mb-4 font-mono [text-shadow:0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {decryptedLine1}
        </motion.h1>
        
        <motion.h2
          className="text-3xl md:text-5xl text-blue-500 tracking-widest font-mono [text-shadow:0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {decryptedLine2}
        </motion.h2>
      </div>

      {/* Circuit Lines around CPU - increased opacity */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className={`absolute h-[2px] w-16 bg-blue-500/50
            ${i === 0 ? 'top-[20%]' : i === 1 ? 'top-[80%]' : 'top-1/2'}
            ${i === 2 ? '-left-16' : i === 3 ? '-right-16' : 'left-1/2'}`}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  );
}

const ClientCircuitBackground = dynamic(
  () => import('./CircuitBackground').then(mod => mod.ClientCircuitBackground),
  { ssr: false }
);

export function CircuitBackground() {
    return <ClientCircuitBackground />;
}

