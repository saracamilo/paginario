import React from 'react';

function SearchBarAndFilters() {
  return (
    <section className="search-and-filters">
      <div className="search-bar-container">
        <input type="text" placeholder="Ex: Orgulho e Preconceito, Jane Austen ou Romance histórico" className="search-input" />
        <button className="search-button">🔍 Buscar</button>
      </div>
      <div className="filters-container">
        <button className="filter-button">Gênero</button>
        <button className="filter-button">Formato</button>
        <button className="filter-button">Data</button>
        <button className="filter-button">Nível de leitura</button>
      </div>
    </section>
  );
}

export default SearchBarAndFilters;