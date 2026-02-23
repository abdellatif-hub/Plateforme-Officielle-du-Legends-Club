import { motion } from 'framer-motion'

const Vision = () => {
  const goals = [
    { title: 'Développer notre impact', description: 'Augmenter notre portée à travers des projets innovants.', icon: '📈' },
    { title: 'Renforcer nos partenariats', description: 'Partenariats avec organisations locales et internationales.', icon: '🤝' },
    { title: 'Promouvoir l\'excellence', description: 'Excellence dans tous les domaines.', icon: '⭐' },
    { title: 'Créer un réseau de leaders', description: 'Former une nouvelle génération de leaders.', icon: '🎓' },
  ]
  const ambitions = [
    { title: 'Devenir un modèle', description: 'Modèle pour les autres organisations.', icon: '🏆' },
    { title: 'Reconnaissance régionale', description: 'Acteur clé du développement.', icon: '🌟' },
    { title: 'Impact durable', description: 'Impact positif sur la vie des gens.', icon: '💚' },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Vision à Long Terme</h1>
          <p className="text-xl text-primary-100">Nos objectifs et aspirations pour l'avenir</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Notre Vision</h2>
            <p className="text-xl font-semibold text-gray-900 text-center">Devenir l'une des organisations les plus influentes et respectées de la région, connue pour son engagement envers l'excellence, la solidarité et l'esprit d'équipe.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Objectifs Spécifiques</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {goals.map((g, i) => (
              <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">{g.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{g.title}</h3>
                <p className="text-gray-600">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Ambitions</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ambitions.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-primary-50 p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl mb-4">{a.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{a.title}</h3>
                <p className="text-gray-600">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-white font-semibold">Nous sommes convaincus qu'avec l'engagement de nos membres et partenaires, nous pouvons atteindre ces objectifs et faire une différence réelle.</p>
        </div>
      </section>
    </div>
  )
}

export default Vision
