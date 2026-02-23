import { motion } from 'framer-motion'
import { useState } from 'react'

const encodeImagePath = (path) => path.split('/').map(s => encodeURIComponent(s)).join('/')

const Activities = () => {
  const [selected, setSelected] = useState(null)
  const activities = [
    { id: 1, title: 'Campagne de Don de Sang', description: 'Organisation de campagnes de don de sang.', objectives: ['Sensibiliser', 'Collecter des dons', 'Sauver des vies'], images: ['/images/don de sang/WhatsApp Image 2026-02-23 at 03.17.57 (1).jpeg'] },
    { id: 2, title: 'Visite Maison de Retraite', description: 'Visites aux maisons de retraite.', objectives: ['Apporter de la joie', 'Créer des liens'], images: ['/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.49.jpeg'] },
    { id: 3, title: 'Actions Ramadan (Ma2idat Rahmane)', description: 'Distribution pendant le Ramadan.', objectives: ['Aider les familles', 'Promouvoir la solidarité'], images: ['/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.18.jpeg'] },
    { id: 4, title: 'Iftar pour SDF', description: 'Iftars pour les sans-abri.', objectives: ['Aider les SDF', 'Créer de la solidarité'], images: ['/images/iftar/IMG-20230331-WA0028.jpg'] },
    { id: 5, title: 'Soutien aux Orphelins', description: 'Soutien aux enfants orphelins.', objectives: ['Apporter de la joie', 'Soutenir l\'éducation'], images: ['/images/les orphelins/IMG-20221210-WA0063.jpg'] },
    { id: 6, title: 'Soutien Déficience Mentale', description: 'Soutien aux personnes atteintes de déficience mentale.', objectives: ['Promouvoir l\'inclusion', 'Offrir un soutien'], images: ['/images/desicience mentale/IMG-20240722-WA0017.jpg'] },
    { id: 7, title: 'Caravane Humanitaire', description: 'Caravanes dans les zones rurales.', objectives: ['Atteindre les communautés', 'Fournir des services'], images: ['/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19.jpeg'] },
    { id: 8, title: 'Caravane Séisme', description: 'Aide aux victimes du séisme.', objectives: ['Aide d\'urgence', 'Soutenir les victimes'], images: ['/images/seisme/WhatsApp Image 2026-02-23 at 04.02.56.jpeg'] },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Activités Humanitaires</h1>
          <p className="text-xl text-primary-100">Découvrez nos actions et leur impact</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((a, i) => (
              <motion.div key={a.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.03, y: -5 }} onClick={() => setSelected(a)} className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                <div className="h-48 bg-primary-500 relative">
                  <img src={encodeImagePath(a.images[0])} alt={a.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">{a.title}</h3>
                </div>
                <div className="p-6"><p className="text-gray-600">{a.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()} className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="h-64 bg-primary-600 relative">
              <img src={encodeImagePath(selected.images[0])} alt={selected.title} className="w-full h-full object-cover" />
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">×</button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
              <p className="text-gray-700 mb-6">{selected.description}</p>
              <h3 className="text-xl font-bold mb-3">Objectifs</h3>
              <ul className="space-y-2">{selected.objectives.map((o, i) => <li key={i} className="flex items-center"><span className="text-primary-600 mr-2">✓</span>{o}</li>)}</ul>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Activities
