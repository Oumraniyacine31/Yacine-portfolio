import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Yacine's ability to bridge the gap between complex network architectures and user-friendly web interfaces is truly impressive.",
    author: "Tech Lead",
    company: "Digital Solutions Inc."
  },
  {
    text: "His stock analysis insights provided our team with a fresh perspective on market volatility. Highly analytical and technical.",
    author: "Senior Analyst",
    company: "FinTech Partners"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">Testimonials</h2>
          <p className="text-slate-600 dark:text-slate-400">What colleagues and clients say about my work.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
              <p className="mb-6 italic text-slate-600 dark:text-slate-400">"{t.text}"</p>
              <div>
                <h4 className="font-bold">{t.author}</h4>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
