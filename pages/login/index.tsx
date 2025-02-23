import { motion } from "framer-motion";
import { useState } from "react";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 0.25;
    if (password.match(/[a-z]/)) strength += 0.25;
    if (password.match(/[A-Z]/)) strength += 0.25;
    if (password.match(/[0-9]/) || password.match(/[!@#$%^&*]/)) strength += 0.25;
    setPasswordStrength(strength);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md bg-black/30 p-8 rounded-lg border border-blue-500/30 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Circuit Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className={`absolute h-[1px] w-16 bg-blue-500/20
              ${i === 0 ? 'top-[20%] -left-16' : i === 1 ? 'top-[80%] -right-16' : 'top-1/2'}
              ${i === 2 ? '-left-16' : i === 3 ? '-right-16' : 'left-1/2'}`}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Tabs */}
        <div className="flex mb-8 border-b border-blue-500/30">
          <button
            className={`flex-1 pb-4 text-lg font-mono transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'login' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-blue-500/70'
            }`}
            onClick={() => setActiveTab('login')}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: activeTab === 'login' ? 0 : -180 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M12 15v5m-3-3h6M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </motion.svg>
            Welcome Back
          </button>
          <button
            className={`flex-1 pb-4 text-lg font-mono transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'signup' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-blue-500/70'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: activeTab === 'signup' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M19 8v6m-3-3h6" />
            </motion.svg>
            First Time?
          </button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-500/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-blue-500/10 border border-blue-500/30 rounded pl-10 pr-4 py-2 text-blue-500 placeholder-blue-500/50 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-500/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-blue-500/10 border border-blue-500/30 rounded pl-10 pr-4 py-2 text-blue-500 placeholder-blue-500/50 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2 accent-blue-500" />
              <label htmlFor="remember" className="text-blue-500/70 text-sm">Keep me signed in</label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500/10 border border-blue-500 rounded py-2 text-blue-500 hover:bg-blue-500 hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              Login
              </button>
          </motion.form>
        )}

        {/* Signup Form */}
        {activeTab === 'signup' && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-500/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-blue-500/10 border border-blue-500/30 rounded pl-10 pr-4 py-2 text-blue-500 placeholder-blue-500/50 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-500/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-blue-500/10 border border-blue-500/30 rounded pl-10 pr-4 py-2 text-blue-500 placeholder-blue-500/50 focus:outline-none focus:border-blue-500"
                onChange={(e) => checkPasswordStrength(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-blue-500/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Retype Password"
                className="w-full bg-blue-500/10 border border-blue-500/30 rounded pl-10 pr-4 py-2 text-blue-500 placeholder-blue-500/50 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <div className="text-sm text-blue-500/70 mb-1 flex items-center gap-2">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                Password strength
              </div>
              <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${passwordStrength * 100}%` }}
                  animate={{
                    backgroundColor: [
                      "rgb(59, 130, 246, 0.5)",
                      "rgb(59, 130, 246, 0.8)",
                      "rgb(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500/10 border border-blue-500 rounded py-2 text-blue-500 hover:bg-blue-500 hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              Signup
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}
