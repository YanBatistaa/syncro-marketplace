export type NicheType = 'infoprodutor' | 'arquitetura' | 'energia-solar' | 'ecommerce' | 'saas' | 'institucional'

export type Template = {
  id: string
  title: string
  niche: NicheType
  nicheLabel: string
  thumb: string
  previewUrl: string
}

export const niches: { key: NicheType | 'all'; label: string }[] = [
  { key: 'all',           label: 'Todos' },
  { key: 'infoprodutor',  label: 'Infoprodutor' },
  { key: 'saas',          label: 'SaaS & Tech' },
  { key: 'ecommerce',     label: 'E-commerce' },
  { key: 'arquitetura',   label: 'Arquitetura' },
  { key: 'energia-solar', label: 'Energia Solar' },
  { key: 'institucional', label: 'Institucional' },
]

export const defaultTemplates: Template[] = [
  {
    id: '1',
    title: 'Lançamento Extreme',
    niche: 'infoprodutor',
    nicheLabel: 'Infoprodutor',
    thumb: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '2',
    title: 'Método VSL Pro',
    niche: 'infoprodutor',
    nicheLabel: 'Infoprodutor',
    thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '3',
    title: 'SaaS Convert',
    niche: 'saas',
    nicheLabel: 'SaaS & Tech',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '4',
    title: 'Nexus Startup',
    niche: 'saas',
    nicheLabel: 'SaaS & Tech',
    thumb: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '5',
    title: 'Minimal Store',
    niche: 'ecommerce',
    nicheLabel: 'E-commerce',
    thumb: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '6',
    title: 'Archi Studio Minimal',
    niche: 'arquitetura',
    nicheLabel: 'Arquitetura',
    thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '7',
    title: 'Corporate Build',
    niche: 'arquitetura',
    nicheLabel: 'Arquitetura',
    thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '8',
    title: 'Solar Zone Elite',
    niche: 'energia-solar',
    nicheLabel: 'Energia Solar',
    thumb: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '9',
    title: 'Green Tech LP',
    niche: 'energia-solar',
    nicheLabel: 'Energia Solar',
    thumb: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
  {
    id: '10',
    title: 'Corporate Pro',
    niche: 'institucional',
    nicheLabel: 'Institucional',
    thumb: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=700&q=80',
    previewUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2F',
  },
]
