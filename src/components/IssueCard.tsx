'use client';

import { motion } from 'framer-motion';

interface IssueCardProps {
  title: string;
  description: string;
  tag: string;
}

export default function IssueCard({ title, description, tag }: IssueCardProps) {
  return (
    
    <motion.div
      whileHover={{ x: 10 }}
      className="bg-ink text-cream p-6 rounded-lg border-l-4 border-transparent hover:border-rust transition-all duration-300"
    >
      <div className="mb-2">
        <span className="text-gold text-sm font-semibold uppercase tracking-wide">
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-cream/80 leading-relaxed">{description}</p>
    </motion.div>
  );
}
