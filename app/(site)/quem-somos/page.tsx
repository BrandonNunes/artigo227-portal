"use client";

import { Button } from "@/src/components/Button";
import { Card, Footer, Section, SectionHero } from "@/src/components/index";
import {
  ArrowLeft,
  ArrowRight,
  HandHeart,
  Mountain,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

const timeline = [
  {
    year: "2018",
    title: "Fundação do coletivo (OAB-RJ / seminário)",
    description: "",
    position: "right",
  },
  {
    year: "2019-2020",
    title: "Formações, palestras e ações de forma voluntária",
    description: "",
    position: "left",
  },
  {
    year: "2021",
    title: "Expansão das parcerias\ne eventos online",
    description: "",
    position: "right",
  },
  {
    year: "2022",
    title: "Projeto piloto com município cearense",
    description: "",
    position: "left",
  },
  {
    year: `2023-${new Date().getFullYear()}`,
    title: "Consultorias e cursos em instituições\npúblicas e privadas",
    description: "",
    position: "right",
  },
];

const team = [
  {
    name: "Jéssica Araújo",
    role: "Diretora",
    background: "",
    image: "imagens/fotos_membros/Jessica_Araujo.jpeg",
  },
  {
    name: "Marcia Barros",
    role: "Psicóloga",
    background: "",
    image: "imagens/fotos_membros/Marcia_Barros.jpg",
  },
  {
    name: "Laís Vitória",
    role: "Financeiro",
    background: "",
    image: "imagens/fotos_membros/Lais_Vitoria.jpeg",
  },

  {
    name: "Isabel Sousa",
    role: "Advogada",
    background: "",
    image: "imagens/fotos_membros/Isabel.jpg",
  },
  {
    name: "Vanessa Melo",
    role: "Psicóloga",
    background: "",
    image: "imagens/fotos_membros/Vanessa_Melo.jpg",
  },

  {
    name: "Fabiana Moraes",
    role: "Advogada",
    background: "",
    image: "imagens/fotos_membros/Fabiana_01.jpeg",
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
              Quem <span className="text-(--artigo227-blue)">Somos</span>
            </>
          }
          subtitle="O Coletivo Artigo 227 nasceu em 2018, a partir do encontro de três
pesquisadoras engajadas na defesa dos direitos humanos de crianças e
adolescentes.
Nossa história começou durante um seminário na OAB-RJ, onde percebemos a
necessidade de construir pontes entre a pesquisa, a prática profissional e a
promoção de políticas públicas eficazes para a infância e juventude.
Desde então, atuamos em todo o Brasil com formações, consultorias,
publicações e projetos em rede, sempre com o propósito de fortalecer o Sistema
de Garantia de Direitos e contribuir para uma sociedade mais justa e protetiva."
        />
      </Section>

      {/* Timeline Section */}
      <Section bg="white" py="py-20">
        <div>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-display font-bold text-text-main text-center mb-4">
              Nossa Trajetória
            </h2>
            <div className="w-24 h-1 bg-(--artigo227-blue)"></div>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-(--artigo227-blue) -translate-x-1/2"></div>

              {/* Timeline Items */}
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between mb-16 group w-full ${
                    item.position === "left" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-white border-4 border-(--artigo227-blue) rounded-full z-10 -translate-x-1/2"></div>

                  {/* Empty Side */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content */}
                  <div className="w-full pl-20 md:pl-0 md:w-5/12 relative">
                    {/* Pointer */}
                    {item.position === "right" && (
                      <div className="hidden md:block absolute top-6 -left-3 w-4 h-6 bg-(--artigo227-blue) clip-triangle-left"></div>
                    )}
                    {item.position === "left" && (
                      <div className="hidden md:block absolute top-6 -right-3 w-4 h-6 bg-(--artigo227-blue) clip-triangle-right"></div>
                    )}

                    <Card hover>
                      <span className="text-4xl font-display font-bold text-(--artigo227-blue) absolute top-2 right-4">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-display font-bold text-black mb-2 mt-5">
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
            <h2 className="text-4xl font-display font-bold  mb-2">
              Nosso Time
            </h2>
            <p className="text-text-muted font-body max-w-md">
              Quem faz parte do Artigo 227? Conheça as pessoas por trás do nosso
              trabalho.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentTeamPage((p) => (p > 0 ? p - 1 : 0))}
              disabled={currentTeamPage === 0}
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:bg-(--artigo227-blue) hover:text-white transition-colors disabled:opacity-50"
            >
              <ArrowLeft size={20} />
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
              className="w-10 h-10 flex items-center justify-center bg-(--artigo227-blue) text-white border border-(--artigo227-blue) hover:bg-(--artigo227-blue-hover) transition-colors disabled:opacity-50 shadow-hard-sm"
            >
              <ArrowRight size={20} />
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
              <div className="aspect-square w-full bg-gray-50 relative overflow-hidden">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  src={member.image}
                />
              </div>

              {/* Static Name Tag */}
              <div className="absolute bottom-0 left-0 w-full bg-(--artigo227-blue) p-3 z-10">
                <h3 className="text-white font-display font-bold text-lg leading-none">
                  {member.name}
                </h3>
              </div>

              {/* Hover Role Overlay */}
              <div className="role-overlay absolute inset-0 bg-(--artigo227-yellow)/95 opacity-90 z-20 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 text-black opacity-20">
                  <User size={48} />
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

      {/* Objetivo Section */}
      <Section bg="surface" py="py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold  mb-2">Objetivo</h2>
            <p className="text-lg font-body max-w-md">
              Promover e disseminar os direitos humanos de crianças e
              adolescentes conforme previsão no artigo 227 da Constituição
              Federal de 1988 e os Objetivos do Desenvolvimento Sustentável.
            </p>
          </div>
        </div>
      </Section>
      {/* Missão, Visão e Valores */}
      <Section bg="surface" py="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div className="text-center">
            <div className="flex justify-center mb-4 text-[#D97706]">
              <HandHeart size={76} strokeWidth={2.2} />
            </div>
            <h3 className="text-4xl font-display font-bold mb-3">Missão:</h3>
            <p className="text-text-main/90 text-2xl leading-relaxed font-body">
              Promover os direitos de crianças e adolescentes através de
              formações, assessorias e qualificação dos profissionais do Sistema
              de Garantia de Direitos da Criança e do Adolescente e da
              comunidade em geral.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4 text-(--artigo227-blue)">
              <Mountain size={76} strokeWidth={2.2} />
            </div>
            <h3 className="text-4xl font-display font-bold mb-3">Visão:</h3>
            <p className="text-text-main/90 text-2xl leading-relaxed font-body">
              Ser referência na prestação de serviços e produtos relativos aos
              direitos de crianças e adolescentes no âmbito local, regional e
              nacional entre os profissionais do Sistema de Garantia de
              Direitos.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4 text-(--artigo227-yellow)">
              <ShieldCheck size={76} strokeWidth={2.2} />
            </div>
            <h3 className="text-4xl font-display font-bold mb-3">Valores:</h3>
            <ul className="text-text-main/90 text-2xl leading-relaxed font-body space-y-1">
              <li>Integridade;</li>
              <li>Solidariedade;</li>
              <li>Democracia;</li>
              <li>Proteção Integral;</li>
              <li>Equidade.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
