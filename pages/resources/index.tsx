import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/ui/bento-grid";
import Link from "next/link";
import resourcesData from "./resources.json";

const icons = {
  math: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h18v18H3z" />
      <path d="M21 7H3" />
      <path d="M7 21V7" />
      <path d="M12 11v4" />
      <path d="M12 11h4" />
    </svg>
  ),
  ctf: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h18v18H3z" />
      <path d="M21 7H3" />
      <path d="M7 21V7" />
      <path d="M12 11v4" />
      <path d="M12 11h4" />
    </svg>
  )
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center my-12">
          <motion.h1 
            className="text-4xl font-bold text-blue-500 mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resources
          </motion.h1>
          <motion.p 
            className="text-blue-400/70"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our curated collection of cybersecurity resources
          </motion.p>
        </div>

        <BentoGrid>
          {resourcesData.resources.map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={resource.link}>
                <BentoGridItem
                  title={resource.title}
                  description={resource.description}
                  icon={icons[resource.icon as keyof typeof icons]}
                  className="hover:bg-blue-500/10 cursor-pointer border-blue-500/20"
                />
              </Link>
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
}
