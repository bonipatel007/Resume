import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { workflowStages } from '../data/process.js'
import './BuildLogCard.css'

const floatingBadges = [
  { label: 'React.js', style: { top: '-6%', left: '-8%' }, delay: 0 },
  { label: 'REST API', style: { top: '18%', right: '-12%' }, delay: 0.4 },
  { label: 'MySQL', style: { bottom: '10%', right: '-10%' }, delay: 0.8 },
  { label: 'Figma', style: { bottom: '-6%', left: '6%' }, delay: 1.2 },
]

export default function BuildLogCard() {
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    if (visibleCount >= workflowStages.length) return
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 650)
    return () => clearTimeout(t)
  }, [visibleCount])

  return (
    <div className="build-log">
      {floatingBadges.map((b) => (
        <motion.div
          key={b.label}
          className="build-log__badge"
          style={b.style}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.6 + b.delay },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
          }}
        >
          {b.label}
        </motion.div>
      ))}

      <div className="build-log__window glass-card">
        <div className="build-log__titlebar">
          <div className="build-log__dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <span className="build-log__filename">build.log</span>
        </div>

        <div className="build-log__body">
          {workflowStages.map((stage, i) => {
            const done = i < visibleCount - 1
            const active = i === visibleCount - 1
            const pending = i >= visibleCount

            return (
              <div
                key={stage}
                className={`build-log__row ${pending ? 'is-pending' : ''} ${active ? 'is-active' : ''}`}
              >
                <span className="build-log__status" aria-hidden="true">
                  {done ? '✓' : active ? '›' : '·'}
                </span>
                <span className="build-log__stage">{stage}</span>
                {done && <span className="build-log__ok">done</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
