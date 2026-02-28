import { Button } from "@/src/components/Button";
import { Footer } from "@/src/components/Footer";
import { FORM_URL } from "@/src/utils/constants";
import { ArrowRight, ChevronRight, Eye, Gavel, Megaphone } from "lucide-react";

const values = [
  "Proteção",
  "Educação",
  "Saúde",
  "Dignidade",
  "Liberdade",
  "Convivência Familiar",
];

const pillars = [
  {
    title: "Monitoramento",
    description:
      "Acompanhamento rigoroso de políticas públicas e orçamentos voltados para a infância e adolescência.",
    icon: <Eye className="text-(--artigo227-blue)" />,
    color: "primary",
  },
  {
    title: "Incidência Política",
    description:
      "Pressão qualificada e articulação direta com legisladores para aprovação de leis protetivas.",
    icon: <Gavel className="text-(--artigo227-orange)" />,
    color: "orange",
  },
  {
    title: "Mobilização Social",
    description:
      "Campanhas de conscientização que engajam a sociedade na defesa dos direitos fundamentais.",
    icon: <Megaphone className="text-(--artigo227-yellow)" />,
    color: "yellow",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center overflow-hidden bg-white">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-20 lg:pl-32 py-12 md:py-0 z-10">
          <div className="max-w-xl">
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-(--artigo227-blue) mb-6">
              Coletivo
              <br />
              <span className="relative inline-block text-black z-10">
                <span className="relative z-10">Artigo227.</span>
                <span
                  style={{
                    animation: "reveal 0.6s ease-out forwards",
                    animationDelay: "0.3s",
                    width: "0%",
                  }}
                  className="absolute bottom-1 left-0 h-[0.4em] bg-(--artigo227-yellow) w-full z-0 origin-left animate-reveal"
                ></span>
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-text-main/80 mb-10 leading-relaxed max-w-md">
              Transformamos a defesa legal em narrativa. O artigo 227 não é
              apenas uma lei, é um pacto de futuro para cada criança e
              adolescente brasileiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="md"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contate-nos
              </Button>
              <a
                target="_blank"
                href={FORM_URL}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-muted hover:text-primary transition-colors px-4 py-2"
              >
                Conheça Nossa Atuação
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative md:absolute md:right-0 md:top-0 clip-triangle-hero bg-surface group overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply"></div>
          <img
            alt="Diverse group of children looking upwards towards a bright future"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0sEGy3auatvpAU5-XVVFoK1dUoHVBYDdj4n5HyHbNOksLYG2JdeczaR8G1N59AdHSbPc2Wq3FeWCbDz6V6ZqPXhOpHpUTxY0KnhcRSWIAeruqrARJSmFC-7G1mT3ks_S9U4MdNos8cLYcGHEGY6WqXiIJwdh1qg9UBGQwA6q7_SJwVzdvda5ocdsq-2eAIS_6_czYNvmlwpqTWAdBaurqt3vRrVOvCvXdjFh-9hNQqFPHboNwpskqBOORTV9g4-0gQwW06i_jSsbZ"
          />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent clip-triangle-decoration opacity-80 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Infinite Ticker */}
      <div className="bg-(--artigo227-blue) text-white py-4 overflow-hidden relative z-20 border-t-4 border-(--artigo227-yellow)">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...values, ...values].map((value, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-12 px-6 ${idx === values.length ? "hidden" : ""}`}
            >
              <span className="font-display font-bold text-2xl tracking-widest uppercase">
                {value}
              </span>
              <span className="text-(--artigo227-yellow) text-xs">▲</span>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto Quote Section */}
      <section className="py-24 px-6 md:px-20 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/3 pt-4 border-t-4 border-(--artigo227-blue)">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main leading-tight">
                É dever da família, da sociedade e do Estado.
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="font-body text-xl md:text-2xl leading-relaxed text-text-main/90 indent-8 md:indent-12">
                O artigo 227 da Constituição Federal determina que é dever
                assegurar à criança, ao adolescente e ao jovem, com absoluta
                prioridade, o direito à vida, à saúde, à alimentação, à
                educação, ao lazer, à profissionalização, à cultura, à
                dignidade, ao respeito, à liberdade e à convivência familiar e
                comunitária, além de colocá-los a salvo de toda forma de
                negligência, discriminação, exploração, violência, crueldade e
                opressão.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-0.5 w-12 bg-(--artigo227-orange)"></div>
                <span className="font-display font-bold text-(--artigo227-blue) uppercase tracking-wider text-sm">
                  Constituição Federal de 1988
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid (Nossa Atuação) */}
      <section
        id="atuacao"
        className="bg-gray-100 py-24 px-6 md:px-20 relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 -mr-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main mb-4">
                Nossa Atuação
              </h2>
              <p className="font-body text-text-muted text-lg max-w-xl">
                Atuamos em frentes estratégicas para garantir que a lei saia do
                papel e transforme a realidade.
              </p>
            </div>
            <a
              href="/oque-atuamos"
              className="hidden md:flex items-center gap-2 font-display font-bold text-(--artigo227-blue) hover:text-(--artigo227-blue-hover) transition-colors uppercase tracking-wider text-sm"
            >
              Ver todos os o que atuamos
              <ArrowRight />
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const colorMap = {
                primary: {
                  icon: "text-(--artigo227-blue)",
                  bg: "bg-(--artigo227-blue)/10",
                },
                orange: {
                  icon: "text-(--artigo227-orange)",
                  bg: "bg-(--artigo227-orange)/10",
                },
                yellow: {
                  icon: "text-(--artigo227-yellow)",
                  bg: "bg-(--artigo227-yellow)/10",
                },
              };
              const colors = colorMap[pillar.color as keyof typeof colorMap];

              return (
                <div
                  key={idx}
                  className="group bg-white p-8 border border-gray-100 shadow-hard hover:shadow-hard-hover transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-surface clip-triangle-decoration opacity-50"></div>

                  <div
                    className={`w-12 h-12 ${colors.bg} ${colors.icon} flex items-center justify-center mb-6 rounded-sm`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {pillar.icon}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-bold text-2xl text-text-main mb-3 group-hover:text-[${pillar.color}] transition-colors`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="font-body text-text-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <a
                    href="#"
                    className={`inline-flex ${colors.icon} items-center gap-1 text-sm font-bold uppercase tracking-wider group/link hover-text-[${pillar.color}]`}
                  >
                    Saiba Mais
                    <ChevronRight
                      className={`${colors.icon} group-hover/link:translate-x-1 transition-transform`}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section
        id="valor"
        className="py-24 px-6 md:px-20 relative overflow-hidden bg-white"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12">
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-6 inline-block">
              O Manifesto
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-text-main mb-8 leading-tight">
              Por que defendemos o{" "}
              <span className="text-primary">Artigo 227</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-body text-xl text-text-muted leading-relaxed">
              O Artigo 227 da Constituição Federal de 1988 estabelece que é
              dever da família, da sociedade e do Estado assegurar à criança, ao
              adolescente e ao jovem o direito à vida, à saúde, à alimentação, à
              educação, ao lazer, à profissionalização, à cultura, à dignidade,
              ao respeito, à liberdade e à convivência familiar e comunitária.
            </p>

            <p className="font-body text-xl text-text-muted leading-relaxed">
              Nós acreditamos que estes não são apenas direitos no papel. São
              compromissos que precisam ser vividos, implementados e garantidos
              todos os dias para cada criança brasileira.
            </p>

            <p className="font-body text-xl text-text-muted leading-relaxed">
              Por isto, o Coletivo Artigo 227 trabalha para transformar
              princípios constitucionais em ações concretas, políticas públicas
              efetivas e mudança social durável.
            </p>
          </div>

          <div className="mt-12">
            <Button size="lg">Conheça Nossa Estrutura</Button>
          </div>
        </div>

        {/* Background watermark */}
        <div className="absolute left-20 top-0 font-display font-bold text-[400px] leading-none text-surface select-none -z-10 opacity-60 pointer-events-none">
          227
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-(--artigo227-blue) py-20 px-6 md:px-20 text-white relative overflow-hidden">
        {/* Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-10%] w-[1000px] h-[1000px] border border-white rotate-45"></div>
          <div className="absolute bottom-[-50%] right-[-10%] w-[800px] h-[800px] border border-white rotate-12"></div>
        </div>

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            Não deixe para depois.
          </h2>
          <p className="font-body text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Receba atualizações mensais sobre o status dos direitos da criança e
            do adolescente no Brasil.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail profissional"
              className="flex-1 h-14 px-6 bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent focus:bg-white/20 rounded-sm font-body"
            />
            <button
              type="submit"
              className="h-14 px-8 bg-(--artigo227-yellow) text-black font-display font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-hard rounded-sm whitespace-nowrap"
            >
              Contate-nos
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
