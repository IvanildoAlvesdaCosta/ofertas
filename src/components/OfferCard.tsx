import React from 'react';

interface OfferProps {
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
  link: string;
}

const OfferCard: React.FC<OfferProps> = ({ title, description, price, oldPrice, discount, image, link }) => {
  return (
    <div className="glass overflow-hidden flex flex-col transition-all hover:translate-y-[-8px]">
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-all hover:scale-110" />
        <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
          {discount}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-70 flex-1">{description}</p>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-sm opacity-50 line-through">{oldPrice}</span>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary-hover text-center py-3 rounded-xl font-bold transition-all mt-2"
        >
          Ver Preço na Amazon
        </a>
      </div>
    </div>
  );
};

export default OfferCard;
