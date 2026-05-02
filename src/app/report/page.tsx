import NavBar from '@/components/NavBar';
import ReportForm from '@/components/ReportForm';
import Footer from '@/components/Footer';

export default function Report() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-8">
              Report Discrimination
            </h1>
            <p className="text-xl text-ink/80 text-center mb-12">
              Your voice matters. If you've experienced gender-based discrimination,
              please share your story with us. All reports are handled confidentially
              and anonymously.
            </p>
            <ReportForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}