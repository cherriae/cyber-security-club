import { motion } from "framer-motion";
import { useState } from "react";

export function ClientCircuitBackground() {
    // Use useState to maintain consistent random values between renders
    const [nodes] = useState(() => [...Array(15)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
    })));

    const [lines] = useState(() => ({
        horizontal: [...Array(15)].map(() => ({
            top: Math.random() * 100,
            delay: Math.random() * 2,
        })),
        vertical: [...Array(15)].map(() => ({
            left: Math.random() * 100,
            delay: Math.random() * 2,
        })),
    }));

    return (
        <div className="fixed inset-0 pointer-events-none">
            {/* Circuit Nodes*/}
            {nodes.map((node, i) => (
                <motion.div
                    key={`node-${i}`}
                    className="absolute w-2 h-2 bg-blue-400/70 rounded-full"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: node.delay,
                    }}
                />
            ))}

            {/* Horizontal Circuit Lines */}
            {lines.horizontal.map((line, i) => (
                <motion.div
                    key={`h-line-${i}`}
                    className="absolute h-[2px] left-0 right-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                    style={{
                        top: `${line.top}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Vertical Circuit Lines */}
            {lines.vertical.map((line, i) => (
                <motion.div
                    key={`v-line-${i}`}
                    className="absolute w-[2px] top-0 bottom-0 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
                    style={{
                        left: `${line.left}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
} 