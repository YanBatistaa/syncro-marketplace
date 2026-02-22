export type Template = {
  id: number
  title: string
  niche: 'infoprodutor' | 'arquitetura' | 'energia-solar' | 'framer'
  nicheLabel: string
  thumb: string
  previewUrl: string
  isFramer?: boolean
}

export const templates: Template[] = [
  {
    id: 1,
    title: 'Lançamento Pro',
    niche: 'infoprodutor',
    nicheLabel: 'Infoprodutor',
    thumb: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 2,
    title: 'Método Premium',
    niche: 'infoprodutor',
    nicheLabel: 'Infoprodutor',
    thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 3,
    title: 'Curso Digital',
    niche: 'infoprodutor',
    nicheLabel: 'Infoprodutor',
    thumb: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 4,
    title: 'Estúdio Archi',
    niche: 'arquitetura',
    nicheLabel: 'Arquitetura',
    thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 5,
    title: 'Residência Design',
    niche: 'arquitetura',
    nicheLabel: 'Arquitetura',
    thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 6,
    title: 'Corporativo Urbano',
    niche: 'arquitetura',
    nicheLabel: 'Arquitetura',
    thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 7,
    title: 'Solar Zone',
    niche: 'energia-solar',
    nicheLabel: 'Energia Solar',
    thumb: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 8,
    title: 'Energia Limpa',
    niche: 'energia-solar',
    nicheLabel: 'Energia Solar',
    thumb: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 9,
    title: 'Painel Verde',
    niche: 'energia-solar',
    nicheLabel: 'Energia Solar',
    thumb: 'https://images.unsplash.com/photo-1545208011-7c74f67e2f4d?w=700&q=80',
    previewUrl: 'https://www.figma.com/community/',
  },
  {
    id: 10,
    title: 'Luminar Studio',
    niche: 'framer',
    nicheLabel: 'Framer',
    thumb: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=700&q=80',
    previewUrl: 'https://framer.com/marketplace/templates/',
    isFramer: true,
  },
  {
    id: 11,
    title: 'Portfólio Minimal',
    niche: 'framer',
    nicheLabel: 'Framer',
    thumb: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80',
    previewUrl: 'https://framer.com/marketplace/templates/',
    isFramer: true,
  },
  {
    id: 12,
    title: 'SaaS Landing',
    niche: 'framer',
    nicheLabel: 'Framer',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    previewUrl: 'https://framer.com/marketplace/templates/',
    isFramer: true,
  },
]

export const niches = [
  { key: 'all',           label: 'Todos' },
  { key: 'infoprodutor',  label: 'Infoprodutor' },
  { key: 'arquitetura',   label: 'Arquitetura' },
  { key: 'energia-solar', label: 'Energia Solar' },
  { key: 'framer',        label: 'Framer' },
]
