import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Resources() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-12">
              Resources
            </h1>
            <p className="text-xl text-ink/80 text-center mb-12">
              Access our library of legal guides, research reports, and educational materials
              to support your advocacy work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-ink text-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-4">Legal Guides</h3>
                <p className="mb-4">Comprehensive guides on gender discrimination laws and your rights.</p>
                <button className="bg-rust text-cream px-4 py-2 rounded hover:bg-rust/90">
                  Browse Guides
                </button>
              </div>
              <div className="bg-gold text-ink p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-4">Research Reports</h3>
                <p className="mb-4">Data-driven insights into gender equality challenges and solutions.</p>
                <button className="bg-ink text-cream px-4 py-2 rounded hover:bg-ink/90">
                  View Reports
                </button>
              </div>
              <div className="bg-rust text-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-4">Educational Materials</h3>
                <p className="mb-4">Workshops, toolkits, and training resources for advocates.</p>
                <button className="bg-cream text-ink px-4 py-2 rounded hover:bg-cream/90">
                  Access Materials
                </button>
              </div>
              <div className="bg-ink/10 border border-ink/20 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-ink mb-4">Document Library</h3>
                <p className="text-ink/70 mb-4">Search our extensive collection of downloadable PDFs and documents.</p>
                <button className="border border-ink text-ink px-4 py-2 rounded hover:bg-ink hover:text-cream">
                  Search Library
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}