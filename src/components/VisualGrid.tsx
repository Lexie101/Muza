export default function VisualGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-ink text-cream p-8 rounded-lg">
        <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
        <p className="leading-relaxed">
          A world where gender equality is not just an ideal, but a lived reality
          for every person, regardless of their identity or background.
        </p>
      </div>
      <div className="bg-gold text-ink p-8 rounded-lg">
        <h3 className="text-xl font-serif font-bold mb-4">Impact</h3>
        <ul className="space-y-2">
          <li>• Policy Reform</li>
          <li>• Community Education</li>
          <li>• Advocacy Support</li>
        </ul>
      </div>
      <div className="bg-rust text-cream p-8 rounded-lg">
        <h3 className="text-xl font-serif font-bold mb-4">Values</h3>
        <ul className="space-y-2">
          <li>• Inclusivity</li>
          <li>• Justice</li>
          <li>• Empowerment</li>
        </ul>
      </div>
      <div className="md:col-span-2 bg-cream border border-ink/20 p-8 rounded-lg">
        <h3 className="text-2xl font-serif font-bold text-ink mb-4">Join Us</h3>
        <p className="text-ink/80 leading-relaxed">
          Be part of the movement for change. Your voice matters in creating
          a more equitable future.
        </p>
      </div>
    </div>
  );
}