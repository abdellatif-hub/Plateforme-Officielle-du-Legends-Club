import { motion } from 'framer-motion'

const encodeImagePath = (path) => path.split('/').map(s => encodeURIComponent(s)).join('/')

const About = () => (
  <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Nous Connaître</h1>
        <p className="text-xl text-primary-100">Découvrez qui nous sommes, nos valeurs, et notre mission</p>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Description du Club</h2>
        <p className="text-gray-700 text-lg leading-relaxed">Club Legends est un club dynamique et diversifié qui combine humanitaire, art et culture, sport, conférences, formations et gaming. Nous visons à promouvoir l'esprit d'équipe, la solidarité et l'excellence.</p>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Esprit d\'équipe', 'Solidarité', 'Excellence'].map((v, i) => (
            <motion.div key={v} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{v}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Mot de la Présidente</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img src={encodeImagePath('/images/ikram saadani/WhatsApp Image 2026-02-23 at 05.59.10.jpeg')} alt="Ikram SAADANI" className="w-32 h-32 rounded-full object-cover" />
            <div>
              <h3 className="text-2xl font-bold">Ikram SAADANI</h3>
              <p className="text-primary-200">Présidente du Club</p>
            </div>
          </div>
          <p className="text-primary-50">En tant que présidente du Club Legends, je suis fière de poursuivre notre mission avec détermination. Merci de votre soutien et de votre confiance.</p>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Fondateurs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Ikram Saadani', image: '/images/Fondateurs/ikram saadani.jpeg' },
            { name: 'Hamza Saliha', image: '/images/Fondateurs/Hamza Saliha.png' },
            { name: 'Marwane Ouahid', image: '/images/Fondateurs/Marwane ouahid (1).JPG' }
          ].map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img src={encodeImagePath(f.image)} alt={f.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">{f.name}</h3>
              <p className="text-gray-600 mt-2">Fondateur</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default About
