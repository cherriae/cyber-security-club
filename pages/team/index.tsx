import { motion } from "framer-motion";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import teamData from "./team.json";

export default function TeamPage() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Team/Our Execs
          </h1>
          <p className="text-blue-400/70">
            The people dedicated to this club
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {teamData.teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member}  />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
