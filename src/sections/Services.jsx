import { services } from '../data/services.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <SectionHeading
          eyebrow="What I Do"
          title="From requirement to running product."
          description="A full-stack skill set focused on getting a real application into production — not just isolated pieces of it."
        />

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
