import { motion } from 'framer-motion'
import './TimelineItem.css'

export default function TimelineItem({ item, index = 0 }) {
  return (
    <motion.div
      className={`timeline-item ${item.current ? 'timeline-item--current' : ''}`}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="timeline-item__marker">
        <span className="timeline-item__dot" />
      </div>

      <div className="timeline-item__content">
        <div className="timeline-item__head">
          <h3>{item.role}</h3>
          {item.current && <span className="timeline-item__badge">Current</span>}
        </div>
        <p className="timeline-item__meta">
          {item.company} &middot; {item.location} &middot; {item.period}
        </p>
        <p className="timeline-item__desc">{item.description}</p>
        <ul className="timeline-item__points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
