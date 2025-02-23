import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import clubData from "../club.json";

interface ExceptionDay {
  date: Date;
  description: string;
  type: 'cancelled' | 'special';
}

export default function SchedulePage() {
  const exceptionDays: ExceptionDay[] = clubData.meetings.exceptions.map(exception => {
    return {
      ...exception,
      date: new Date(exception.date),
      type: exception.type as 'cancelled' | 'special'
    } as ExceptionDay;
  });

  return (
    <div className="min-h-screen p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Schedule</h1>
          <p className="text-blue-400/70">Join us every Tuesday and Thursday!</p>
        </div>

        {/* Weekly Meetings Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">Weekly Meetings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clubData.meetings.weekly.map((meeting, index) => (
              <motion.div
                key={meeting.day}
                className="bg-blue-400/10 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-500 mb-2">{meeting.day}s</h3>
                <p className="text-blue-400/70 mb-2">{meeting.time}</p>
                <p className="text-blue-400/70 mb-2">{meeting.description}</p>
                <p className="text-blue-400/70">📍 {meeting.location}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Calendar weeklyMeetings={clubData.meetings.weekly} exceptionDays={exceptionDays} />
      </motion.div>
    </div>
  );
}
