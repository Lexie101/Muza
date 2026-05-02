import fs from 'fs';
import path from 'path';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import IssueCard from '@/components/IssueCard';
import StatCounter from '@/components/StatCounter';
import VisualGrid from '@/components/VisualGrid';
import ProgramList from '@/components/ProgramList';
import Footer from '@/components/Footer';

interface Issue {
  id: number;
  title: string;
  description: string;
  tag: string;
}

async function getIssues(): Promise<Issue[]> {
  const filePath = path.join(process.cwd(), 'content', 'issues', 'issues.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const issues = await getIssues();

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />

        {/* Section 1: The Issue */}
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-16">
              The Issue
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {issues.slice(0, 6).map((issue) => (
                <IssueCard
                  key={issue.id}
                  title={issue.title}
                  description={issue.description}
                  tag={issue.tag}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter end={85} label="Gender Pay Gap" suffix="%" />
              <StatCounter end={23} label="Women in Leadership" suffix="%" />
              <StatCounter end={120} label="Countries with Gender Equality Laws" />
              <StatCounter end={2} label="Billion People Affected" />
            </div>
          </div>
        </section>

        {/* Section 2: Our Mission */}
        <section className="py-20 px-4 bg-ink text-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                    Our Mission
                  </h2>
                  <VisualGrid />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6">Mission Pillars</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-rust pl-6">
                      <h4 className="text-xl font-semibold mb-2">Policy Advocacy</h4>
                      <p className="text-cream/80">Working with lawmakers to create and enforce gender equality legislation.</p>
                    </div>
                    <div className="border-l-4 border-gold pl-6">
                      <h4 className="text-xl font-semibold mb-2">Education & Awareness</h4>
                      <p className="text-cream/80">Raising awareness and educating communities about gender equality issues.</p>
                    </div>
                    <div className="border-l-4 border-cream pl-6">
                      <h4 className="text-xl font-semibold mb-2">Community Support</h4>
                      <p className="text-cream/80">Providing resources and support for those affected by gender discrimination.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6">Our Programs</h3>
                  <ProgramList />
                </div>
                <div className="bg-cream/10 p-8 rounded-lg">
                  <blockquote className="text-xl font-serif italic text-center">
                    "Gender equality is not just a women's issue, it's a human issue that affects us all."
                  </blockquote>
                  <cite className="block text-center mt-4 text-gold font-semibold">
                    — Muza Org Founding Charter
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
