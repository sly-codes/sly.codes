export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">MonPortfolio</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#about" className="hover:text-blue-600">
            À propos
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projets
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
