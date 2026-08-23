import { projects } from '../data/projects.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Selected Projects"
          title="A few things I've built."
          description="Applications built for real requirements — spanning healthcare, travel booking, education and task management."
        />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
