import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/site.js'
import Button from './Button.jsx'
import profileImage from '../assets/Brijeshpatel.jpg'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (href) => {
    setOpen(false)
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.hash = href
      }
    }, 300)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={() => setOpen(false)}>
          <div className="navbar__logo-mark">
            <img 
              src={profileImage} 
              alt="Brijesh Patel" 
              className="navbar__logo-image"
            />
          </div>
          <span className="navbar__logo-text">Brijesh Patel</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button href="#contact" variant="primary" icon={false}>
            Let's Talk
          </Button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav aria-label="Mobile">
              {nav.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button 
              href="#contact" 
              variant="primary" 
              icon={false} 
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
            >
              Let's Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
