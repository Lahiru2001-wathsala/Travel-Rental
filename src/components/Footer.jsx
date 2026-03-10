// ===== FOOTER COMPONENT =====

import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon" aria-hidden="true" />
            Drivana
          </Link>
          <p className="footer__tagline">
            Drive beyond the ordinary. Experience travel the way it was meant to be — with freedom, style, and comfort.
          </p>
          <div className="footer__socials">
            {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
              <a key={i} href="#" className="footer__social" aria-label="Social">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer__links-group">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__links">
            <li><Link to="/cars">Browse Cars</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__heading">Categories</h4>
          <ul className="footer__links">
            <li><Link to="/cars">Luxury SUVs</Link></li>
            <li><Link to="/cars">Sports Cars</Link></li>
            <li><Link to="/cars">Electric Vehicles</Link></li>
            <li><Link to="/cars">Off-Road</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__heading">Support</h4>
          <ul className="footer__links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Drivana. All rights reserved.</p>
        <p>Crafted with care for explorers worldwide.</p>
      </div>
    </footer>
  );
}
