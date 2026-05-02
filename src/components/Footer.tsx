import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Muza Org</h3>
            <p className="text-cream/80 leading-relaxed mb-4">
              Advocating for gender equality through policy reform, education,
              and community action.
            </p>
            <div className="flex space-x-4">
              {/* Social links placeholders */}
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">Twitter</a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/programs/equal-floor" className="text-cream/60 hover:text-gold transition-colors">Equal Floor</Link></li>
              <li><Link href="/programs/voice-for-young-men" className="text-cream/60 hover:text-gold transition-colors">Voice for Young Men</Link></li>
              <li><Link href="/programs/women-in-leadership" className="text-cream/60 hover:text-gold transition-colors">Women in Leadership</Link></li>
              <li><Link href="/programs/policy-reports" className="text-cream/60 hover:text-gold transition-colors">Policy Reports</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-cream/60 mb-2">info@muzaorg.org</p>
            <p className="text-cream/60">123 Equality Street<br />Advocacy City, AC 12345</p>
          </div>
        </div>
        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2024 Muza Org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}