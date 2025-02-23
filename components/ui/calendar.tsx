import { motion } from "framer-motion";
import { useState } from "react";

interface Meeting {
  day: string;
  time: string;
  description: string;
  location: string;
}

interface ExceptionDay {
  date: Date;
  description: string;
  type: 'cancelled' | 'special';
}

interface CalendarProps {
  weeklyMeetings: Meeting[];
  exceptionDays: ExceptionDay[];
}

interface MonthData {
  date: Date;
  calendar: (number | null)[][];
}

export function Calendar({ weeklyMeetings, exceptionDays }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showExceptionDetails, setShowExceptionDetails] = useState<ExceptionDay | null>(null);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const generateMonthData = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const startingDay = firstDay.getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const calendar: (number | null)[][] = [];
    let day = 1;
    
    for (let i = 0; i < 6; i++) {
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  const getNextMonths = (startDate: Date, count: number): MonthData[] => {
    const months: MonthData[] = [];
    for (let i = 0; i < count; i++) {
      const date = new Date(startDate);
      date.setMonth(startDate.getMonth() + i);
      months.push({
        date: date,
        calendar: generateMonthData(date)
      });
    }
    return months;
  };

  const isMeetingDay = (date: Date) => {
    const dayName = daysOfWeek[date.getDay()];
    return dayName === "Tuesday" || dayName === "Thursday";
  };

  const getExceptionDay = (date: Date) => {
    return exceptionDays.find(exception => 
      exception.date.getDate() === date.getDate() &&
      exception.date.getMonth() === date.getMonth() &&
      exception.date.getFullYear() === date.getFullYear()
    );
  };

  const getDayClass = (monthData: Date, day: number | null) => {
    if (!day) return '';
    
    const date = new Date(monthData.getFullYear(), monthData.getMonth(), day);
    const exception = getExceptionDay(date);
    
    if (exception) {
      return exception.type === 'cancelled' 
        ? 'bg-red-500/20 text-red-500 font-semibold' 
        : 'bg-green-500/20 text-green-500 font-semibold';
    }
    
    return isMeetingDay(date) 
      ? 'bg-blue-500/20 text-blue-500 font-semibold' 
      : 'text-blue-400/70';
  };

  const nextMonths = getNextMonths(currentDate, 6);

  return (
    <>
      {/* Legend */}
      <div className="mb-8 flex gap-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500/20 rounded"></div>
          <span className="text-blue-400/70">Regular Meeting</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500/20 rounded"></div>
          <span className="text-blue-400/70">Cancelled</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500/20 rounded"></div>
          <span className="text-blue-400/70">Tournament</span>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nextMonths.map((monthData, monthIndex) => (
          <div key={monthIndex} className="bg-blue-400/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              {months[monthData.date.getMonth()]} {monthData.date.getFullYear()}
            </h2>
            <div className="grid grid-cols-7 gap-2 mb-3">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-blue-500 font-semibold text-sm">
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {monthData.calendar.map((week, i) => (
                week.map((day, j) => {
                  const date = day ? new Date(monthData.date.getFullYear(), monthData.date.getMonth(), day) : null;
                  const exception = date ? getExceptionDay(date) : null;
                  
                  return (
                    <motion.div
                      key={`${i}-${j}`}
                      className={`
                        aspect-square flex items-center justify-center rounded-lg cursor-pointer
                        ${day ? 'hover:bg-blue-400/20 transition-colors' : ''}
                        ${getDayClass(monthData.date, day)}
                      `}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (i * 7 + j) * 0.02 }}
                      onClick={() => {
                        if (exception) {
                          setShowExceptionDetails(exception);
                        }
                      }}
                    >
                      {day}
                    </motion.div>
                  );
                })
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Exception Details Modal */}
      {showExceptionDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" onClick={() => setShowExceptionDetails(null)}>
          <motion.div 
            className="bg-blue-400/10 p-6 rounded-lg max-w-md w-full backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              {showExceptionDetails.date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
            </h3>
            <p className="text-blue-400/70">{showExceptionDetails.description}</p>
            <button 
              className="mt-4 text-blue-500 hover:text-blue-400 transition-colors"
              onClick={() => setShowExceptionDetails(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
} 