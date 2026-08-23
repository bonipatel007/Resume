import { motion } from 'framer-motion'
import './SkillCard.css'

export default function SkillCard({ category, items, index = 0 }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="skill-card__category">{category}</h3>
      <div className="skill-card__items">
        {items.map((item) => (
          <span className="skill-badge" key={item}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
