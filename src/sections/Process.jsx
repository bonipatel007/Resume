import { motion } from 'framer-motion'
import { process } from '../data/process.js'
import { getIcon } from '../utils/getIcon.js'
import SectionHeading from '../components/SectionHeading.jsx'
import './Process.css'

export default function Process() {
  return (
    <section className="section process">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Development Process"
          title="A clear path from idea to delivery."
          description="Every project moves through the same disciplined process, adapted to the scope of the work."
        />

        <div className="process__timeline">
          <div className="process__line" aria-hidden="true" />
          {process.map((step, i) => {
            const Icon = getIcon(step.icon)
            return (
              <motion.div
                key={step.step}
                className="process__item"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="process__marker">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <span className="process__step-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
