import { motion } from 'framer-motion'
import { reasons } from '../data/whyWorkWithMe.js'
import { getIcon } from '../utils/getIcon.js'
import SectionHeading from '../components/SectionHeading.jsx'
import './WhyWorkWithMe.css'

export default function WhyWorkWithMe() {
  return (
    <section className="section why">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="What I bring to a project."
          align="center"
        />

        <div className="why__grid">
          {reasons.map((r, i) => {
            const Icon = getIcon(r.icon)
            return (
              <motion.div
                key={r.title}
                className="why__item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="why__icon"><Icon size={20} strokeWidth={1.75} /></div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
