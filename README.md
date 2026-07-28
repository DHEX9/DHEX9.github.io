# Daniel — Portfólio (React + Vite)

Portfólio pessoal migrado de um único arquivo HTML para uma arquitetura padrão React + Vite.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  main.jsx              # ponto de entrada do React
  App.jsx                # monta o layout e o AppProvider
  index.css               # tokens (cores, fontes) e todos os estilos
  context/
    AppContext.jsx        # idioma, tema e toast de e-mail copiado
  hooks/
    useReveal.js           # animação de entrada ao rolar a página
    useScrollSpy.js         # destaca o link ativo na navbar
  data/
    translations.js        # textos em PT e EN
    projects.js             # dados dos projetos (cards + modal)
    skills.js                # tecnologias listadas em "Sobre"
    config.js                 # e-mail e links sociais
  components/
    Navbar.jsx
    Hero.jsx
    ChipSvg.jsx              # ilustração do chip no hero
    About.jsx
    Projects.jsx
    ProjectCard.jsx
    ProjectModal.jsx
    Contact.jsx
    Footer.jsx
    EmailToast.jsx
```

## Editar conteúdo

- **Textos (PT/EN):** `src/data/translations.js`
- **Projetos:** `src/data/projects.js`
- **Tecnologias:** `src/data/skills.js`
- **E-mail e redes sociais:** `src/data/config.js`
- **Cores e fontes:** variáveis no topo de `src/index.css`
