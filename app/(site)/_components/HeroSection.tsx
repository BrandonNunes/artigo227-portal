import Link from "next/link";

export function HeroSection() {
  return (
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
  );
}
