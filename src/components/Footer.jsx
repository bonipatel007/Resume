import { Mail, Phone } from 'lucide-react'
import { nav, profile } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">BP</span>
            <div>
              <p className="footer__name">{profile.name}</p>
              <p className="footer__role">{profile.role}</p>
            </div>
          </div>
          <p className="footer__tagline">Building useful digital experiences from idea to production.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
            <Phone size={16} aria-hidden="true" />
            {profile.phone}
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
