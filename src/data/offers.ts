import { productLinks } from './links';

const getLink = (id: string) => {
  const item = productLinks.find(p => p.id === id);
  return item ? item.link : "#";
};

export const offers = [
  {
    id: "Kit Rock Faca + Tabua Doma Crioula 8 Churrasco Cozinha Acdc",
    title: "Kit Rock Faca + Tábua Doma Crioula 8",
    description: "Kit premium para churrasco e cozinha. Tábua Doma Crioula e faca temática Rock Ac/dc de alta performance.",
    price: "R$ 551,91",
    oldPrice: "R$ 599,90",
    discount: "7% OFF",
    image: "/images/Kit Rock Faca + Tabua Doma Crioula 8 Churrasco Cozinha Acdc.webp",
    link: getLink("Kit Rock Faca + Tabua Doma Crioula 8 Churrasco Cozinha Acdc")
  },
  {
    id: "Faca Artesanal 10 Doma Crioula Cabo Escorpião Luxo Oferta",
    title: "Faca Artesanal 10 Cabo Escorpião Luxo",
    description: "Faca artesanal de 10 polegadas com cabo em resina translúcida e escorpião. Lâmina liso em aço inox de 25cm.",
    price: "R$ 499,00",
    oldPrice: "R$ 549,00",
    discount: "9% OFF",
    image: "/images/Faca Artesanal 10 Doma Crioula Cabo Escorpião Luxo Oferta.jpg",
    link: getLink("Faca Artesanal 10 Doma Crioula Cabo Escorpião Luxo Oferta")
  },
  {
    id: "Faca Picanheira 8 Doma Crioula Sniper Dourada",
    title: "Faca Picanheira 8 Sniper Dourada",
    description: "Faca picanheira temática Sniper Dourada de 8 polegadas. Edição especial para churrasco premium.",
    price: "R$ 359,00",
    oldPrice: "R$ 399,00",
    discount: "10% OFF",
    image: "/images/Faca Picanheira 8 Doma Crioula Sniper Dourada.webp",
    link: getLink("Faca Picanheira 8 Doma Crioula Sniper Dourada")
  }
];
