import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { motion } from 'framer-motion';

const Contact = () => (
  <div className="w-full">
    <div className="mb-12 text-center">
      <h2 className="font-heading text-4xl font-bold text-slate-900 mb-2">
        Get In <span className="text-teal-500">Touch</span>
      </h2>
      <div className="h-1 w-20 bg-teal-500 rounded-full mx-auto"></div>
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-slate-600 mb-12 font-body max-w-2xl mx-auto">
        I am currently open to internship opportunities for <strong className="text-teal-600">March 2026</strong>.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.a
          whileHover={{ y: -5 }}
          href={`mailto:${portfolioData.personal.email}`}
          className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all group"
        >
          <div className="w-12 h-12 mx-auto bg-teal-50 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors mb-4">
            <Mail size={24} />
          </div>
          <h4 className="font-heading font-bold text-slate-900 mb-1 text-lg">Email</h4>
          <p className="text-slate-500 text-sm font-body">{portfolioData.personal.email}</p>
        </motion.a>

        <motion.a
          whileHover={{ y: -5 }}
          href={portfolioData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all group"
        >
          <div className="w-12 h-12 mx-auto bg-teal-50 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors mb-4">
            <Linkedin size={24} />
          </div>
          <h4 className="font-heading font-bold text-slate-900 mb-1 text-lg">LinkedIn</h4>
          <p className="text-slate-500 text-sm font-body">Connect with me</p>
        </motion.a>

        <motion.div
          whileHover={{ y: -5 }}
          className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all group cursor-default"
        >
          <div className="w-12 h-12 mx-auto bg-teal-50 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors mb-4">
            <Phone size={24} />
          </div>
          <h4 className="font-heading font-bold text-slate-900 mb-1 text-lg">Phone</h4>
          <p className="text-slate-500 text-sm font-body">{portfolioData.personal.phone}</p>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Contact;