import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, index = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__mockup" aria-hidden="true">
        <div className="project-card__mockup-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="project-card__mockup-lines">
          <div className="line line--w70" />
          <div className="line line--w40" />
          <div className="line line--block" />
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <button
          className="project-card__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          View Details
          <ChevronDown size={16} className={open ? 'rotated' : ''} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="project-card__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {project.note && <p className="project-card__note">{project.note}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}
