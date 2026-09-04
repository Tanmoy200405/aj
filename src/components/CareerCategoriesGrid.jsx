import React from "react";

const categories = [
  { name: "TECHNOLOGY", bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
  { name: "MEDICINE", bg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { name: "DESIGN", bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80" },
  { name: "BUSINESS", bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
  { name: "SCIENCE", bg: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" },
  { name: "CREATIVE", bg: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=600&q=80" },
  { name: "LAW", bg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80" },
  { name: "FINANCE", bg: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80" },
];

const CareerCategoriesGrid = () => {
  return (
    <div 
      className="interactive-ui absolute inset-0 z-30 flex items-center justify-center px-4 md:px-12"
      style={{
        opacity: 0,
        visibility: "hidden",
        transform: `translateY(20px)`
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-32 md:mt-48">
        {categories.map((cat, i) => (
          <div 
            key={i}
            className="group relative h-24 md:h-40 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-ivory/10 hover:border-ivory/40 transition-colors duration-500"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-80"
              style={{ backgroundImage: `url(${cat.bg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <span className="font-sans text-xs md:text-sm tracking-widest uppercase font-semibold text-ivory group-hover:text-gold transition-colors duration-300">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCategoriesGrid;
