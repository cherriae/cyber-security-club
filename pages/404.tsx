import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [glitchText, setGlitchText] = useState("404");
  const errorMessages = [
    "ACCESS_DENIED",
    "SECURITY_BREACH",
    "SYSTEM_FAILURE",
    "UNAUTHORIZED",
    "INTRUSION_DETECTED",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    // Glitch effect for 404
    const glitchInterval = setInterval(() => {
      const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      const position = Math.floor(Math.random() * 3);
      const newText = "404".split("");
      newText[position] = randomChar;
      setGlitchText(newText.join(""));
      
      // Reset back to 404 after a brief delay
      setTimeout(() => {
        setGlitchText("404");
      }, 100);
    }, 2000);

    // Rotate through error messages
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % errorMessages.length);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(messageInterval);
    };
  }, [errorMessages.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-500 p-4">
      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-8xl md:text-9xl font-mono mb-8 font-bold"
          animate={{
            textShadow: [
              "0 0 10px #00ff00",
              "0 0 20px #00ff00",
              "0 0 10px #00ff00",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {glitchText}
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl font-mono mb-8"
          animate={{
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-red-500">[ERROR]:</span> {errorMessages[currentMessage]}
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <div className="font-mono text-sm md:text-base">
            <span className="text-blue-400">$</span> INITIATING_RECOVERY_SEQUENCE...
          </div>
          
          <Link 
            href="/"
            className="px-8 py-3 bg-green-500/10 border border-green-500/50 
              hover:bg-green-500/20 transition-all duration-300 rounded-md font-mono
              text-green-500 hover:text-green-400"
          >
            {">"} RETURN_TO_HOME()
          </Link>
        </div>
      </div>
    </div>
  );
} 