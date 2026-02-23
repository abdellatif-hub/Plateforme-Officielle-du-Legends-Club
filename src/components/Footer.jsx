import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">Legends Club</h3>
            <p className="text-gray-400 mb-4">Club universitaire humanitaire dédié à faire la différence dans notre communauté.</p>
            <p className="text-gray-500 text-sm">Université Mundiapolis – Casablanca</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/nous-connaitre" className="text-gray-400 hover:text-gold-400 transition-colors">Nous Connaître</Link></li>
              <li><Link to="/activites" className="text-gray-400 hover:text-gold-400 transition-colors">Activités</Link></li>
              <li><Link to="/collaborateurs" className="text-gray-400 hover:text-gold-400 transition-colors">Collaborateurs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:clublegends2022@gmail.com" className="hover:text-gold-400 transition-colors">clublegends2022@gmail.com</a></li>
              <li><a href="https://www.instagram.com/club_legends_mundiapolis" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@legends_club_mundiapolis" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">TikTok</a></li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">© {new Date().getFullYear()} Legends Club. Tous droits réservés.</p>
          <p className="text-gray-600 text-xs">
            Développé par{' '}
            <a href="https://www.linkedin.com/in/abdellatif-elhamaoui/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors">Abdellatif El Hamaoui</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
