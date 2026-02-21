"use client";

import { Button } from "@/src/components/Button";
import { Section, SectionHero } from "@/src/components/index";
import { useState } from "react";

const partners = [
  {
    name: "UNICEF",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkpTyygbQlqWjoI-Ym71FnSf7a-TT89vdQwfZVVGjqsshd8RzMxHKiSW1g3XxBrG1i0Z7kaeEct-73-SWvsQd9jSdhsYuuxvomOHSsTsFKqh7Rv-Qi9n16NOePlDjBF3jkY-PqbEIkidGJu0aphzb3aNr4kr1zE2EalF2iNWABmZF15Abky4hhoHT2k_qX5rPcl6hhXmRJNRkkH71CU1OeA71S2que2nrP3_3AALtvoK2d92YuVrEmQ2lZOAvf4w0MhXb6tcvHGsiN",
  },
  {
    name: "Google",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWj-IR82Vj6kFq1DS9xGmiT_7RPQNq4J_aE0IGEfGUuttXX1sWULOGHR3k79A6D8yS_5V2AX22PjmADOa7e_SjkWXjGEncCJU1E2H8qFpBFEklccVdUV63-BblGzwP-1LD0uW7g12VsP_wvdBDSDa1Zmn74Pl4VVqJZeiJgfOwHRR88Y1y85jhvqyN9JrvNr6NEvIfAzqiG6MruMtu70ZuvcQFlo7Q82lWRt0IxiR6qYVlXUGBdqMKTc7OOHaOLaW5nO9v0XspvHD5",
  },
  {
    name: "Save the Children",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5fOkpQDHfME4AUeYt1qC2dADTqvhoSmd9Q-iZ0axygRY8nLwGumxRAbG3WmTbUTcf-6at_LO_Q6EgBV_EPesnoVMJmdAWQa9zHkXH9hXLSpARu9mxxwCuANhkcNbj4QEduQue941eq09KDmXeBDekQ-bpvp8D8Cy9akJhjNrEsfO-pMp2Hv4l2BJcJ8npx7yRckaKiOydOh3lcpMxvChNwfTF8xoUk6mLg7Gtd07KmPKMds_8MPWbtyIWxmYmdwDcXKNmY1q9utGr",
  },
  {
    name: "WWF",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP7VPxyFTnlUhQOFBi6PoM5sDg1OUUGW8LzN1ZSh6ybIpgFLqj6ClgY2zVgh064mE4EVVyR57wbQJaKXrTDcGMZX6pEMXMcABzp1el6218L3Y5H6AbsnXalN0eO8j2GYdUEj17fuLLgJslAVtsqyDRcijDlLIP-OhGLw6Ge3ZFj467c_FIxyw2maMnTmNle8cNcwbTPEnEzeRz76nzXEN5UKEFnf4W-h9bboOByyFbQLgc-oHxCH5hPrIFVjfmJpJ7n38dEhh6Vp_t",
  },
  {
    name: "Ford Foundation",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC___kD-PP0rpOMKOfYAJWv61Ashr269y4ICHOiOGRR7gfzBxTA49fRmNiQQqC7njrDOLJWQ54BzUgkGRG-cNq6Hddn_C-ldZI9MfS1TuoI9soqT-SJ2J2dNzgvCAT18-fDaAji0QuX-q2mPyr0V87XcJDuqlXxUdbR9Q4ZxMKD67z3aRgole7vSXfSGfGOb9i76uKFslLa-41ovrhgv_RWVjobcR1WhU92vf6EJGK3Dv72_r5SMPDpkjGiRaAbFMgqHSfurC1kWm_P",
  },
  {
    name: "Facebook",
    image: "https://via.placeholder.com/120x60?text=Partner",
  },
];

export default function Parcerias() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <Section bg="surface" py="py-20">
        <SectionHero
          label="Conexões"
          title={
            <>
              Parcerias &<br />
              <span className="text-primary">Contato</span>
            </>
          }
          subtitle="Juntos somos mais fortes. Conheça nossas parcerias e entre em contato conosco."
        />
      </Section>

      {/* Partner Logos */}
      <Section bg="white" py="py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Nossos Parceiros
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="partner-logo flex h-32 items-center justify-center border border-transparent p-4 hover:border-gray-100 bg-surface hover:bg-white transition-colors"
            >
              <img
                alt={partner.name}
                className="max-h-12 object-contain"
                src={partner.image}
              />
            </div>
          ))}

          {/* Be a Partner */}
          <div className="flex h-32 items-center justify-center border border-transparent p-4 bg-surface">
            <button className="w-full h-full flex flex-col items-center justify-center gap-2 text-text-muted hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">
                add_circle
              </span>
              <span className="font-display font-bold text-sm uppercase">
                Seja um Parceiro
              </span>
            </button>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-white to-surface relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-white"></div>
      </div>

      {/* Contact Section */}
      <Section bg="surface" py="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-8">
              Entre em Contato
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">Email</h4>
                    <p className="text-text-muted">contato@artigo227.org</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">Telefone</h4>
                    <p className="text-text-muted">(11) 3001-0227</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">place</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">Endereço</h4>
                    <p className="text-text-muted">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-display font-bold text-lg mb-4">
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  {["facebook", "instagram", "linkedin", "twitter"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <span className="material-symbols-outlined">
                          {social}
                        </span>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-hard">
            <h3 className="text-2xl font-display font-bold mb-6">
              Envie uma Mensagem
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-display font-bold mb-2 text-text-main">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:outline-none font-body"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-bold mb-2 text-text-main">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:outline-none font-body"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-bold mb-2 text-text-main">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:outline-none font-body"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-bold mb-2 text-text-main">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:outline-none font-body resize-none"
                ></textarea>
              </div>

              <Button variant="primary" size="md" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="primary" py="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Quer ser nosso parceiro?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Existem diversas formas de colaborar com o Coletivo Artigo 227.
            Vamos conversar!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Conversar com a Gente
          </Button>
        </div>
      </Section>
    </>
  );
}
