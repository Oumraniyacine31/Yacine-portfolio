import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Code, Palette, Network, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  Code,
  Palette,
  Network,
  TrendingUp,
};

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display mb-6 text-3xl font-bold sm:text-4xl">About Me</h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {portfolioData.about}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card">
                <h3 className="text-2xl font-bold text-primary">Master's</h3>
                <p className="text-sm text-slate-500">IT Networks & Distributed Systems</p>
              </div>
              <div className="glass-card">
                <h3 className="text-2xl font-bold text-secondary">Freelance</h3>
                <p className="text-sm text-slate-500">Full-Stack Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What I Do</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.services.map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <div key={i} className="glass-card flex flex-col items-start">
                    <div className="mb-4 rounded-xl bg-blue-50 p-3 text-primary dark:bg-blue-900/20">
                      <Icon size={24} />
                    </div>
                    <h4 className="mb-2 font-bold">{service.title}</h4>
                    <p className="text-sm text-slate-500">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
