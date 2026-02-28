"use client";

import { Button } from "@/src/components/Button";
import { Section, SectionHero } from "@/src/components/index";
import { useState } from "react";

const projects = [
  {
    title: "Saúde para Todos",
    category: "Saúde",
    description:
      "Garantindo acesso igualitário a serviços de saúde para crianças nas zonas rurais.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCksjUik2uBNYZArP1B9xnYVzgQsCPrR6vInbGlcZZV3zlrgZNqFcIlCWlNmsljdAzwQNaTH13xIfDvaBIN2AAP1m6U0GmH5cf-VrO-lmVFwDzYbQW8Az0JXgDeZBwIN-D-mQYGxyZrostif4auU3czvQ7oyukYX0u4XfDNF3-enAReKkFRwt0erOylxMS6m1kcAsxTiSGT4tbURBUm6TR18a6mlhPcAV7fe69JuWYZOqYO5tpahxy1oTGImP5Nr8ydzM-PKuixbKSa",
    progress: 75,
    status: "active",
    icon: "ecg_heart",
  },
  {
    title: "Educação Infantil",
    category: "Educação",
    description:
      "Ampliação de programas de educação infantil de qualidade em comunidades carentes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHX296Y_m8_xLQGWVWKyaE-byHtzHy72uHK0l1YvpIo3SL-j0E7fIGEZWi6e9FF77OXm88iAOk31_b9V_BNI7EJYKwaFqb3MhYjimw2LosUckZGRVS4-2n5u_kThoegK-VPCH9f6ZRU-xF9hF_j7PrUkEnM0hPmqBioWQvMarU-VtLg5YnQzaa7EZ46PL6zPFyZf9KiQyFM47Xdo_yrAOYr4ES85BEKFv6QTN1fuNj-2PMIBy9YA3YwhVKqJNZ-vCyrLMtRBl7Tzqi",
    progress: 0,
    status: "completed",
    icon: "school",
  },
  {
    title: "Rede de Proteção",
    category: "Proteção",
    description:
      "Fortalecimento de redes para proteção contra violência infantil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_0VnRAoGW9qZFKswlJibILkmhdFmgkCH3caa7kx5tQS022xjXmnaGYMq2GylkFscdhBGp14sm1FQFKqY4Md-RzdJ7Y-gzf-b19KIlGPCcqfpLSCXC3n5Hf9DPfvRM0M_xRnf-7juhMy7dTkRLvo6eEWbPSrT4i7fvlH_jMDSeeUXrDmYNF_C5_39s0ptYiatEGvo9reogLp6che5B4CJR3HzcfxxvARlfBg7YMn1WKjGVG8r0-oD5Zx26yDwHyGNI9YOygYlDMDya",
    progress: 40,
    status: "active",
    icon: "shield",
  },
  {
    title: "Advocacia de Direitos",
    category: "Legislação",
    description:
      "Mobilização e comunicação sobre direitos constitucionais de crianças.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkpTyygbQlqWjoI-Ym71FnSf7a-TT89vdQwfZVVGjqsshd8RzMxHKiSW1g3XxBrG1i0Z7kaeEct-73-SWvsQd9jSdhsYuuxvomOHSsTsFKqh7Rv-Qi9n16NOePlDjBF3jkY-PqbEIkidGJu0aphzb3aNr4kr1zE2EalF2iNWABmZF15Abky4hhoHT2k_qX5rPcl6hhXmRJNRkkH71CU1OeA71S2que2nrP3_3AALtvoK2d92YuVrEmQ2lZOAvf4w0MhXb6tcvHGsiN",
    progress: 60,
    status: "active",
    icon: "volunteer_activism",
  },
];

const statusConfig = {
  active: { label: "ATIVO", color: "bg-green-600" },
  completed: { label: "FINALIZADO", color: "bg-gray-500" },
  planning: { label: "EM PLANEJAMENTO", color: "bg-blue-500" },
};

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered =
    activeFilter === "todos"
      ? projects
      : projects.filter(
          (p) => p.status === activeFilter || p.category === activeFilter,
        );

  return (
    <>
      {/* Hero Section */}
      <Section py="py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-1 w-12 bg-accent"></span>
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm">
              Nossas Iniciativas
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-none tracking-tight text-text-main mb-6">
            Projetos em Ação
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            Conheça as iniciativas que estamos desenvolvendo para implementar o
            Artigo 227 em todo o país.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section py="py-4 border-b-2 border-surface">
        <div className="flex flex-wrap gap-2 pl-4">
          <button
            onClick={() => setActiveFilter("todos")}
            className={`px-8 py-3 font-display font-bold text-sm uppercase tracking-wide transition-colors ${
              activeFilter === "todos"
                ? "bg-primary text-white"
                : "bg-surface text-text-muted hover:text-primary hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveFilter("active")}
            className={`px-8 py-3 font-display font-bold text-sm uppercase tracking-wide transition-colors ${
              activeFilter === "active"
                ? "bg-primary text-white"
                : "bg-surface text-text-muted hover:text-primary hover:bg-gray-200"
            }`}
          >
            Ativos
          </button>
          <button
            onClick={() => setActiveFilter("completed")}
            className={`px-8 py-3 font-display font-bold text-sm uppercase tracking-wide transition-colors ${
              activeFilter === "completed"
                ? "bg-primary text-white"
                : "bg-surface text-text-muted hover:text-primary hover:bg-gray-200"
            }`}
          >
            Finalizados
          </button>
        </div>
      </Section>

      {/* Grid */}
      <Section py="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((project, idx) => (
            <article
              key={idx}
              className="group relative bg-white border border-gray-100 shadow-hard hover:shadow-hard-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Status Ribbon */}
              <div className="absolute -top-2 -left-2 z-20">
                <div
                  className={`${statusConfig[project.status as keyof typeof statusConfig].color} text-white text-xs font-display font-bold uppercase tracking-wider py-2 px-4 shadow-sm min-w-[120px] text-center`}
                >
                  {
                    statusConfig[project.status as keyof typeof statusConfig]
                      .label
                  }
                </div>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-secondary font-display font-bold text-xs uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="material-symbols-outlined text-primary">
                    {project.icon}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-text-main leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Progress Bar */}
                {project.progress > 0 && (
                  <div className="w-full mt-2">
                    <div className="flex justify-between text-xs font-bold font-display uppercase mb-1 text-text-muted">
                      <span>Progresso</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200">
                      <div
                        className="h-full bg-accent shadow-[0_0_10px_rgba(255,214,0,0.5)]"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 mt-auto border-t border-gray-100">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-display font-bold text-sm uppercase tracking-wide group-hover:text-secondary transition-colors"
                  >
                    Saiba Mais
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section bg="primary" py="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Quer participar de nossos projetos?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Temos oportunidades de voluntariado e parcerias para potencializar
            nosso impacto.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Contate-nos
          </Button>
        </div>
      </Section>
    </>
  );
}
