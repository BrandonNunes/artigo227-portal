"use client";

import { Button } from "@/src/components/Button";
import { Section, SectionHero } from "@/src/components/index";
import { useState } from "react";

const publications = [
  {
    title: "Desigualdade na Educação Infantil",
    category: "Relatórios Técnicos",
    type: "PDF",
    size: "2.4 MB",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAIE7UGBisES3Yr9yohhKYyDsYhnoLDTwtMlj_7wOd_gTlPwTHYAqUpZ9fmACyLMlcNgnzoh6FXKKuq500KKsfmIkKwv8M6V5zeE5O3GNHO3PkDByQyu5u1thPuD8FAQGwRYZSVEx-5AzJLH9oI5K5BfTyZ9v1uLEJ3S9mCh4n13Q6_5Uxg82Oz8-_RWsuueBiJlnuL3j0Q_vUDrQYFP-vJZ7oH1WLG48MB1KQDbzpWIcEHZIuSScdlckEJAAi75MEyggZdAsp5nWw",
  },
  {
    title: "Guia de Direitos Constitucionais",
    category: "Guias Educativos",
    type: "PDF",
    size: "1.8 MB",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkpTyygbQlqWjoI-Ym71FnSf7a-TT89vdQwfZVVGjqsshd8RzMxHKiSW1g3XxBrG1i0Z7kaeEct-73-SWvsQd9jSdhsYuuxvomOHSsTsFKqh7Rv-Qi9n16NOePlDjBF3jkY-PqbEIkidGJu0aphzb3aNr4kr1zE2EalF2iNWABmZF15Abky4hhoHT2k_qX5rPcl6hhXmRJNRkkH71CU1OeA71S2que2nrP3_3AALtvoK2d92YuVrEmQ2lZOAvf4w0MhXb6tcvHGsiN",
  },
  {
    title: "Proteção Infantil - Relatório 2024",
    category: "Relatórios Técnicos",
    type: "PDF",
    size: "3.2 MB",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2SgZtPpa89CTjy8NlbS_8rQLSZdIOkMpyEb37c4ehyc_oqjmFhv7UbzsIyMhoyPLDrzUSPn14bE2Evr3SvOREJxzaglRp9mZy3RBzOzJwK1vK3FZVbnPTp24UOTSDK6O-Aj34imp3HZPyYi-0lqmpMjfOVF0Op5Q7QxLXMT2ASGYl5HrVSqM7tl5LzmYdKwYLVTzrI5szPbOE7twNAYtax3H4L7cDNlkNLKpcxpbsLoVmSzpK38w3v4BmPSgpo0HAHZsAg1nV3kF9",
  },
];

