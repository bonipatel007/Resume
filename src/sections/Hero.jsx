import { motion } from 'framer-motion'
import { profile, stats } from '../data/site.js'
import Button from '../components/Button.jsx'
import BuildLogCard from './BuildLogCard.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="section-inner hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{profile.role} &middot; {profile.location}</span>

          <h1 className="hero__title">
            Full Stack Developer
            <br />
            Turning ideas into <span className="gradient-text">scalable digital products.</span>
          </h1>

          <p className="hero__desc">
            I design, develop and deliver modern web applications — from understanding requirements
            and creating UI experiences to building APIs, integrating databases and taking the
            product to production.
          </p>

          <div className="hero__actions">
            <Button href="#contact" variant="primary">Let's Work Together</Button>
            <Button href="#projects" variant="secondary" icon={false}>View My Work</Button>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <BuildLogCard />
        </motion.div>
      </div>
    </section>
  )
}
