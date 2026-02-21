"use client";

import { Button } from "@/src/components/Button";
import { Section, SectionHero } from "@/src/components/index";

const axes = [
  {
    number: "01",
    title: "Educação Inclusiva",
    description:
      "Garantir acesso de qualidade à educação é fundamental para o desenvolvimento integral de crianças e adolescentes. Defendemos políticas que promovam inclusão, equidade e excelência educacional.",
    icon: "school",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqTwsW_p_BzV-WDuX6eB3fzbdYtIQdJivuqiaV9aAU3WgRRWB0NvHDw4irIrPd0WbrRFWkyr4PoytUyQ6QTPRuKD0h1MD9Xx6vxy-Ol1i911OFSlPMLf1pVg4ZuhvAPVmKqEqfcebye0-6WnkNoJJHlK_Xfoog4wJKZXoTAhgUAu4cCyhvrkKYiIPrs9E4_rvnbBMcLK7TQpgQUgkeez7sHGH6gZ5dx3mus0sHTZzG4uaXuMobETUE9OK3ZZt7CHLTrWSwv8a8EWDb",
    position: "left",
    color: "#FFD600",
  },
  {
    number: "02",
    title: "Proteção Integral",
    description:
      "Toda criança merece proteção contra violência, exploração e negligência. Trabalhamos para fortalecer redes de proteção, responsabilizar agressores e apoiar vítimas.",
    icon: "shield",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2SgZtPpa89CTjy8NlbS_8rQLSZdIOkMpyEb37c4ehyc_oqjmFhv7UbzsIyMhoyPLDrzUSPn14bE2Evr3SvOREJxzaglRp9mZy3RBzOzJwK1vK3FZVbnPTp24UOTSDK6O-Aj34imp3HZPyYi-0lqmpMjfOVF0Op5Q7QxLXMT2ASGYl5HrVSqM7tl5LzmYdKwYLVTzrI5szPbOE7twNAYtax3H4L7cDNlkNLKpcxpbsLoVmSzpK38w3v4BmPSgpo0HAHZsAg1nV3kF9",
    position: "right",
    color: "#FF6B00",
  },
  {
    number: "03",
    title: "Saúde e Bem-estar",
    description:
      "Acesso à saúde integral é direito de todos. Promovemos políticas que garantam atendimento de qualidade, prevenção de doenças e promoção de saúde mental e física.",
    icon: "cardiology",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh1_izOk-aWkvO6MWK2g2O3oFDJYCMyA-JgQb7QkjiJdLu2wF3mMWA0uAlSODcF6Qna8fWBslZqbMPftHkat-7i8-24NOceYucNLlf7tc3EcjHM1iAW2v8YftOjZ5DWTNWRJcHEth4lurd9ItN09KI66lRuic9SXOTR37LWRIpx0FU1ysgBVoyZyK4EzA5P8KZllZXH3entY1Av_5AjU34NoTaeme1wzZO3sQ-LI50c3wU9FzrqRfHYCUrS0ie4rXXD2PKZhXDWhUD",
    position: "left",
    color: "#0056D2",
  },
];

export default function Eixos() {
  return (
    <>
      {/* Hero Section */}
      <Section bg="surface" py="py-16">
        <SectionHero
          label="Nossa Estrutura"
          title={
            <>
              O que <span className="text-primary">Atuamos</span>
            </>
          }
          subtitle="Três eixos fundamentais orientam nosso trabalho pela defesa integral dos direitos das crianças e adolescentes brasileiros."
        />
      </Section>

      {/* Z-Pattern Content */}
      <div className="px-6 py-12 md:px-10 lg:px-20 lg:py-20 flex flex-col gap-24 lg:gap-32">
        {axes.map((axis, idx) => (
          <section
            key={idx}
            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              axis.position === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div
              className={`lg:col-span-5 flex flex-col gap-6 relative ${
                axis.position === "right" ? "lg:order-2" : "lg:order-1"
              } ${axis.position === "right" ? "order-2" : "order-2 lg:order-1"}`}
            >
              {/* Giant Number Background */}
              <span className="absolute -top-20 -left-10 text-[180px] font-display font-bold text-gray-100 opacity-20 select-none -z-0 pointer-events-none leading-none">
                {axis.number}
              </span>

              <div className="relative z-10">
                {/* Icon Box */}
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6 clip-triangle-tl shadow-hard"
                  style={{ backgroundColor: axis.color }}
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{
                      color:
                        axis.color === "#FFD600" || axis.color === "#FF6B00"
                          ? "#FFFFFF"
                          : "#FFFFFF",
                    }}
                  >
                    {axis.icon}
                  </span>
                </div>

                <h2 className="text-4xl font-display font-bold text-primary mb-4">
                  {axis.title}
                </h2>
                <p className="text-text-main text-lg leading-relaxed mb-6">
                  {axis.description}
                </p>

                <a
                  href="#"
                  className="group/link inline-flex items-center text-primary font-display font-bold text-lg hover:text-secondary transition-colors uppercase tracking-wide"
                >
                  Saiba Mais
                  <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div
              className={`lg:col-span-7 ${
                axis.position === "right" ? "lg:order-1" : "lg:order-2"
              } ${axis.position === "right" ? "order-1" : "order-1"}`}
            >
              <div className="relative w-full aspect-[4/3] lg:aspect-[16/9]">
                {/* Shadow Element */}
                <div className="absolute inset-0 bg-primary translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4"></div>

                {/* Image with Clipping */}
                <img
                  alt={axis.title}
                  className={`relative w-full h-full object-cover z-10 grayscale hover:grayscale-0 transition-all duration-500 ${
                    axis.position === "right"
                      ? "clip-triangle-tl"
                      : "clip-triangle-br"
                  }`}
                  src={axis.image}
                />

                {/* Decorative Triangle */}
                <div
                  className={`absolute w-24 h-24 z-20 opacity-90 ${
                    axis.position === "right"
                      ? "bottom-0 left-0 clip-triangle-tl"
                      : "bottom-0 right-0 clip-triangle-br"
                  }`}
                  style={{ backgroundColor: axis.color }}
                ></div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <Section bg="primary" py="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Conheça nossos projetos em detalhes
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Veja como estamos trabalhando em cada um desses eixos para
            transformar vidas.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Ver Projetos
          </Button>
        </div>
      </Section>
    </>
  );
}
