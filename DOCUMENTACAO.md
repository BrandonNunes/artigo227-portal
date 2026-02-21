# 🎯 Coletivo Artigo 227 - Site Institucional

Um site moderno, responsivo e componentizado para promover os direitos das crianças e adolescentes brasileiros, implementado com Next.js 16 e Tailwind CSS 4.

## ✨ Características

- ✅ **Header Fixo e Responsivo** - Navegação consistente em todas as páginas
- ✅ **Componentes Reutilizáveis** - Button, Card, Section, SectionHero
- ✅ **Design System com Tailwind** - Cores e tipografia customizadas
- ✅ **Animações Suaves** - Transições e efeitos visuais
- ✅ **Totalmente Responsivo** - Desktop, tablet e mobile
- ✅ **6 Páginas Principais** - Home, Quem Somos, Eixos, Projetos, Publicações, Parcerias

## 📁 Estrutura do Projeto

```
artigo227-site/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx          # Layout geral com Header
│   │   ├── page.tsx            # Página Home
│   │   ├── quem-somos/page.tsx # Timeline e Time
│   │   ├── eixos/page.tsx      # Eixos de atuação
│   │   ├── projetos/page.tsx   # Grid de projetos
│   │   ├── publicacoes/page.tsx # Biblioteca com filtros
│   │   └── parcerias/page.tsx  # Parceiros e contato
│   └── globals.css             # Estilos globais
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Componente Header reutilizável
│   │   ├── Button.tsx          # Botão com variantes
│   │   └── index.ts            # Card, Section, SectionHero
│   └── data/                   # (Reservado para dados futuros)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🚀 Como Usar

### Instalação

```bash
cd artigo227-site
npm install
```

### Development

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 🎨 Sistema de Cores

```css
--color-primary: #0056d2 /* Azul principal */ --color-secondary: #ff6b00
  /* Laranja */ --color-accent: #ffd600 /* Amarelo */ --color-surface: #f4f6f8
  /* Cinza claro */ --color-text-main: #1a1a1a /* Texto escuro */
  --color-text-muted: #637381 /* Texto secundário */;
```

## 📝 Componentes Principais

### Button

```tsx
<Button variant="primary" size="lg">Junte-se a nós</Button>
<Button variant="outline" size="md">Saiba Mais</Button>
```

Variantes: `primary`, `secondary`, `outline`
Tamanhos: `sm`, `md`, `lg`

### Section

```tsx
<Section bg="white" py="py-20">
  <p>Conteúdo aqui</p>
</Section>
```

Background: `white`, `surface`, `primary`, `dark`

### SectionHero

```tsx
<SectionHero
  label="Nossa Estrutura"
  title="Quem Somos"
  subtitle="Descrição aqui"
/>
```

### Card

```tsx
<Card hover className="custom-class">
  Conteúdo do card
</Card>
```

## 🔧 Personalizações

### Cores

Edite em `app/globals.css`:

```css
:root {
  --color-primary: #SEU_COR;
}
```

### Fontes

Já configuradas no CSS:

- Display: Space Grotesk (títulos)
- Body: DM Sans (textos)

### Breakpoints Tailwind

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📱 Responsive Design

O site é totalmente responsivo com:

- Menu mobile automático no Header
- Grid adaptável em todas as seções
- Imagens otimizadas com object-fit

## 🔗 Navegação

- `/` - Home / Manifesto
- `/quem-somos` - Estrutura e time
- `/eixos` - Eixos de atuação
- `/projetos` - Projetos em andamento
- `/publicacoes` - Biblioteca de conteúdo
- `/parcerias` - Parceiros e contato

## 🎯 Boas Práticas Implementadas

✅ Code splitting com componentes
✅ Client Components apenas quando necessário
✅ Server Components para conteúdo estático
✅ Lazy loading de imagens
✅ Semantic HTML
✅ Acessibilidade ARIA
✅ Mobile-first approach
✅ CSS-in-JS com Tailwind

## 📚 Stack Tecnológico

- **Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **CSS**: Tailwind CSS 4
- **Linguagem**: TypeScript 5
- **Linting**: ESLint 9

## 🚦 Próximos Passos

- [ ] Integrar formulário de contato com backend
- [ ] Adicionar blog/notícias
- [ ] Sistema de newsletter
- [ ] Dashboard de estatísticas
- [ ] Dark mode
- [ ] Internacionalização (i18n)
- [ ] SEO avançado

## 📞 Suporte

Para dúvidas sobre a estrutura ou componentes, consulte a documentação de cada arquivo.

---

**Desenvolvido com ❤️ para o Coletivo Artigo 227**
