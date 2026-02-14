import Link from "next/link";

export function NextCoursesSection() {
  return (
    <section id="proximos-cursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Próximos Cursos
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 space-y-4">
            {[
              "Gestão de Projetos Sociais",
              "Liderança Comunitária",
              "Empreendedorismo Social",
            ].map((curso, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700 text-lg"
              >
                <span className="text-orange-500">•</span>
                <span>{curso}</span>
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/cursos"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Ver Calendário Completo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Pessoas em treinamento"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
