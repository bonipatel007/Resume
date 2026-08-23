import { skillGroups } from '../data/skills.js'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import './TechStack.css'

export default function TechStack() {
  return (
    <section id="skills" className="section tech-stack">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technology is a tool — the solution comes first."
          description="I choose the stack based on what a project actually needs, and adapt to the languages, frameworks and databases a client is already working with."
        />

        <div className="tech-stack__grid">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} {...group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