export default function Publicacoes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Relatórios Técnicos",
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["Educação"]);

  const filtered = publications.filter(
    (pub) =>
      pub.category === selectedCategory &&
      (searchTerm === "" ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <>
      {/* Hero Section */}
      <Section py="py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-secondary"></span>
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm">
              Biblioteca &amp; Loja
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 tracking-tight leading-[1.1]">
            Produtos &amp; Publicações
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Acesse nossos relatórios, guias educativos e recursos que apoiam a
            defesa dos direitos das crianças.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section py="py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 space-y-10">
            {/* Search */}
            <div className="relative group">
              <input
                className="w-full bg-transparent border-b-2 border-primary/20 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary font-display font-medium transition-colors pl-0 pr-8"
                placeholder="Buscar por palavra-chave..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-0 top-3 text-primary pointer-events-none">
                search
              </span>
            </div>

            {/* Categories Filter */}
            <div>
              <h3 className="font-display font-bold text-lg text-primary uppercase mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">
                  filter_list
                </span>
                Categorias
              </h3>
              <div className="space-y-3">
                {[
                  "Relatórios Técnicos",
                  "Guias Educativos",
                  "Produtos (Loja)",
                ].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center">
                      <input
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="peer h-5 w-5 appearance-none border-2 border-text-muted rounded-sm checked:bg-primary checked:border-primary transition-all cursor-pointer"
                        type="radio"
                      />
                      <span className="material-symbols-outlined absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-sm left-[2px]">
                        check
                      </span>
                    </div>
                    <span className="text-text-muted group-hover:text-primary font-medium transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Topics Filter */}
            <div>
              <h3 className="font-display font-bold text-lg text-primary uppercase mb-5">
                Temas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Saúde",
                  "Educação",
                  "Proteção",
                  "Orçamento",
                  "Legislação",
                ].map((topic) => (
                  <button
                    key={topic}
                    onClick={() =>
                      setSelectedTopics((prev) =>
                        prev.includes(topic)
                          ? prev.filter((t) => t !== topic)
                          : [...prev, topic],
                      )
                    }
                    className={`px-3 py-1.5 border text-sm font-medium rounded-sm transition-colors ${
                      selectedTopics.includes(topic)
                        ? "border-primary bg-primary text-white"
                        : "border-primary/20 hover:border-primary text-text-muted hover:text-primary bg-white"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Box */}
            <div className="bg-primary p-6 text-white relative overflow-hidden rounded-sm shadow-hard">
              <div className="absolute -right-4 -top-4 text-primary/20 transform rotate-12">
                <span className="material-symbols-outlined text-[120px]">
                  volunteer_activism
                </span>
              </div>
              <h4 className="font-display font-bold text-xl mb-2 relative z-10">
                Doe para o Coletivo
              </h4>
              <p className="text-sm opacity-90 mb-4 relative z-10 leading-relaxed">
                Sua contribuição fortalece a defesa dos direitos das crianças.
              </p>
              <button className="w-full bg-accent text-primary font-display font-bold text-sm uppercase py-2.5 px-4 hover:bg-white transition-colors relative z-10 rounded-sm">
                Fazer Doação
              </button>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-8 border-b border-text-muted pb-4">
              <p className="text-text-muted text-sm font-medium">
                <strong className="text-primary">{filtered.length}</strong>{" "}
                resultados encontrados
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-display font-bold uppercase text-text-muted">
                  Ordenar por:
                </span>
                <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer py-0 pl-2 pr-8">
                  <option>Mais recentes</option>
                  <option>Mais baixados</option>
                  <option>Nome (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((pub, idx) => (
                <div
                  key={idx}
                  className="group folder-card relative flex flex-col h-full"
                >
                  {/* Folder Tab */}
                  <div className="h-8 w-32 bg-primary clip-triangle-tl p-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {pub.category.split(" ")[0]}
                    </span>
                  </div>

                  {/* Main Body */}
                  <div className="bg-white border-2 border-primary p-5 flex flex-col flex-1 relative rounded-b-sm rounded-tr-sm shadow-hard transition-all group-hover:-translate-y-1 group-hover:shadow-hard-orange">
                    {/* Corner Fold */}
                    <div className="absolute -top-[2px] -right-[2px] w-12 h-12 bg-secondary rounded-bl-sm shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg transform rotate-45">
                        download
                      </span>
                    </div>

                    {/* Image */}
                    <div className="mb-4 relative overflow-hidden h-40 bg-text-muted border border-text-muted group-hover:border-primary/20 transition-colors">
                      <img
                        alt={pub.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        src={pub.image}
                      />
                      <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-xs font-bold text-primary shadow-sm">
                        {pub.type} • {pub.size}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-text-main leading-tight mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-text-muted text-sm leading-relaxed flex-1">
                      Publicação de referência.
                    </p>

                    {/* Download Button */}
                    <button className="mt-4 w-full bg-primary text-white font-display font-bold text-sm py-2.5 hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">
                        download
                      </span>
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section bg="surface" py="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold mb-4">
            Fique atualizado
          </h3>
          <p className="text-text-muted mb-6">
            Receba novos relatórios e publicações direto no seu email.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 border border-primary/20 focus:border-primary focus:outline-none font-body"
            />
            <Button size="md">Contate-nos</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
