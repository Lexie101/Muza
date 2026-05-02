import NavBar from '@/components/NavBar';
import ProgramList from '@/components/ProgramList';
import Footer from '@/components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-12">
              Our Programs
            </h1>
            <p className="text-xl text-ink/80 text-center mb-12">
              Through targeted programs and initiatives, we work to address gender inequality
              at its roots and create lasting change.
            </p>
            <ProgramList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}