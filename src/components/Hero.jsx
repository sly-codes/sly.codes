export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold">
        Salut, je suis <span className="text-blue-600">Ton Nom</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">Développeur Web | Passionné de UI/UX</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Voir mes projets
      </a>
    </section>
  );
}
