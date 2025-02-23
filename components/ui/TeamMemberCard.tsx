import { motion } from "framer-motion";
import Image from "next/image";

export interface TeamMember {
  name: string;
  position: string;
  image?: string;
}

export const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    className="flex flex-col items-center p-4 bg-blue-400/10 rounded-xl hover:bg-blue-400/20 transition-colors"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-24 h-24 rounded-full bg-blue-500/20 mb-4 overflow-hidden">
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-blue-500/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )}
    </div>
    <h3 className="text-lg font-semibold text-blue-500">{member.name}</h3>
    <p className="text-sm text-blue-400/70">{member.position}</p>
  </motion.div>
); 