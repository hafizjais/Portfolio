import React from 'react';
import { portfolioData } from '../portfolioData';
import { Mail, MapPin, Github } from 'lucide-react';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-100 mb-8">Let's Connect</h2>
      <p className="text-slate-400 mb-12 text-lg">
        I'm currently looking for internship opportunities in Data Science, AI, and Data Analytics.
        Feel free to reach out!
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3 px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-all hover:-translate-y-1 w-full md:w-auto justify-center"
        >
          <Mail size={20} />
          Send Email
        </a>

        <div className="flex gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full border border-slate-700 hover:border-sky-500 hover:-translate-y-1 transition-all overflow-hidden p-2"
          >
            <img src="/linkedin icon.png" alt="LinkedIn" className="w-full h-full object-contain" />
          </a>

          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all overflow-hidden p-2"
          >
            <img src="/facebook icon.png" alt="Facebook" className="w-full h-full object-contain" />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full border border-slate-700 hover:border-slate-400 hover:text-white text-slate-300 hover:-translate-y-1 transition-all overflow-hidden p-3"
          >
            <Github className="w-full h-full" />
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {contact.location}
        </div>
        <p>&copy; {new Date().getFullYear()} Mohamad Hafiz. Built with React & Tailwind.</p>
      </div>
    </div>
  );
};

export default Contact;