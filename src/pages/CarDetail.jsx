// ===== CAR DETAILS PAGE =====
// Full information page for a single car

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';
import './CarDetail.css';

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === parseInt(id));

  const [activeImage, setActiveImage] = useState(0);

  // Handle not found
  if (!car) {
    return (
      <div className="not-found">
        <h2>Car not found</h2>
        <Link to="/cars" className="btn-primary">Browse All Cars</Link>
      </div>
    );
  }

  // Related cars (same category, excluding current)
  const related = cars.filter((c) => c.category === car.category && c.id !== car.id).slice(0, 3);

  return (
    <main className="car-detail">
      <div className="container">
        {/* Back button */}
        <button className="car-detail__back" onClick={() => navigate(-1)}>
          ← Back to Fleet
        </button>

        <div className="car-detail__grid">
          {/* Left: Images */}
          <div className="car-detail__images">
            <div className="car-detail__main-image">
              <img
                src={car.images[activeImage]}
                alt={car.name}
                className="car-detail__img"
              />
              {!car.available && (
                <div className="car-detail__unavailable">Unavailable</div>
              )}
            </div>
            <div className="car-detail__thumbnails">
              {car.images.map((img, i) => (
                <button
                  key={i}
                  className={`car-detail__thumb ${activeImage === i ? 'car-detail__thumb--active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`${car.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="car-detail__info">
            <div className="car-detail__tags">
              <span className="car-detail__category">{car.category}</span>
              <span className={`car-detail__status ${car.available ? 'car-detail__status--available' : 'car-detail__status--unavailable'}`}>
                {car.available ? '● Available' : '● Unavailable'}
              </span>
            </div>

            <h1 className="car-detail__name">{car.name}</h1>

            <div className="car-detail__rating">
              <span className="car-detail__stars">{'★'.repeat(Math.round(car.rating))}</span>
              <span className="car-detail__rating-num">{car.rating}</span>
              <span className="car-detail__rating-count">({car.reviews} reviews)</span>
            </div>

            <p className="car-detail__desc">{car.description}</p>

            {/* Specs */}
            <div className="car-detail__specs">
              {[
                { label: 'Seats', value: `${car.seats} passengers`, icon: '👤' },
                { label: 'Transmission', value: car.transmission, icon: '⚙️' },
                { label: 'Fuel', value: car.fuel, icon: '⛽' },
                { label: 'Mileage', value: car.mileage, icon: '🛣️' },
              ].map((spec) => (
                <div key={spec.label} className="car-detail__spec">
                  <span className="car-detail__spec-icon">{spec.icon}</span>
                  <div>
                    <span className="car-detail__spec-label">{spec.label}</span>
                    <span className="car-detail__spec-value">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="car-detail__features">
              <h3 className="car-detail__features-title">Included Features</h3>
              <div className="car-detail__features-grid">
                {car.features.map((feature) => (
                  <span key={feature} className="car-detail__feature">
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <p className="car-detail__location">📍 {car.location}</p>

            {/* Pricing & CTA */}
            <div className="car-detail__booking">
              <div className="car-detail__price">
                <span className="car-detail__price-amount">${car.price}</span>
                <span className="car-detail__price-unit">per day</span>
              </div>
              {car.available ? (
                <Link to={`/booking/${car.id}`} className="btn-primary car-detail__cta">
                  Book This Car →
                </Link>
              ) : (
                <button className="btn-primary car-detail__cta car-detail__cta--disabled" disabled>
                  Currently Unavailable
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Related Cars */}
        {related.length > 0 && (
          <section className="car-detail__related">
            <h2 className="car-detail__related-title">Similar Vehicles</h2>
            <div className="car-detail__related-grid">
              {related.map((relCar) => (
                <Link key={relCar.id} to={`/cars/${relCar.id}`} className="related-card">
                  <img src={relCar.image} alt={relCar.name} className="related-card__image" />
                  <div className="related-card__body">
                    <h4>{relCar.name}</h4>
                    <span>${relCar.price}/day</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
