import { motion } from 'framer-motion'
import { getIcon } from '../utils/getIcon.js'
import './ServiceCard.css'

export default function ServiceCard({ icon, title, description, index = 0 }) {
  const Icon = getIcon(icon)

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="service-card__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </motion.article>
  )
}
