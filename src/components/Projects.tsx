import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="section-container">
        <div className="mb-16 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="max-w-xl text-slate-600 dark:text-slate-400">
              A selection of my recent work in web development and data visualization.
            </p>
          </div>
          <a href="#" className="btn-secondary">View All Projects</a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a href={project.link} className="rounded-full bg-white p-3 text-slate-900 hover:bg-primary hover:text-white">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" className="rounded-full bg-white p-3 text-slate-900 hover:bg-primary hover:text-white">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
