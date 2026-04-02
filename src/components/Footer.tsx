import { portfolioData } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 dark:border-slate-800">
      <div className="section-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
