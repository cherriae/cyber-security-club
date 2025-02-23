import { motion } from "framer-motion";

interface KeyProps {
    scrollToAbout: () => void;
}

export function Key({ scrollToAbout }: KeyProps) {
    return (
        <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={scrollToAbout}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 512 512" 
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <g transform="translate(0,512) scale(0.1,-0.1)">
                <path 
                  d="M2396 5109 c-567 -78 -1014 -511 -1108 -1073 -19 -110 -16 -345 5
                  -446 74 -352 267 -640 557 -832 l75 -50 5 -1081 c5 -1067 5 -1082 25 -1117 28
                  -47 509 -486 547 -499 39 -14 77 -14 116 0 38 13 519 452 547 499 17 30 20 52
                  20 160 0 69 -4 138 -8 155 -5 16 -48 69 -99 122 l-91 93 82 85 c87 91 111 132
                  111 190 0 53 -23 90 -113 183 l-81 83 86 87 c90 90 108 120 108 177 0 56 -17
                  85 -107 177 l-86 88 90 93 c109 113 113 125 113 351 l0 153 61 38 c237 146
                  439 403 529 673 49 149 64 242 64 402 0 80 -5 177 -12 216 -89 533 -492 949
                  -1027 1059 -96 20 -314 28 -409 14z m279 -330 c513 -62 891 -535 835 -1042
                  -26 -235 -114 -419 -275 -581 -184 -183 -414 -278 -675 -278 -139 0 -242 20
                  -365 71 -511 211 -735 808 -490 1306 156 316 480 522 840 534 22 0 81 -4 130
                  -10z m-222 -2229 c101 -10 208 -5 360 17 l37 5 0 -63 0 -63 -124 -126 c-100
                  -101 -126 -133 -135 -167 -20 -75 -2 -115 99 -218 l89 -90 -89 -91 c-145 -150
                  -145 -201 3 -351 l91 -93 -91 -93 c-104 -105 -122 -145 -102 -219 8 -33 36
                  -67 135 -168 91 -93 124 -133 124 -151 0 -19 -33 -54 -140 -152 -76 -70 -144
                  -127 -150 -127 -6 0 -74 57 -150 127 l-140 127 0 959 0 959 38 -5 c20 -3 85
                  -11 145 -17z"
                  fill="white"
                />
                <path 
                  d="M2488 4626 c-141 -39 -223 -170 -196 -315 24 -132 132 -221 268 -221
                  136 0 244 89 268 221 30 162 -77 305 -243 323 -29 3 -70 0 -97 -8z"
                  fill="white"
                />
              </g>
            </svg>
            <motion.div
              className="absolute inset-0 bg-blue-500/30 blur-lg -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
    );
}
