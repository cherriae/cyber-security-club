import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [matrixColumns, setMatrixColumns] = useState<string[][]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [decryptionComplete, setDecryptionComplete] = useState(false);
    
    // Generate random characters (numbers, letters, symbols)
    const generateRandomChar = (): string => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyz@#$%^&*';
        return chars[Math.floor(Math.random() * chars.length)];
    };

    // Create matrix rain effect
    useEffect(() => {
        // Adjust number of columns based on screen width, max 15
        const columns = Array.from({ length: 15 }, () => 
            Array.from({ length: 20 }, () => generateRandomChar()) // Increased length for taller columns
        );
        setMatrixColumns(columns);

        // Periodically update characters
        const interval = setInterval(() => {
            const newColumns = columns.map(column => 
                column.map(() => generateRandomChar())
            );
            setMatrixColumns(newColumns);
        }, 150); // Slowed down update rate for better performance

        return () => clearInterval(interval);
    }, []);

    // Handle loading progress
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setDecryptionComplete(true);
                    // Wait for completion animation before transitioning
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 500); // Reduced to 500ms delay after completion
                    return 100;
                }
                return prev + 2; // Increased to 2% per interval
            });
        }, 25); // Reduced to 25ms per interval

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50">
            {/* Matrix Rain Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {matrixColumns.map((column, i) => (
                    <motion.div
                        key={`column-${i}`}
                        className="absolute inline-block"
                        style={{
                            left: `${(i / (matrixColumns.length - 1)) * 100}%`,
                            top: -20,
                            willChange: 'transform'
                        } as const}
                        initial={{ y: "0%" }}
                        animate={{
                            y: ["0%", "120%"]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 6, // Random duration between 6-10s
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * -8 // Random initial delay
                        }}
                    >
                        {column.map((char, j) => (
                            <div
                                key={`char-${i}-${j}`}
                                className="text-green-500/50 font-mono text-lg main"
                                style={{
                                    textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
                                    opacity: 0.1 + (j / column.length)
                                }}
                            >
                                {char}
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Decrypting Loading Bar */}
            <div className="relative z-10 w-80">
                <div className="flex items-center gap-2 mb-2">
                    <motion.div
                        animate={{ 
                            scale: decryptionComplete ? 1.2 : 1
                        }}
                        transition={{
                            rotate: {
                                duration: 2,
                                repeat: decryptionComplete ? 0 : Infinity,
                                ease: "linear"
                            },
                            scale: {
                                duration: 0.3
                            }
                        }}
                        className="w-5 h-5"
                    >
                        {decryptionComplete ? '🔓' : '🔒'}
                    </motion.div>
                    <span className="text-green-500 main">
                        {decryptionComplete ? 'Decryption Complete' : 'Decrypting...'}
                    </span>
                </div>
                
                <div className="h-2 bg-green-500/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-green-500"
                        style={{ width: `${loadingProgress}%` } as const}
                        animate={{
                            opacity: decryptionComplete ? [1, 0.5, 1] : 1
                        }}
                        transition={{
                            opacity: {
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
