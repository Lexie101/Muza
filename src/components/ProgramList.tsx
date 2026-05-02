'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const programs = [
  { name: 'Equal Floor', slug: 'equal-floor', description: 'Workplace equality initiatives' },
  { name: 'Voice for Young Men', slug: 'voice-for-young-men', description: 'Youth engagement programs' },
  { name: 'Women in Leadership', slug: 'women-in-leadership', description: 'Leadership development' },
  { name: 'Policy Reports', slug: 'policy-reports', description: 'Research and advocacy' },
];

export default function ProgramList() {
  return (
    <div className="space-y-4">
      {programs.map((program, index) => (
        <motion.div
          key={program.slug}
          initial={{ x: 0 }}
          whileHover={{ x: 20 }}
          className="flex items-center space-x-4 p-4 border border-ink/10 rounded-lg hover:border-rust/50 transition-colors"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-rust text-cream rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div className="flex-1">
            <Link href={`/programs/${program.slug}`} className="block">
              <h3 className="text-lg font-serif font-bold text-ink hover:text-rust transition-colors">
                {program.name}
              </h3>
              <p className="text-ink/70">{program.description}</p>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}