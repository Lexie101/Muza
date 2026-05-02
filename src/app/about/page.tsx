import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-12">
              About Muza Org
            </h1>
            <div className="prose prose-lg mx-auto text-ink">
              <p className="text-xl leading-relaxed mb-8">
                Muza Org was founded in 2026 with a simple yet powerful mission: to create a world
                where gender equality is not just an ideal, but a lived reality for every person,
                regardless of their identity or background.
              </p>
              <h2 className="text-2xl font-serif font-bold text-ink mt-12 mb-6">Our History</h2>
              <p>
                What started as a small group of activists and academics has grown into a global
                movement. Our founding charter emphasizes that gender equality is a human issue
                that affects us all, and that real change requires collective action across all
                sectors of society.
              </p>
              <h2 className="text-2xl font-serif font-bold text-ink mt-12 mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-ink rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-ink">Dr. Sarah Johnson</h3>
                  <p className="text-ink/70">Executive Director</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-ink rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-ink">Marcus Chen</h3>
                  <p className="text-ink/70">Policy Director</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-ink rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-ink">Dr. Amina Hassan</h3>
                  <p className="text-ink/70">Research Lead</p>
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