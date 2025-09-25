export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h3 className="text-3xl font-bold mb-6">Contact</h3>
      <p className="text-gray-700">Envie de collaborer ? Écris-moi :</p>
      <a
        href="mailto:tonemail@example.com"
        className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Me contacter
      </a>
    </section>
  );
}
