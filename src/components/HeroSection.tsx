'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/muza%202.jpg')" }}
    >
      <div className="absolute inset-0 bg-ink/10" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold text-ink mb-8"
        >
          Advocating for
          <br />
          <span className="text-rust">Gender Equality</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-ink/80 mb-12 max-w-3xl mx-auto"
        >
          Muza Org works to dismantle systemic barriers and promote equitable policies
          for a more just and inclusive society.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-rust text-cream px-8 py-3 rounded-lg font-semibold hover:bg-rust/90 transition-colors">
            Learn More
          </button>
          <button className="border-2 border-ink text-ink px-8 py-3 rounded-lg font-semibold hover:bg-ink hover:text-cream transition-colors">
            Get Involved
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-gold">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}