import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Briefcase } from 'lucide-react'
import { profile } from '../data/site.js'
import { workflowStages } from '../data/process.js'
import SectionHeading from '../components/SectionHeading.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <div className="about__grid">
          <div>
            <SectionHeading
              eyebrow="About"
              title="More than just writing code."
              description="I believe good software starts with understanding the problem. My approach combines requirement analysis, thoughtful UI design and solid development practices to turn ideas into useful, scalable applications."
            />

            <p className="about__body">
              I'm a Full Stack Developer who can handle a project from the initial requirement
              discussion through design and implementation to final delivery — understanding what a
              client actually needs, planning the technical approach, working with Figma designs,
              building the interface and backend, and integrating everything with the right database
              and APIs.
            </p>
            <p className="about__body">
              I can adapt to the technology stack required by the project and work across different
              languages, frameworks and databases based on client requirements, rather than forcing
              every problem into the same toolkit.
            </p>

            <motion.div
              className="about__card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="about__card-avatar" aria-hidden="true">BP</div>
              <div>
                <p className="about__card-name">{profile.fullName}</p>
                <p className="about__card-role">{profile.role}</p>
                <div className="about__card-meta">
                  <span><MapPin size={14} /> {profile.location}</span>
                  <span><Briefcase size={14} /> 3+ years experience</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about__workflow glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="about__workflow-title">How a project moves forward</p>
            <div className="about__workflow-steps">
              {workflowStages.map((stage, i) => (
                <div key={stage} className="about__workflow-step">
                  <div className="about__workflow-node">
                    <span>{stage}</span>
                  </div>
                  {i < workflowStages.length - 1 && (
                    <ArrowDown size={16} className="about__workflow-arrow" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
