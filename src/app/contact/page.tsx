'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink text-center mb-12">
              Contact Us
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-bold text-ink mb-6">Get in Touch</h2>
                <p className="text-ink/80 mb-8">
                  Have questions about our work, want to get involved, or need support?
                  We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-ink">Email</h3>
                    <p className="text-ink/70">info@muzaorg.org</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Phone</h3>
                    <p className="text-ink/70">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Address</h3>
                    <p className="text-ink/70">
                      123 Equality Street<br />
                      Advocacy City, AC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                {/* Placeholder for map embed */}
                <div className="mt-8 bg-ink/10 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-ink/60">Interactive Map Embed</p>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-ink font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-ink font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-ink font-semibold mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Request Support</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-ink font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-rust text-cream py-3 px-6 rounded-lg font-semibold hover:bg-rust/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}