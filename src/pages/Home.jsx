// ===== HOME PAGE =====
// Landing page with hero, features, and featured cars

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import './Home.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/cars?search=${encodeURIComponent(searchQuery)}`);
  };

  // Show only 4 featured cars
  const featuredCars = cars.filter((c) => c.available).slice(0, 4);

  return (
    <main className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__blur-1" />
          <div className="hero__blur-2" />
          <div className="hero__grid" />
        </div>

        <div className="hero__content container">
          <div className="hero__badge">✦ Premium Car Rental</div>
          <h1 className="hero__title">
            Drive Your <em>Dream</em>
            <br />Into Reality
          </h1>
          <p className="hero__subtitle">
            Discover curated luxury vehicles for every journey. From mountain escapes to city adventures, find your perfect drive.
          </p>

          {/* Search Bar */}
          <form className="hero__search" onSubmit={handleSearch}>
            <div className="hero__search-inner">
              <span className="hero__search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search by car name, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hero__search-input"
              />
              <button type="submit" className="hero__search-btn">
                Search Cars
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="hero__stats">
            {[
              { num: '200+', label: 'Premium Cars' },
              { num: '50+', label: 'Cities' },
              { num: '10K+', label: 'Happy Drivers' },
              { num: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="hero__stat">
                <strong>{stat.num}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85"
            alt="Luxury sports car"
            className="hero__image"
          />
          <div className="hero__image-overlay" />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <div className="container">
          <p className="section-tag">Simple Process</p>
          <h2 className="section-title">How Drivana Works</h2>
          <p className="section-subtitle">Get behind the wheel in three simple steps</p>

          <div className="steps">
            {[
              {
                icon: '🔍',
                step: '01',
                title: 'Choose Your Car',
                desc: 'Browse our curated fleet of premium vehicles. Filter by type, location, or price to find your ideal match.',
              },
              {
                icon: '📋',
                step: '02',
                title: 'Book Instantly',
                desc: 'Fill in your dates and personal details. Get instant confirmation with no hidden fees.',
              },
              {
                icon: '🚗',
                step: '03',
                title: 'Hit the Road',
                desc: 'Pick up your car from a convenient location and start your adventure with full insurance coverage.',
              },
            ].map((item) => (
              <div key={item.step} className="step">
                <div className="step__number">{item.step}</div>
                <div className="step__icon">{item.icon}</div>
                <h3 className="step__title">{item.title}</h3>
                <p className="step__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED CARS ===== */}
      <section className="featured">
        <div className="container">
          <p className="section-tag">Top Picks</p>
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="section-subtitle">Hand-selected by our experts for the ultimate experience</p>

          <div className="cars-grid">
            {featuredCars.map((car, i) => (
              <div key={car.id} style={{ animationDelay: `${i * 0.1}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <div className="featured__cta">
            <Link to="/cars" className="btn-primary">
              View All Cars →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="why-us">
        <div className="container">
          <div className="why-us__inner">
            <div className="why-us__text">
              <p className="section-tag">Why Drivana</p>
              <h2 className="section-title">The Premium Choice for Discerning Travellers</h2>
              <p className="why-us__desc">
                We don't just rent cars — we craft experiences. Every vehicle in our fleet is meticulously maintained, fully insured, and comes with our 24/7 concierge support.
              </p>

              <ul className="why-us__list">
                {[
                  '✓ No hidden fees or surprise charges',
                  '✓ Free cancellation up to 48 hours before pickup',
                  '✓ 24/7 roadside assistance worldwide',
                  '✓ Fully insured & sanitized vehicles',
                  '✓ Flexible pickup & drop-off locations',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>

            <div className="why-us__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80"
                alt="Luxury car interior"
                className="why-us__image"
              />
              <div className="why-us__badge-float">
                <strong>4.9/5</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__title">Ready for Your Next Adventure?</h2>
          <p className="cta-banner__subtitle">Join 10,000+ travellers who trust Drivana for their journeys.</p>
          <Link to="/cars" className="btn-primary">
            Explore Our Fleet ✦
          </Link>
        </div>
      </section>
    </main>
  );
}
