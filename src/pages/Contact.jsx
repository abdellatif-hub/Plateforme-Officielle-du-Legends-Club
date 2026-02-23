import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=clublegends2022@gmail.com&su=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { label: 'Email', value: 'clublegends2022@gmail.com', link: 'mailto:clublegends2022@gmail.com' },
    { label: 'Présidente', value: 'Ikram – 0603172049', link: 'tel:+212603172049' },
    { label: 'Vice-Président', value: 'Hamza Roudani – 0687 622806', link: 'tel:+212687622806' },
    { label: 'Vice-Présidente', value: 'Yassmine Nouaceur – 0625442697', link: 'tel:+212625442697' },
    { label: 'Instagram', value: '@club_legends_mundiapolis', link: 'https://www.instagram.com/club_legends_mundiapolis' },
    { label: 'TikTok', value: '@legends_club_mundiapolis', link: 'https://www.tiktok.com/@legends_club_mundiapolis' },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl text-primary-100">Nous sommes là pour répondre à vos questions</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations de Contact</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block p-4 rounded-lg hover:bg-gray-50">
                    <h3 className="font-semibold text-gray-900">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Nom complet" required className="w-full px-4 py-3 border rounded-lg" />
                <input type="email" name="email" value={formData.email} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Email" required className="w-full px-4 py-3 border rounded-lg" />
                <input type="text" name="subject" value={formData.subject} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Sujet" required className="w-full px-4 py-3 border rounded-lg" />
                <textarea name="message" value={formData.message} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Message" required rows={6} className="w-full px-4 py-3 border rounded-lg" />
                {submitted && <p className="text-green-600">Message envoyé !</p>}
                <button type="submit" className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700">Envoyer le Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
