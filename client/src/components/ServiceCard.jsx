import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, icon, delay = 0 }) {
  // Define opacity and y with default values
  const opacity = 1; // or 0 if you want fade-in animation
  const y = 0; // or 50 if you want slide-up animation
  
  // If you want fade-in and slide-up animation, use:
  // const opacity = 0;
  // const y = 50;

  return (
    <motion.div
      initial={{ opacity, y }}
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
      
      <div className="mb-8 relative">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 text-secondary border border-slate-100 dark:border-slate-700 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary group-hover:shadow-3xl group-hover:shadow-secondary/30 transition-all duration-500 shadow-sm group-hover:shadow-lg">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow text-lg">
        {description}
      </p>

      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center text-sm font-bold text-secondary uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-all duration-300">
        Explore Details <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}