"use client";

import { Button } from "@/src/components/Button";
import { Card, Section, SectionHero } from "@/src/components/index";
import { useState } from "react";

const timeline = [
  {
    year: "2020",
    title: "Fundação do Coletivo",
    description:
      "Em resposta aos desafios crescentes, unimos forças para criar uma frente unificada de defesa dos direitos constitucionais.",
    position: "right",
  },
  {
    year: "2021",
    title: "O Primeiro Relatório",
    description:
      "Publicamos nosso primeiro relatório técnico analisando a implementação do Artigo 227 em todo o país.",
    position: "left",
  },
  {
    year: "2023",
    title: "Expansão do Conselho",
    description:
      "Ampliamos nossa rede de especialistas e parceiros para ampliar o alcance de nossas ações.",
    position: "right",
  },
];

const team = [
  {
    name: "Ana Silva",
    role: "Diretora Executiva",
    background: "Liderança estratégica e relações institucionais.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7s7-0C-_R59keuvaU23Hy3HEfJuw3W-v8IgXIaPRc-gXl1awCL0gBn3SlMGp9Tak2cjJedoVNuwZi2NcUypNCePmgHoaVMF0KVOGfAq6cW9MB0BEa-fsvFt22BbgbXi4JM7_iO8bKgQH8IBZzDhlldvZU71bM5x2iB4Jg6wtU3w3bMEazyZLONy6tUpzZo5DFY7-r2otZFHxcp3zWDBX5n3-e--EJEAxd7CKNA8GGnvj5eoeCXp7xCnY_ZScTdMUNLCLjcbhVeWJN",
  },
  {
    name: "Carlos Santos",
    role: "Coordenador de Projetos",
    background: "Gestão de iniciativas e implementação de políticas públicas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh1_izOk-aWkvO6MWK2g2O3oFDJYCMyA-JgQb7QkjiJdLu2wF3mMWA0uAlSODcF6Qna8fWBslZqbMPftHkat-7i8-24NOceYucNLlf7tc3EcjHM1iAW2v8YftOjZ5DWTNWRJcHEth4lurd9ItN09KI66lRuic9SXOTR37LWRIpx0FU1ysgBVoyZyK4EzA5P8KZllZXH3entY1Av_5AjU34NoTaeme1wzZO3sQ-LI50c3wU9FzrqRfHYCUrS0ie4rXXD2PKZhXDWhUD",
  },
  {
    name: "Marina Costa",
    role: "Pesquisadora Sênior",
    background:
      "Análise de dados e produção de conhecimento sobre direitos de crianças.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkpTyygbQlqWjoI-Ym71FnSf7a-TT89vdQwfZVVGjqsshd8RzMxHKiSW1g3XxBrG1i0Z7kaeEct-73-SWvsQd9jSdhsYuuxvomOHSsTsFKqh7Rv-Qi9n16NOePlDjBF3jkY-PqbEIkidGJu0aphzb3aNr4kr1zE2EalF2iNWABmZF15Abky4hhoHT2k_qX5rPcl6hhXmRJNRkkH71CU1OeA71S2que2nrP3_3AALtvoK2d92YuVrEmQ2lZOAvf4w0MhXb6tcvHGsiN",
  },
  {
    name: "João Oliver",
    role: "Advogado Constitucional",
    background: "Assessoria jurídica e defesa de direitos constitucionais.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2SgZtPpa89CTjy8NlbS_8rQLSZdIOkMpyEb37c4ehyc_oqjmFhv7UbzsIyMhoyPLDrzUSPn14bE2Evr3SvOREJxzaglRp9mZy3RBzOzJwK1vK3FZVbnPTp24UOTSDK6O-Aj34imp3HZPyYi-0lqmpMjfOVF0Op5Q7QxLXMT2ASGYl5HrVSqM7tl5LzmYdKwYLVTzrI5szPbOE7twNAYtax3H4L7cDNlkNLKpcxpbsLoVmSzpK38w3v4BmPSgpo0HAHZsAg1nV3kF9",
  },
];

