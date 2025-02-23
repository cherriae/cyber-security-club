import { motion } from "framer-motion";

export interface Tournament {
  title: string;
  description: string;
  prize?: string;
  date: string;
}

interface TournamentCardProps {
  tournament: Tournament;
  index: number;
}

export function TournamentCard({ tournament, index }: TournamentCardProps) {
  return (
    <motion.div
      key={index}
      className="border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="p-6 bg-blue-400/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">
              {tournament.title}
            </h2>
            <p className="text-blue-400/70 mb-4">
              {tournament.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-400/70">{tournament.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-400/70">{tournament.prize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 