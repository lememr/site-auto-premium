# Site Auto Premium

Landing page de uma concessionária de carros premium, com destaque para luxo, conforto e performance.

## Funcionalidades
- Hero imersivo com overlay escurecido
- Destaques de serviços
- Galeria de modelos premium com hover zoom
- Seção de depoimentos
- Formulário de contato
- Footer completo
- Responsivo para todos os dispositivos
- Zero dependências externas

## Estrutura de arquivos
- `index.html` — estrutura da página
- `css/style.css` — estilos e animações
- `js/main.js` — scroll effects, mobile nav
- `assets/` — imagens e SVGs
- `.gitignore` — logs, node_modules, .DS_Store

## Como rodar localmente
```bash
cd ~/sites/site-auto-premium
python3 -m http.server 8080
# Acesse http://localhost:8080
```

## Deploy
Via Vercel CLI:
```bash
vercel --token <token> --prod
```

## Tecnologias
HTML5, CSS3 (Grid + Flexbox), Vanilla JS, SVG inline

## Créditos
Design original criado por IA. Site demonstrativo.
