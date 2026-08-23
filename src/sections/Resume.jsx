import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { profile } from '../data/site.js'
import Button from '../components/Button.jsx'
import './Resume.css'

export default function Resume() {
  return (
    <section className="section resume">
      <div className="section-inner">
        <motion.div
          className="resume__card glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="resume__icon" aria-hidden="true">
            <FileDown size={26} strokeWidth={1.75} />
          </div>
          <div className="resume__text">
            <h2>Want the complete professional background?</h2>
            <p>Download my resume for a full breakdown of my experience, skills and education.</p>
          </div>
          <Button href={profile.resumeUrl} variant="primary" icon={false}>
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
