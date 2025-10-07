import React from 'react';
import iconPencil from '../assets/icon-pencil.svg';
import iconBook from '../assets/icon-book.svg';
import iconChat from '../assets/icon-chat.svg';

function PopularCategories() {
  const categories = [
    { name: 'Romance', icon: iconPencil },
    { name: 'Fantasia', icon: iconBook },
    { name: 'Não-ficção', icon: iconChat },
    { name: 'Clássicos', icon: iconBook },
  ];

  return (
    <section className="popular-categories-section">
      <h3>Categorias Populares</h3>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.icon} alt={`Ícone de ${category.name}`} className="category-icon" />
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;