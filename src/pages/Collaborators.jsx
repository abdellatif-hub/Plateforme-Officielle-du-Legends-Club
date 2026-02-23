import { motion } from 'framer-motion'

const encodeImagePath = (path) => path.split('/').map(s => encodeURIComponent(s)).join('/')

const collaborators = [
  { name: 'Bab Rayane', description: 'Partenaire engagé', logo: '/images/Collaborateurs/Bab Rayane.png' },
  { name: 'Ennasim', description: 'Collaboration communautaire', logo: '/images/Collaborateurs/Ennasim.jpeg' },
  { name: 'Association Al Amal', description: 'Initiatives humanitaires', logo: '/images/Collaborateurs/Association Al Amal.png' },
  { name: 'Crystal Note', description: 'Événements culturels', logo: '/images/Collaborateurs/Crystal Note.jpeg' },
  { name: 'Association Nour', description: 'Programmes sociaux', logo: '/images/Collaborateurs/Association Nour.png' },
]

const Collaborators = () => (
  <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Collaborateurs</h1>
        <p className="text-xl text-primary-100">Des partenaires qui partagent nos valeurs</p>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collaborators.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img src={encodeImagePath(c.logo)} alt={c.name} className="w-full h-full object-contain p-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{c.name}</h3>
              <p className="text-gray-600">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Collaborators
