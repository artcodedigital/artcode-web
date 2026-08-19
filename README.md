# ArtCode — Landing page

Site institucional da ArtCode (sites, apps, sistemas sob medida e integração com IA).

**Stack:** Next.js 15 (App Router, `output: 'export'`), React 19, Tailwind CSS 3, [GSAP](https://gsap.com) + ScrollTrigger + SplitText (animações guiadas por scroll), [Lenis](https://lenis.darkroom.engineering) (scroll suave), lucide-react (ícones).

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
    layout.tsx        # fontes (Bricolage Grotesque, Instrument Serif, JetBrains Mono), metadata, Header/Footer
    page.tsx          # composição das seções
    globals.css       # tokens (papel/tinta/violeta), utilitários (.btn, .label, .serif-i...), grão
  data/
    content.ts        # TODO o conteúdo editável: contato, nav, serviços, processo, portfólio, stats, depoimentos, FAQ
  lib/
    gsap.ts           # registro dos plugins GSAP (ScrollTrigger, SplitText)
  components/
    Header/  Footer/
    motion/
      SmoothScroll.tsx  # Lenis + sync com ScrollTrigger + reveals genéricos ([data-reveal])
    sections/         # Hero, Marquee, Manifesto, Services, Process, Portfolio, Stats, Testimonials, FAQ, Contact
    ui/               # SectionHeading, Logo
```

## Editando conteúdo

Quase tudo que é texto fica em `src/data/content.ts`:

- `CONTACT` — telefone, WhatsApp, e-mail, LinkedIn, cidade.
- `PROJECTS` — cases do portfólio (nome, categoria, resumo, resultado, stack). Os previews são desenhados em CSS
  (`mock: 'browser' | 'phone' | 'dashboard'`, `hue` define a cor). Para usar prints reais, troque o mock por uma
  imagem em `Portfolio.tsx`.
- `TESTIMONIALS`, `FAQ`, `STATS`, `SERVICES`, `PROCESS`, `TECH_STACK`.

O formulário de contato não tem backend: ele monta a mensagem e abre o WhatsApp com o texto pronto.

## Animações

- Qualquer elemento com `data-reveal` entra com fade + slide ao rolar (ver `SmoothScroll.tsx`).
- Efeitos por seção: ∞ que se desenha e gira com o scroll (Hero), marquee que reage à velocidade (Marquee),
  texto revelado palavra a palavra (Manifesto), scroll horizontal pinado no desktop (Services), cards que
  empilham (Process), parallax nos mocks (Portfolio), contadores (Stats), wordmark gigante (Footer).
- Todos respeitam `prefers-reduced-motion`. Estados iniciais são aplicados só via JS: sem JS, tudo fica visível.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que builda a imagem Docker (export estático servido por Nginx) na VPS.
