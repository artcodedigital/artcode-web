# ArtCode — Landing page

Site institucional da ArtCode (sites, apps, sistemas sob medida e integração com IA).

**Stack:** Next.js 15 (App Router, `output: 'export'`), React 19, Tailwind CSS 3, [Motion](https://motion.dev) (animações), lucide-react (ícones).

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o export estático em ./out
npm run lint
```

## Estrutura

```
src/
  app/
    layout.tsx        # fontes (Bricolage Grotesque, Manrope, JetBrains Mono), metadata, Header/Footer
    page.tsx          # composição das seções
    globals.css       # tokens de cor, utilitários (.card, .glass, .btn-primary...), keyframes
  data/
    content.ts        # TODO o conteúdo editável: contato, nav, serviços, processo, portfólio, stats, depoimentos, FAQ
  components/
    Header/  Footer/
    sections/         # Hero, HeroMock, TechMarquee, Services, Process, Portfolio, Stats, Testimonials, FAQ, Contact
    ui/               # Reveal (scroll reveal), SpotlightCard, Magnetic, SectionHeading, Logo
```

## Editando conteúdo

Quase tudo que é texto fica em `src/data/content.ts`:

- `CONTACT` — telefone, WhatsApp, e-mail, LinkedIn, cidade.
- `PROJECTS` — cases do portfólio (nome, categoria, resumo, resultado, stack). Os previews são desenhados em CSS
  (`mock: 'browser' | 'phone' | 'dashboard'`, `hue` define a cor). Para usar prints reais, troque o mock por uma
  imagem em `Portfolio.tsx`.
- `TESTIMONIALS`, `FAQ`, `STATS`, `SERVICES`, `PROCESS`, `TECH_STACK`.

O formulário de contato não tem backend: ele monta a mensagem e abre o WhatsApp com o texto pronto.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que builda a imagem Docker (export estático servido por Nginx) na VPS.
