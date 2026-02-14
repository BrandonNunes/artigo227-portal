/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <img
                    src="/logos/artigo227logo-trans.png"
                    alt="Logo coletivo 227"
                    className="w-auto h-14 object-contain"
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

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-16 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden"
      >
        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full h-auto">
            <path
              fill="#f97316"
              fillOpacity="0.8"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 150" className="w-full h-auto">
            <path
              fill="#fbbf24"
              fillOpacity="0.6"
              d="M0,100L48,110C96,120,192,140,288,133.3C384,127,480,93,576,86.7C672,80,768,100,864,106.7C960,113,1056,107,1152,100C1248,93,1344,87,1392,83.3L1440,80L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transformando Vidas,
                <br />
                Construindo Futuros
              </h1>
              <p className="text-blue-100 text-lg mb-8">
                Desenvolvendo projetos sociais para um amanhã melhor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/projetos"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Nossos Projetos
                </Link>
                <Link
                  href="/sobre"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Quer Saber Mais
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
                <img
                  // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                  src="/imagens/mulher_modelo.png"
                  alt="Pessoa sorrindo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section id="o-que-fazemos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Fazemos
            </h2>
            <p className="text-gray-600">
              Impacto Social e Educação de Qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Educação para Todos",
                description: "Inclusão social através da educação.",
                image:
                  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
              },
              {
                title: "Empoderamento Jovem",
                description: "Capacitação de mentoria para jovens.",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
              },
              {
                title: "Alimentando Esperança",
                description: "Programa de combate à fome.",
                image:
                  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section
        id="depoimentos"
        className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Depoimentos</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-gray-700 text-lg italic mb-4">
                  &ldquo;Participar do curso foi uma experiência
                  transformadora!&rdquo;
                </p>
                <p className="text-gray-900 font-semibold">
                  Ana Souza, Voluntária.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                  alt="Ana Souza"
                  className="w-24 h-24 rounded-full object-cover border-4 border-orange-200"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Próximos Cursos */}
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

      {/* Palestras Destacadas */}
      <section
        id="palestras-destacadas"
        className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            — Palestras Destacadas —
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Como Fazer a Diferença",
                speaker: "João Silva",
                date: "18 de Abril, 14h",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
              },
              {
                title: "Inovação Social",
                speaker: "Maria Fernandes",
                date: "25 de Abril, 15h",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
              },
            ].map((palestra, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4"
              >
                <img
                  src={palestra.image}
                  alt={palestra.speaker}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {palestra.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Com {palestra.speaker}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{palestra.date}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
                  Inscrever-se
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junte-se a Nós */}
      <section id="junte-se-a-nos" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Junte-se a Nós!
          </h2>
          <p className="text-gray-600 mb-8">
            Quer fazer a diferença? Torne-se um voluntário ou apoie nossa causa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/voluntario"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Seja Voluntário
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
            <Link
              href="/doacao"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Faça uma Doação
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
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+55 11 9876-5432</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contato@exemplo.org</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Rua Exemplo, 123, São Paulo, SP</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 16.979c0 .451-.219.866-.569 1.108l-5.426 3.633c-.358.24-.812.24-1.17 0l-5.426-3.633c-.35-.242-.569-.657-.569-1.108V7.021c0-.451.219-.866.569-1.108l5.426-3.633c.358-.24.812-.24 1.17 0l5.426 3.633c.35.242.569.657.569 1.108v9.958z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <div className="flex gap-6">
              <Link
                href="/sobre"
                className="hover:text-white transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/projetos"
                className="hover:text-white transition-colors"
              >
                Projetos
              </Link>
              <Link
                href="/cursos"
                className="hover:text-white transition-colors"
              >
                Cursos
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link
                href="/privacidade"
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
            <p>&copy; 2024 Coletivo Social. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
