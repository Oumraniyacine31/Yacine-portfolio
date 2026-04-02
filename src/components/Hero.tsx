import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary dark:bg-blue-900/30">
            Available for new projects
          </span>
          <h1 className="font-display mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I'm <span className="text-primary">{portfolioData.name}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
            {portfolioData.pitch}
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work <ArrowRight className="ml-2" size={18} />
            </a>
            <button className="btn-secondary w-full sm:w-auto">
              <Download className="mr-2" size={18} /> Download CV
            </button>
          </div>

          <div className="mt-12 flex justify-center space-x-6 text-slate-400">
            <a href="#" className="transition-colors hover:text-primary">
              <Github size={24} />
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
