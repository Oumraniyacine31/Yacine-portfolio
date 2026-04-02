import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Have a project in mind or want to discuss market trends? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="rounded-xl bg-blue-50 p-3 text-primary dark:bg-blue-900/20">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-slate-500">oumraniyacine1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-xl bg-green-50 p-3 text-secondary dark:bg-green-900/20">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="font-bold">LinkedIn</h4>
                <p className="text-slate-500">linkedin.com/in/oumraniyacine</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-xl bg-orange-50 p-3 text-accent dark:bg-orange-900/20">
                <Github size={24} />
              </div>
              <div>
                <h4 className="font-bold">GitHub</h4>
                <p className="text-slate-500">github.com/oumraniyacine</p>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-4 lg:col-span-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950"
                placeholder="How can I help?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-950"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message <Send className="ml-2" size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
