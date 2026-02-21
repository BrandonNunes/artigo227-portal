export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logos/logo-artigobranco.png"
                alt="artigo-227-logo"
                className="h-16 w-auto "
              />
            </div>
            <p className="font-body text-sm text-white/70">
              Defendendo os direitos de crianças e adolescentes brasileiros.
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white">
              Contato
            </h4>
            <div className="space-y-4 mb-6">
              <p className="font-body text-sm text-white/70 flex items-start gap-2">
                <span className="material-symbols-outlined text-base mt-0.5 text-accent">
                  mail
                </span>
                <a
                  href="mailto:contato@artigo227.org.br"
                  className="hover:text-white transition-colors"
                >
                  contato@artigo227.org.br
                </a>
              </p>
              <p className="font-body text-sm text-white/70 flex items-start gap-2">
                <span className="material-symbols-outlined text-base mt-0.5 text-accent">
                  phone
                </span>
                <a
                  href="tel:+551133334444"
                  className="hover:text-white transition-colors"
                >
                  (11) 3333-4444
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent transition-colors rounded-sm flex items-center justify-center"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-base">
                  link
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent transition-colors rounded-sm flex items-center justify-center"
                aria-label="Twitter"
              >
                <span className="material-symbols-outlined text-base">
                  link
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent transition-colors rounded-sm flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-base">
                  link
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-body text-sm text-white/70">
              © {new Date().getFullYear()} Coletivo Artigo 227. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="font-body text-xs text-white/70 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="font-body text-xs text-white/70 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="font-body text-xs text-white/70 hover:text-white transition-colors"
              >
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
