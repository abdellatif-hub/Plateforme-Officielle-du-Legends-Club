import { motion } from 'framer-motion'

const encodeVideoPath = (path) => path.split('/').map(s => encodeURIComponent(s)).join('/')

const videos = [
  { id: 1, title: 'Caravane Humanitaire', description: 'Notre caravane humanitaire', src: '/images/Vidéos/Caravane Humanitaire.mp4' },
  { id: 2, title: 'Soutien Déficience Mentale', description: 'Nos actions de soutien', src: '/images/Vidéos/Soutien aux Personnes avec Déficience Mentale.mp4' },
  { id: 3, title: 'Visite à l\'Orphelinat', description: 'Moments de partage', src: '/images/Vidéos/Visite à l\'Orphelinat.mp4' },
  { id: 4, title: 'Caravane Séisme', description: 'Intervention suite au séisme', src: '/images/Vidéos/Caravane Séisme.mp4' },
  { id: 5, title: 'Soirée Traditionnelle', description: 'Soirée culturelle traditionnelle', src: '/images/Soiree Traditionnelle/WhatsApp Video 2026-02-26 at 23.40.10.mp4' },
  { id: 6, title: 'Semaine culturelle', description: 'Semaine dédiée aux activités culturelles', src: '/images/Semaine culturelle/VID-20240424-WA0064.mp4' },
  { id: 7, title: 'Black Party', description: 'Soirée festive à thème noir', src: '/images/Black Party/VID-20250209-WA0045.mp4' },
  { id: 8, title: 'Concert Mohamed Adly', description: 'Concert artistique animé par Mohamed Adly', src: '/images/Concert Mohamed Adly/VID-20241130-WA0042.mp4' },
  { id: 9, title: 'Halloween', description: 'Événement festif Halloween', src: '/images/Halloween/VID-20241028-WA0144.mp4' },
  { id: 10, title: 'Summer Vibes', description: 'Événement estival de fin d\'année', src: '/images/Summer Vibes/IMG_0788.MOV' },
]

const Videos = () => (
  <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Vidéos</h1>
        <p className="text-xl text-primary-100">Découvrez nos actions en vidéos</p>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((v, i) => (
            <motion.div key={v.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-900">
                <video src={encodeVideoPath(v.src)} controls className="w-full h-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Videos