export default function QuemSomos() {
  const [currentTeamPage, setCurrentTeamPage] = useState(0);
  const itemsPerPage = 4;
  const displayedTeam = team.slice(
    currentTeamPage * itemsPerPage,
    (currentTeamPage + 1) * itemsPerPage,
  );

  return (
    <>
      {/* Hero Section */}
      <Section py="pt-20 pb-16">
        <SectionHero
          label="Institucional"
          title={
            <>
              Quem <span className="text-primary">Somos</span>
            </>
          }
          subtitle="A estrutura por trás da defesa. Uma rede organizada para garantir a prioridade absoluta de crianças e adolescentes."
        />
      </Section>

      {/* Timeline Section */}
      <Section bg="white" py="py-20">
        <div>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-display font-bold text-text-main text-center mb-4">
              Nossa Trajetória
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2"></div>

              {/* Timeline Items */}
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between mb-16 group w-full ${
                    item.position === "left" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 -translate-x-1/2"></div>

                  {/* Empty Side */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content */}
                  <div className="w-full pl-20 md:pl-0 md:w-5/12 relative">
                    {/* Pointer */}
                    {item.position === "right" && (
                      <div className="hidden md:block absolute top-6 -left-3 w-4 h-6 bg-primary clip-triangle-left"></div>
                    )}
                    {item.position === "left" && (
                      <div className="hidden md:block absolute top-6 -right-3 w-4 h-6 bg-primary clip-triangle-right"></div>
                    )}

                    <Card hover>
                      <span className="text-4xl font-display font-bold text-primary/20 absolute top-2 right-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-display font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Grid Section */}
      <Section bg="surface" py="py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold text-text-main mb-2">
              Nosso Time
            </h2>
            <p className="text-text-muted font-body max-w-md">
              Especialistas dedicados à construção de um futuro mais justo.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentTeamPage((p) => (p > 0 ? p - 1 : 0))}
              disabled={currentTeamPage === 0}
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              onClick={() =>
                setCurrentTeamPage((p) =>
                  p < Math.ceil(team.length / itemsPerPage) - 1 ? p + 1 : p,
                )
              }
              disabled={
                currentTeamPage >= Math.ceil(team.length / itemsPerPage) - 1
              }
              className="w-10 h-10 flex items-center justify-center bg-primary text-white border border-primary hover:bg-primary-dark transition-colors disabled:opacity-50 shadow-hard-sm"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedTeam.map((member, idx) => (
            <div
              key={idx}
              className="team-card group relative overflow-hidden bg-white shadow-hard cursor-pointer"
            >
              <div className="aspect-square w-full bg-gray-200 relative overflow-hidden">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  src={member.image}
                />
              </div>

              {/* Static Name Tag */}
              <div className="absolute bottom-0 left-0 w-full bg-primary p-3 z-10">
                <h3 className="text-white font-display font-bold text-lg leading-none">
                  {member.name}
                </h3>
              </div>

              {/* Hover Role Overlay */}
              <div className="role-overlay absolute inset-0 bg-accent/95 z-20 translate-y-full transition-transform duration-300 ease-out flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 text-text-main opacity-20">
                  <span className="material-symbols-outlined text-5xl">
                    person
                  </span>
                </div>
                <h4 className="text-text-main font-display font-bold text-xl mb-1">
                  {member.role}
                </h4>
                <p className="text-text-main/80 text-sm font-body mb-4">
                  {member.background}
                </p>
                <div className="w-8 h-1 bg-text-main"></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="primary" py="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Quer fazer parte da transformação?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Se você compartilha dos nossos valores e quer contribuir para
            garantir os direitos das crianças, junte-se a nós.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Entre em Contato
          </Button>
        </div>
      </Section>
    </>
  );
}
