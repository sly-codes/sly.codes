const projects = [
  { title: 'Portfolio', description: 'Mon site personnel en React + Tailwind', link: '#' },
  {
    title: 'App E-commerce',
    description: 'Une boutique en ligne avec paiement intégré',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h3 className="text-3xl font-bold mb-6">Projets</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">{p.title}</h4>
            <p className="mt-2 text-gray-600">{p.description}</p>
            <a href={p.link} className="text-blue-600 mt-4 inline-block hover:underline">
              Voir le projet →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
