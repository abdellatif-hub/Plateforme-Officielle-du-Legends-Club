import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const encodeImagePath = (path) => {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/')
}

const Home = () => {
  const activityPhotos = [
    { src: '/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19.jpeg', title: 'Caravane Humanitaire', link: '/activites' },
    { src: '/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.49.jpeg', title: 'Maison de Retraite', link: '/activites' },
    { src: '/images/les orphelins/IMG-20221210-WA0063.jpg', title: 'Orphelins', link: '/activites' },
    { src: '/images/don de sang/WhatsApp Image 2026-02-23 at 03.17.57 (1).jpeg', title: 'Don de Sang', link: '/activites' },
    { src: '/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.18.jpeg', title: 'Ma2idat Rahman', link: '/activites' },
    { src: '/images/desicience mentale/IMG-20240722-WA0017.jpg', title: 'Déficience Mentale', link: '/activites' },
    { src: '/images/seisme/WhatsApp Image 2026-02-23 at 04.02.56.jpeg', title: 'Caravane Séisme', link: '/activites' },
    { src: '/images/iftar/IMG-20230331-WA0028.jpg', title: 'Iftar SDF', link: '/activites' },
  ]

  const categories = [
    { icon: 'heart', label: 'Humanitaire', color: 'text-red-500' },
    { icon: 'trophy', label: 'Sport', color: 'text-blue-500' },
    { icon: 'gamepad', label: 'Gaming', color: 'text-purple-500' },
    { icon: 'book', label: 'Culture', color: 'text-green-500' },
    { icon: 'mic', label: 'Conférences', color: 'text-orange-500' },
  ]

  const Icon = ({ name, className }) => {
    const icons = {
      heart: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      trophy: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      gamepad: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
      book: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      mic: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
    }
    return icons[name] || null
  }

  return (
    <div className="pt-20">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={encodeImagePath('/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19.jpeg')} alt="Legends Club" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-6 flex justify-center">
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent">Legends Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">Humanitaire | Sport | Gaming | Culture | Conférences</p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Un club universitaire dédié à faire la différence dans notre communauté.</p>
            <p className="text-md text-gray-400 mb-8">Université Mundiapolis – Casablanca</p>
            <Link to="/nous-connaitre">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
                Découvrir
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Activités en Images</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Découvrez nos actions humanitaires à travers ces moments de partage</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {activityPhotos.map((photo, index) => (
              <Link key={index} to={photo.link}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ scale: 1.05, y: -5 }} className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <div className={`aspect-square ${index === 0 ? 'md:aspect-auto md:min-h-[400px]' : ''}`}>
                    <img src={encodeImagePath(photo.src)} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent"><span className="font-semibold">{photo.title}</span></div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link to="/activites"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">Voir toutes nos activités</motion.button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Action</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Découvrez les différents piliers de notre engagement</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div key={category.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <Icon name={category.icon} className={`w-12 h-12 ${category.color} mx-auto mb-4`} />
                <h3 className="font-semibold text-gray-800">{category.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-xl"><img src={encodeImagePath('/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.49 (1).jpeg')} alt="Maison de retraite" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="rounded-xl overflow-hidden shadow-xl"><img src={encodeImagePath('/images/les orphelins/IMG-20221210-WA0142.jpg')} alt="Orphelins" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500" /></div>
              </div>
              <div className="pt-8">
                <div className="rounded-xl overflow-hidden shadow-xl"><img src={encodeImagePath('/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19 (2).jpeg')} alt="Caravane" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" /></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Qui Sommes-Nous ?</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">Legends Club est un club universitaire humanitaire qui œuvre pour le bien-être de notre communauté.</p>
              <p className="text-gray-600 mb-8">Notre mission est de créer un impact positif durable tout en développant les compétences et l'esprit d'équipe de nos membres.</p>
              <Link to="/nous-connaitre"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">En Savoir Plus</motion.button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <svg className="w-16 h-16 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              <h3 className="text-2xl font-bold mb-4">Rejoignez-Nous</h3>
              <p className="text-primary-100 mb-6">Faites partie d'une communauté engagée qui fait la différence.</p>
              <Link to="/contact"><button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Nous Contacter</button></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Soutenez Notre Mission</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Votre contribution nous aide à continuer nos actions humanitaires.</p>
            <Link to="/donation"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">Faire un Don</motion.button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
