import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <img
                  src="/logos/artigo227logo-trans.png"
                  alt="Logo coletivo 227"
                  className="w-auto h-10 lg:h-14 object-contain"
                />
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 text-md font-bold"
            >
              Início
            </Link>
            <Link
              href="#o-que-fazemos"
              className="text-gray-700 hover:text-blue-600 text-md font-bold"
            >
              Sobre Nós
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 text-md font-bold"
            >
              Projetos
            </Link>
            <Link
              href="#proximos-cursos"
              className="text-gray-700 hover:text-blue-600 text-md font-bold"
            >
              Cursos & Palestras
            </Link>
            <Link
              href="#blog"
              className="text-gray-700 hover:text-blue-600 text-md font-bold"
            >
              Blog
            </Link>
          </nav>
          <Link
            href="#junte-se-a-nos"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-md font-bold transition-colors"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
