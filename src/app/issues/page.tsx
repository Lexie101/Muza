'use client';

import { useState, useEffect, useMemo } from 'react';
import NavBar from '@/components/NavBar';
import IssueCard from '@/components/IssueCard';
import Footer from '@/components/Footer';

interface Issue {
  id: number;
  title: string;
  description: string;
  tag: string;
}

const tags = ['All', 'Workplace', 'Youth', 'Women', 'Policy', 'Health'];

export default function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    // In a real app, this would be an API call
    const mockIssues: Issue[] = [
      {
        id: 1,
        title: 'Workplace Discrimination',
        description: 'Persitent gender-based discrimination in hiring, promotion, and compensation practices across industries.',
        tag: 'workplace'
      },
      {
        id: 2,
        title: 'Youth Education Gaps',
        description: 'Unequal access to quality education and career guidance for young women and men.',
        tag: 'Youth'
      },
      {
        id: 3,
        title: 'Policy Reform Delays',
        description: 'Slow progress in implementing gender equality policies and legislation.',
        tag: 'Policy'
      },
      {
        id: 4,
        title: 'Leadership Barriers',
        description: 'Systemic obstacles preventing women from reaching leadership positions in organizations.',
        tag: 'Women'
      },
      {
        id: 5,
        title: 'Mental Health Stigma',
        description: 'Gender-specific stigmas affecting mental health support and treatment access.',
        tag: 'Health'
      },
      {
        id: 6,
        title: 'Economic Inequality',
        description: 'Gender pay gaps and unequal economic opportunities affecting long-term financial security.',
        tag: 'Workplace'
      }
    ];
    setIssues(mockIssues);
  }, []);

  const filteredIssues = useMemo(() => {
    if (selectedTag === 'All') return issues;
    return issues.filter(issue => issue.tag === selectedTag);
  }, [issues, selectedTag]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-12">
              Gender Equality Issues
            </h1>
            <p className="text-xl text-ink/80 text-center max-w-3xl mx-auto mb-12">
              Explore the key challenges facing gender equality today. Filter by category to focus
              on specific areas of concern.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedTag === tag
                      ? 'bg-rust text-cream'
                      : 'bg-ink/10 text-ink hover:bg-ink/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Issues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIssues.map((issue) => (
                <IssueCard
                  key={issue.id}
                  title={issue.title}
                  description={issue.description}
                  tag={issue.tag}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}