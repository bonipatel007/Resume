import { experience } from '../data/experience.js'
import SectionHeading from '../components/SectionHeading.jsx'
import TimelineItem from '../components/TimelineItem.jsx'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Experience"
          title="My career so far."
          description="Three-plus years across full stack development, healthcare software and project coordination."
        />

        <div className="experience__timeline">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
