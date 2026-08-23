import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { profile } from '../data/site.js'
import Button from '../components/Button.jsx'
import './Contact.css'

const projectTypes = ['New Application', 'Existing Application', 'Frontend Only', 'Full Stack', 'Not Sure Yet']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: projectTypes[0], message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry from ${form.name || 'Website Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="grid-bg" aria-hidden="true" />
      <div className="section-inner contact__inner">
        <motion.div
          className="contact__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Contact</span>
          <h2>Have a project in mind?</h2>
          <p>
            Whether you are building something new, improving an existing application or looking
            for a developer who can take ownership from requirement to delivery, let's talk.
          </p>

          <div className="contact__details">
            <a href={`mailto:${profile.email}`} className="contact__detail">
              <Mail size={18} aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="contact__detail">
              <Phone size={18} aria-hidden="true" />
              <span>{profile.phone}</span>
            </a>
            <div className="contact__detail">
              <MapPin size={18} aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact__form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </div>

          <div className="contact__field">
            <label htmlFor="projectType">Project Type</label>
            <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}>
              {projectTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me a bit about what you're building..." />
          </div>

          <Button type="submit" variant="primary" icon={false} className="contact__submit">
            Start a Conversation <Send size={16} style={{ marginLeft: 6 }} aria-hidden="true" />
          </Button>

          <p className="contact__note">
            This form opens your email client with the message pre-filled. To connect it to a live
            backend instead, wire the <code>handleSubmit</code> function in{' '}
            <code>src/sections/Contact.jsx</code> to a form service such as Formspree, Resend or your
            own API endpoint.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
