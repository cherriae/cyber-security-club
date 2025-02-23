import { motion } from "framer-motion";
import clubData from "../club.json";

export default function PastTournamentPage() {
  // Filter tournaments based on date
  const today = new Date();
  const pastTournaments = clubData.tournaments
    .filter(tournament => {
      const tournamentDate = new Date(tournament.date);
      return tournamentDate < today;
    })
    // Sort by date in descending order (most recent first)
    .sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    // Format the dates
    .map(tournament => ({
      ...tournament,
      date: new Date(tournament.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }));

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
            Past Tournaments
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastTournaments.map((tournament, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-semibold text-blue-500 mb-2">
                  {tournament.title}
                </h2>
                <p className="text-blue-400/70 mb-4 flex-grow">
                  {tournament.description}
                </p>
                <p className="text-blue-400/70 text-sm">
                  {tournament.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}