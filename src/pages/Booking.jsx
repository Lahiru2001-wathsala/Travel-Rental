// ===== BOOKING PAGE =====
// Booking form with car summary and date picker

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import './Booking.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  pickupDate: '',
  returnDate: '',
  pickupLocation: '',
  notes: '',
};

export default function Booking() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!car) {
    return (
      <div className="not-found">
        <h2>Car not found</h2>
        <Link to="/cars" className="btn-primary">Browse Cars</Link>
      </div>
    );
  }

  // Calculate total days & cost
  const today = new Date().toISOString().split('T')[0];
  const days = form.pickupDate && form.returnDate
    ? Math.max(1, Math.ceil(
        (new Date(form.returnDate) - new Date(form.pickupDate)) / (1000 * 60 * 60 * 24)
      ))
    : 0;
  const total = days * car.price;

  // Validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.pickupDate) errs.pickupDate = 'Pickup date is required';
    if (!form.returnDate) errs.returnDate = 'Return date is required';
    if (form.pickupDate && form.returnDate && form.returnDate <= form.pickupDate)
      errs.returnDate = 'Return date must be after pickup date';
    if (!form.pickupLocation) errs.pickupLocation = 'Pickup location is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  // Success state
  if (submitted) {
    return (
      <main className="booking-page">
        <div className="container">
          <div className="booking-success">
            <div className="booking-success__icon">✅</div>
            <h2 className="booking-success__title">Booking Confirmed!</h2>
            <p className="booking-success__msg">
              Thank you, <strong>{form.name}</strong>! Your reservation for the{' '}
              <strong>{car.name}</strong> has been received. A confirmation email
              has been sent to <strong>{form.email}</strong>.
            </p>
            <div className="booking-success__summary">
              <div><span>Car</span><strong>{car.name}</strong></div>
              <div><span>Pickup</span><strong>{form.pickupDate}</strong></div>
              <div><span>Return</span><strong>{form.returnDate}</strong></div>
              <div><span>Duration</span><strong>{days} day{days !== 1 ? 's' : ''}</strong></div>
              <div><span>Total</span><strong>${total}</strong></div>
            </div>
            <Link to="/cars" className="btn-primary">Browse More Cars</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="container">
        <div className="booking-header">
          <Link to={`/cars/${car.id}`} className="booking-back">← Back to car</Link>
          <h1 className="booking-title">Reserve Your Car</h1>
          <p className="booking-subtitle">Complete the form below to secure your booking</p>
        </div>

        <div className="booking-grid">
          {/* Form */}
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            {/* Personal Info */}
            <fieldset className="booking-fieldset">
              <legend className="booking-legend">Personal Information</legend>

              <div className="booking-field">
                <label className="booking-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`booking-input ${errors.name ? 'booking-input--error' : ''}`}
                />
                {errors.name && <span className="booking-error">{errors.name}</span>}
              </div>

              <div className="booking-row">
                <div className="booking-field">
                  <label className="booking-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`booking-input ${errors.email ? 'booking-input--error' : ''}`}
                  />
                  {errors.email && <span className="booking-error">{errors.email}</span>}
                </div>

                <div className="booking-field">
                  <label className="booking-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={`booking-input ${errors.phone ? 'booking-input--error' : ''}`}
                  />
                  {errors.phone && <span className="booking-error">{errors.phone}</span>}
                </div>
              </div>
            </fieldset>

            {/* Booking Dates */}
            <fieldset className="booking-fieldset">
              <legend className="booking-legend">Rental Dates</legend>

              <div className="booking-row">
                <div className="booking-field">
                  <label className="booking-label">Pickup Date *</label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={form.pickupDate}
                    min={today}
                    onChange={handleChange}
                    className={`booking-input ${errors.pickupDate ? 'booking-input--error' : ''}`}
                  />
                  {errors.pickupDate && <span className="booking-error">{errors.pickupDate}</span>}
                </div>

                <div className="booking-field">
                  <label className="booking-label">Return Date *</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={form.returnDate}
                    min={form.pickupDate || today}
                    onChange={handleChange}
                    className={`booking-input ${errors.returnDate ? 'booking-input--error' : ''}`}
                  />
                  {errors.returnDate && <span className="booking-error">{errors.returnDate}</span>}
                </div>
              </div>

              <div className="booking-field">
                <label className="booking-label">Pickup Location *</label>
                <select
                  name="pickupLocation"
                  value={form.pickupLocation}
                  onChange={handleChange}
                  className={`booking-input ${errors.pickupLocation ? 'booking-input--error' : ''}`}
                >
                  <option value="">Select a location</option>
                  {['Los Angeles, CA', 'New York, NY', 'Miami, FL', 'San Francisco, CA', 'Chicago, IL', 'Denver, CO', 'Seattle, WA', 'Las Vegas, NV'].map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                {errors.pickupLocation && <span className="booking-error">{errors.pickupLocation}</span>}
              </div>
            </fieldset>

            {/* Notes */}
            <fieldset className="booking-fieldset">
              <legend className="booking-legend">Additional Notes</legend>
              <div className="booking-field">
                <label className="booking-label">Special Requests (optional)</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or notes for your booking..."
                  rows="3"
                  className="booking-input booking-textarea"
                />
              </div>
            </fieldset>

            <button type="submit" className="booking-submit">
              Confirm Booking →
            </button>
          </form>

          {/* Sidebar Summary */}
          <aside className="booking-summary">
            <div className="booking-summary__card">
              <img src={car.image} alt={car.name} className="booking-summary__image" />
              <div className="booking-summary__body">
                <span className="booking-summary__category">{car.category}</span>
                <h3 className="booking-summary__name">{car.name}</h3>
                <div className="booking-summary__rating">
                  <span>★ {car.rating}</span>
                  <span>({car.reviews} reviews)</span>
                </div>

                <div className="booking-summary__specs">
                  <span>👤 {car.seats} seats</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>⛽ {car.fuel}</span>
                </div>

                <div className="booking-summary__pricing">
                  <div className="booking-summary__row">
                    <span>Daily rate</span>
                    <strong>${car.price}</strong>
                  </div>
                  <div className="booking-summary__row">
                    <span>Duration</span>
                    <strong>{days > 0 ? `${days} day${days !== 1 ? 's' : ''}` : '—'}</strong>
                  </div>
                  <div className="booking-summary__row booking-summary__row--total">
                    <span>Total</span>
                    <strong>{days > 0 ? `$${total}` : '—'}</strong>
                  </div>
                </div>

                <ul className="booking-summary__perks">
                  <li>✓ Free cancellation (48h prior)</li>
                  <li>✓ Full insurance included</li>
                  <li>✓ 24/7 roadside support</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
