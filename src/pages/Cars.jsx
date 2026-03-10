// ===== CARS LISTING PAGE =====
// Browse, search, and filter all available cars

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cars, categories } from '../data/cars';
import CarCard from '../components/CarCard';
import './Cars.css';

export default function Cars() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Update search from URL params
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) setSearch(urlSearch);
  }, [searchParams]);

  // Filter & sort cars
  const filteredCars = cars
    .filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.category.toLowerCase().includes(search.toLowerCase()) ||
        car.location.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === 'All' || car.category === activeCategory;
      const matchesAvailability = showAvailableOnly ? car.available : true;
      return matchesSearch && matchesCategory && matchesAvailability;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <main className="cars-page">
      {/* Page Header */}
      <section className="cars-header">
        <div className="container">
          <h1 className="cars-header__title">Our Fleet</h1>
          <p className="cars-header__subtitle">
            {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''} available
          </p>
        </div>
      </section>

      <div className="container">
        {/* Search & Filters */}
        <div className="cars-filters">
          {/* Search input */}
          <div className="cars-search">
            <span className="cars-search__icon">🔍</span>
            <input
              type="text"
              placeholder="Search cars, categories, locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="cars-search__input"
            />
            {search && (
              <button
                className="cars-search__clear"
                onClick={() => setSearch('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort & Availability */}
          <div className="cars-controls">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cars-sort"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>

            <label className="cars-toggle">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
              />
              <span>Available only</span>
            </label>
          </div>
        </div>

        {/* Category Pills */}
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${activeCategory === cat ? 'category-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredCars.length > 0 ? (
          <div className="cars-results">
            {filteredCars.map((car, i) => (
              <div key={car.id} style={{ animationDelay: `${i * 0.07}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
        ) : (
          <div className="cars-empty">
            <div className="cars-empty__icon">🚗</div>
            <h3>No cars found</h3>
            <p>Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
                setShowAvailableOnly(false);
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
