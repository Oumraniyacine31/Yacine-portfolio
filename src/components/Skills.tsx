import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const categories = [
    { name: 'Web Development', items: portfolioData.skills.webDev },
    { name: 'UI/UX Design', items: portfolioData.skills.design },
    { name: 'Networking', items: portfolioData.skills.networking },
    { name: 'Stock Analysis', items: portfolioData.skills.analysis },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">Technical Expertise</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            A diverse skill set ranging from low-level networking to high-level web architecture and financial analysis.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-primary">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
