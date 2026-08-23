import { motion } from 'framer-motion'
import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </motion.div>
  )
}
