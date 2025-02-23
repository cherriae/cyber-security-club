import { motion } from "framer-motion";
import { TournamentCard } from "@/components/ui/TournamentCard";
import clubData from "../club.json";

export default function TournamentsPage() {
  // Filter tournaments based on date
  const today = new Date();
  const upcomingTournaments = clubData.tournaments.filter(tournament => {
    const tournamentDate = new Date(tournament.date);
    return tournamentDate > today;
  });

  // Sort upcoming tournaments by date
  upcomingTournaments.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Format dates to match the expected format (e.g., "April 14, 2025")
  const formattedTournaments = upcomingTournaments.map(tournament => ({
    ...tournament,
    date: new Date(tournament.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    prize: tournament.prize || "No prize specified"
  }));

  return (
    <div className="min-h-screen p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Upcoming Tournaments
          </h1>
          <p className="text-blue-400/70">
            Join our exciting cybersecurity competitions and events
          </p>
        </div>

        <div className="space-y-6">
          {formattedTournaments.map((tournament, index) => (
            <TournamentCard 
              key={index}
              tournament={tournament}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}