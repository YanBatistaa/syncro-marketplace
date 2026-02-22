# ⚡ Syncro Marketplace

Biblioteca de templates para sites e landing pages. Desenvolvida para leads explorarem, escolherem um template e entrarem em contato via WhatsApp.

## 🚀 Como usar

1. Clone o repositório
2. Abra `index.html` no navegador (ou use Live Server no VSCode)
3. Configure o número do WhatsApp em `js/app.js` na variável `WHATSAPP_NUMBER`
4. Adicione/edite templates em `js/templates.js`

## 📁 Estrutura

```
syncro-marketplace/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js        # Lógica principal (filtros, modal, busca)
│   └── templates.js  # Dados dos templates (edite aqui para adicionar novos)
└── README.md
```

## ➕ Adicionando um novo template

Edite `js/templates.js` e adicione um objeto:

```js
{
  id: 13,
  title: "Nome do Template",
  category: "Categoria",
  tag: "infoprodutor", // infoprodutor | arquitetura | energia-solar | framer
  desc: "Descrição curta do template.",
  pages: "1 página",
  thumb: "URL_DA_IMAGEM_DE_CAPA",
  previewUrl: "URL_DO_PREVIEW_OU_FIGMA_EMBED"
}
```

## 🎨 Tema

- Dark blue: `#050d1a` (base), `#2563eb` (accent)
- Fonte: Inter (Google Fonts)
- Totalmente responsivo

## 📱 Funcionalidades

- ✅ Filtro por nicho (Infoprodutor, Arquitetura, Energia Solar, Framer)
- ✅ Busca em tempo real
- ✅ Preview via iframe com modal fullscreen
- ✅ Toggle de dispositivo (Desktop / Tablet / Mobile)
- ✅ CTA para WhatsApp com mensagem pré-preenchida
- ✅ Aba Framer com templates gratuitos (crédito ao Framer)
