// ===== ABOUT PAGE =====

import { Link } from 'react-router-dom';
import './About.css';

const team = [
  { name: 'Alexandra Rivers', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Marcus Chen', role: 'Head of Fleet', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Sofia Martinez', role: 'Customer Experience', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  { name: 'James Holloway', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
];

const milestones = [
  { year: '2018', event: 'Drivana founded in Los Angeles with 12 vehicles' },
  { year: '2020', event: 'Expanded to 10 major US cities' },
  { year: '2022', event: 'Introduced our electric vehicle program' },
  { year: '2023', event: 'Surpassed 10,000 happy customers' },
  { year: '2024', event: 'Launched 24/7 concierge service' },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <p className="section-tag">Our Story</p>
            <h1 className="about-hero__title">
              Born from a Passion<br />for the Open Road
            </h1>
            <p className="about-hero__text">
              Drivana was founded by a group of travel enthusiasts who believed that the journey should be just as extraordinary as the destination. We've built a platform that connects adventurers with the world's finest vehicles.
            </p>
          </div>
          <div className="about-hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&q=80"
              alt="Road trip adventure"
              className="about-hero__image"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <p className="section-tag">What We Believe</p>
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {[
              { icon: '🌟', title: 'Excellence', desc: 'Every vehicle in our fleet undergoes rigorous quality checks. We settle for nothing less than perfect.' },
              { icon: '🤝', title: 'Trust', desc: 'Transparent pricing, honest policies, and genuine care for every customer who chooses Drivana.' },
              { icon: '🌿', title: 'Sustainability', desc: 'Committed to reducing our carbon footprint through a growing fleet of hybrid and electric vehicles.' },
              { icon: '🚀', title: 'Innovation', desc: 'Continuously improving our platform and services to deliver the most seamless rental experience.' },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '200+', label: 'Premium Vehicles' },
              { num: '50+', label: 'US Locations' },
              { num: '10K+', label: 'Happy Customers' },
              { num: '6', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="stat-block">
                <strong className="stat-block__num">{stat.num}</strong>
                <span className="stat-block__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="container">
          <p className="section-tag">Our Journey</p>
          <h2 className="section-title">Milestones</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-item__content">
                  <span className="timeline-item__year">{m.year}</span>
                  <p className="timeline-item__event">{m.event}</p>
                </div>
                <div className="timeline-item__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <p className="section-tag">The People</p>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-card__image-wrap">
                  <img src={member.image} alt={member.name} className="team-card__image" />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2 className="about-cta__title">Ready to Start Your Journey?</h2>
          <p className="about-cta__subtitle">Browse our fleet and find your perfect travel companion.</p>
          <Link to="/cars" className="btn-primary">Explore Cars ✦</Link>
        </div>
      </section>
    </main>
  );
}
