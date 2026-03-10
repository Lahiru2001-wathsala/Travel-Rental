// ===== CAR CARD COMPONENT =====
// Reusable card for displaying car summary info

import { Link } from 'react-router-dom';
import './CarCard.css';

export default function CarCard({ car }) {
  return (
    <article className="car-card">
      {/* Image */}
      <div className="car-card__image-wrap">
        <img
          src={car.image}
          alt={car.name}
          className="car-card__image"
          loading="lazy"
        />
        <span className="car-card__category">{car.category}</span>
        {!car.available && (
          <div className="car-card__unavailable">Unavailable</div>
        )}
      </div>

      {/* Body */}
      <div className="car-card__body">
        <div className="car-card__header">
          <h3 className="car-card__name">{car.name}</h3>
          <div className="car-card__rating">
            <span className="car-card__star">★</span>
            <span>{car.rating}</span>
            <span className="car-card__reviews">({car.reviews})</span>
          </div>
        </div>

        <p className="car-card__desc">{car.description.slice(0, 90)}…</p>

        {/* Specs */}
        <div className="car-card__specs">
          <span className="car-card__spec">
            <span className="car-card__spec-icon">👤</span>
            {car.seats} seats
          </span>
          <span className="car-card__spec">
            <span className="car-card__spec-icon">⚙️</span>
            {car.transmission}
          </span>
          <span className="car-card__spec">
            <span className="car-card__spec-icon">⛽</span>
            {car.fuel}
          </span>
        </div>

        {/* Footer */}
        <div className="car-card__footer">
          <div className="car-card__price">
            <span className="car-card__price-amount">${car.price}</span>
            <span className="car-card__price-unit"> / day</span>
          </div>
          <Link
            to={`/cars/${car.id}`}
            className={`car-card__btn ${!car.available ? 'car-card__btn--disabled' : ''}`}
            onClick={(e) => !car.available && e.preventDefault()}
          >
            {car.available ? 'View Details' : 'Unavailable'}
          </Link>
        </div>
      </div>
    </article>
  );
}
