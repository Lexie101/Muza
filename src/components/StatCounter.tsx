'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
}

export default function StatCounter({ end, label, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-serif font-bold text-rust mb-2">
        {count}{suffix}
      </div>
      <div className="text-ink/70 font-semibold">{label}</div>
    </div>
  );
}