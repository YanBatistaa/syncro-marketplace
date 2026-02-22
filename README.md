# ⚡ Syncro Marketplace

Biblioteca de templates para sites e landing pages, feita em **Next.js 14 + TypeScript + Tailwind CSS**.

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## ⚙️ Configuração obrigatória

### 1. WhatsApp
No arquivo `components/PreviewModal.tsx` e `components/Header.tsx` e `components/Footer.tsx`, substitua `55SEU_NUMERO` pelo seu número completo (ex: `5571999999999`).

### 2. Adicionar templates
Edite `data/templates.ts`:

```ts
{
  id: 13,
  title: 'Nome do Template',
  niche: 'infoprodutor', // infoprodutor | arquitetura | energia-solar | framer
  nicheLabel: 'Infoprodutor',
  thumb: 'URL_DA_IMAGEM',
  previewUrl: 'URL_DO_FIGMA_EMBED_OU_PREVIEW',
}
```

## 📁 Estrutura

```
syncro-marketplace/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TemplatesSection.tsx
│   ├── TemplateCard.tsx
│   ├── PreviewModal.tsx
│   └── Footer.tsx
├── data/
│   └── templates.ts    ← edite aqui para adicionar templates
├── tailwind.config.ts
└── package.json
```

## 🌐 Deploy (Vercel)

```bash
npx vercel
```

Ou conecte o repositório diretamente no [vercel.com](https://vercel.com) — deploy automático a cada push.
