import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const encodeImagePath = (path) => path.split('/').map(s => encodeURIComponent(s)).join('/')

const Activities = () => {
  const [selected, setSelected] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const activities = [
    { id: 1, title: 'Campagne de Don de Sang', description: 'Organisation de campagnes de don de sang.', objectives: ['Sensibiliser', 'Collecter des dons', 'Sauver des vies'], images: ['/images/don de sang/WhatsApp Image 2026-02-23 at 03.17.57 (1).jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.17.58 (1).jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.17.58 (2).jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.17.59 (2).jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.18.01.jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.27.00.jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.27.01 (1).jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.27.01 (2).jpeg', '/images/don de sang/WhatsApp Image 2026-02-23 at 03.27.01.jpeg'] },
    { id: 2, title: 'Visite Maison de Retraite', description: 'Visites aux maisons de retraite.', objectives: ['Apporter de la joie', 'Créer des liens'], images: ['/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.49.jpeg', '/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.49 (1).jpeg', '/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.49 (2).jpeg', '/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.50 (1).jpeg', '/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.50.jpeg', '/images/maison de retraite/WhatsApp Image 2026-02-23 at 03.13.51.jpeg'] },
    { id: 3, title: 'Actions Ramadan (Ma2idat Rahmane)', description: 'Distribution pendant le Ramadan.', objectives: ['Aider les familles', 'Promouvoir la solidarité'], images: ['/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.18.jpeg', '/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.19 (1).jpeg', '/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.19 (2).jpeg', '/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.19 (3).jpeg', '/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.19.jpeg', '/images/ma2idat rahman/WhatsApp Image 2026-02-23 at 03.49.20.jpeg'] },
    { id: 4, title: 'Iftar pour SDF', description: 'Iftars pour les sans-abri.', objectives: ['Aider les SDF', 'Créer de la solidarité'], images: ['/images/iftar/IMG-20230331-WA0028.jpg', '/images/iftar/-5906852635561016744_121.jpg', '/images/iftar/IMG_20240321_221837_488.jpg', '/images/iftar/IMG-20230331-WA0043.jpg', '/images/iftar/IMG-20230331-WA0049.jpg', '/images/iftar/IMG-20230331-WA0075.jpg', '/images/iftar/IMG-20230414-WA0053.jpg'] },
    { id: 5, title: 'Soutien aux Orphelinat', description: 'Soutien aux enfants orphelinat.', objectives: ['Apporter de la joie', 'Soutenir l\'éducation'], images: ['/images/les orphelins/IMG-20221210-WA0063.jpg', '/images/les orphelins/IMG-20221210-WA0007.jpg', '/images/les orphelins/IMG-20221210-WA0026.jpg', '/images/les orphelins/IMG-20221210-WA0142.jpg', '/images/les orphelins/IMG-20221210-WA0195.jpg', '/images/les orphelins/IMG-20221210-WA0200.jpg'] },
    { id: 6, title: 'Soutien Déficience Mentale', description: 'Soutien aux personnes atteintes de déficience mentale.', objectives: ['Promouvoir l\'inclusion', 'Offrir un soutien'], images: ['/images/desicience mentale/IMG-20240722-WA0017.jpg', '/images/desicience mentale/IMG-20240722-WA0019.jpg', '/images/desicience mentale/IMG-20240722-WA0021.jpg', '/images/desicience mentale/IMG-20240722-WA0066.jpg', '/images/desicience mentale/IMG-20240722-WA0069.jpg', '/images/desicience mentale/IMG-20240722-WA0071.jpg', '/images/desicience mentale/IMG-20240722-WA0086.jpg', '/images/desicience mentale/IMG-20240722-WA0142.jpg', '/images/desicience mentale/IMG-20240722-WA0165.jpg'] },
    { id: 7, title: 'Caravane Humanitaire', description: 'Caravanes dans les zones rurales.', objectives: ['Atteindre les communautés', 'Fournir des services'], images: ['/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19.jpeg', '/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19 (1).jpeg', '/images/caravane/WhatsApp Image 2026-02-23 at 03.31.19 (2).jpeg', '/images/caravane/WhatsApp Image 2026-02-23 at 03.31.20 (1).jpeg', '/images/caravane/WhatsApp Image 2026-02-23 at 03.31.20 (2).jpeg', '/images/caravane/WhatsApp Image 2026-02-23 at 03.31.20.jpeg'] },
    { id: 8, title: 'Caravane Séisme', description: 'Aide aux victimes du séisme.', objectives: ['Aide d\'urgence', 'Soutenir les victimes'], images: ['/images/seisme/WhatsApp Image 2026-02-23 at 04.02.56.jpeg', '/images/seisme/WhatsApp Image 2026-02-23 at 04.02.56 (1).jpeg', '/images/seisme/WhatsApp Image 2026-02-23 at 04.02.56 (2).jpeg', '/images/seisme/WhatsApp Image 2026-02-23 at 04.02.57.jpeg'] },
    { id: 9, title: 'Soirée Traditionnelle', description: 'Organisation d\'une soirée culturelle traditionnelle.', objectives: ['Valoriser la culture et les traditions marocaines', 'Renforcer la cohésion entre les membres', 'Créer un moment de partage et de découverte culturelle'], images: ['/images/Soiree Traditionnelle/WhatsApp Image 2026-02-26 at 22.49.17.jpeg', '/images/Soiree Traditionnelle/WhatsApp Image 2026-02-26 at 22.49.17 (1).jpeg', '/images/Soiree Traditionnelle/WhatsApp Image 2026-02-26 at 22.49.17 (2).jpeg', '/images/Soiree Traditionnelle/WhatsApp Image 2026-02-26 at 22.49.18.jpeg', '/images/Soiree Traditionnelle/WhatsApp Image 2026-02-26 at 22.49.19.jpeg', '/images/Soiree Traditionnelle/WhatsApp Image 2026-02-26 at 22.49.19 (1).jpeg'] },
    { id: 10, title: 'Semaine culturelle', description: 'Organisation d\'une semaine dédiée aux activités culturelles et artistiques.', objectives: ['Promouvoir la diversité culturelle', 'Encourager la créativité des étudiants', 'Favoriser l\'échange et le partage entre les participants'], images: ['/images/Semaine culturelle/IMG-20240423-WA0130.jpg', '/images/Semaine culturelle/IMG-20240424-WA0381.jpg', '/images/Semaine culturelle/IMG-20240425-WA0226.jpg', '/images/Semaine culturelle/IMG-20240426-WA0083.jpg', '/images/Semaine culturelle/IMG-20240426-WA0198.jpg', '/images/Semaine culturelle/IMG-20240426-WA0205.jpg', '/images/Semaine culturelle/IMG-20240426-WA0216.jpg', '/images/Semaine culturelle/IMG-20240426-WA0217.jpg'] },
    { id: 11, title: 'Black Party', description: 'Organisation d\'une soirée festive à thème autour de la couleur noire dans une ambiance conviviale et dynamique.', objectives: ['Renforcer la cohésion entre les participants', 'Offrir un moment de détente et de divertissement', 'Encourager la participation aux activités du club'], images: ['/images/Black Party/_DSC0079.JPG', '/images/Black Party/_DSC0126.JPG', '/images/Black Party/_DSC0164.JPG', '/images/Black Party/_DSC0174.JPG', '/images/Black Party/_DSC0239.JPG', '/images/Black Party/_DSC0258.JPG', '/images/Black Party/_DSC0274.JPG', '/images/Black Party/_DSC0281.JPG', '/images/Black Party/_DSC0374.JPG'] },
    { id: 12, title: 'Concert Mohamed Adly', description: 'Organisation d\'un concert artistique animé par l\'artiste Mohamed Adly pour les étudiants.', objectives: ['Promouvoir les activités artistiques et musicales', 'Offrir un moment de divertissement aux étudiants', 'Encourager la participation aux événements culturels'], images: ['/images/Concert Mohamed Adly/WhatsApp Image 2026-02-27 at 00.08.48.jpeg', '/images/Concert Mohamed Adly/WhatsApp Image 2026-02-27 at 00.08.48 (1).jpeg', '/images/Concert Mohamed Adly/WhatsApp Image 2026-02-27 at 00.08.49.jpeg', '/images/Concert Mohamed Adly/WhatsApp Image 2026-02-27 at 00.08.49 (1).jpeg', '/images/Concert Mohamed Adly/WhatsApp Image 2026-02-27 at 00.08.49 (2).jpeg'] },
    { id: 13, title: 'Halloween', description: 'Organisation d\'un événement festif inspiré de la célébration d\'Halloween avec des décorations et des animations thématiques.', objectives: ['Créer une ambiance festive et originale', 'Renforcer l\'esprit d\'équipe entre les participants', 'Encourager la créativité à travers les déguisements'], images: ['/images/Halloween/WhatsApp Image 2026-02-26 at 22.49.15.jpeg', '/images/Halloween/WhatsApp Image 2026-02-26 at 22.49.15 (1).jpeg', '/images/Halloween/WhatsApp Image 2026-02-26 at 22.49.16.jpeg', '/images/Halloween/WhatsApp Image 2026-02-26 at 22.49.16 (1).jpeg', '/images/Halloween/WhatsApp Image 2026-02-26 at 22.49.16 (2).jpeg'] },
    { id: 14, title: 'Summer Vibes', description: 'Organisation d\'un événement estival marquant la fin de l\'année universitaire dans une ambiance conviviale.', objectives: ['Célébrer la fin de l\'année universitaire', 'Renforcer les liens entre les membres', 'Créer des souvenirs positifs entre les participants'], images: ['/images/Summer Vibes/IMG-20240715-WA0031.jpg', '/images/Summer Vibes/IMG-20240715-WA0064.jpg', '/images/Summer Vibes/IMG-20240715-WA0065.jpg', '/images/Summer Vibes/IMG-20240715-WA0072.jpg', '/images/Summer Vibes/IMG-20240722-WA0581.jpg', '/images/Summer Vibes/IMG-20240722-WA0595.jpg', '/images/Summer Vibes/IMG-20240722-WA0596.jpg'] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
  }

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 }
    },
  }

  // Carousel automatique des images dans le modal avec barre de progression
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (selected && selected.images && selected.images.length > 1) {
      setProgress(0)
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + (100 / 30) // 3 secondes = 30 intervalles de 100ms
        })
      }, 100)
      
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selected.images.length)
        setProgress(0)
      }, 3000) // Change d'image toutes les 3 secondes
      
      return () => {
        clearInterval(progressInterval)
        clearInterval(imageInterval)
      }
    } else {
      setCurrentImageIndex(0)
      setProgress(0)
    }
  }, [selected])
  
  // Réinitialiser la progression quand l'image change
  useEffect(() => {
    setProgress(0)
  }, [currentImageIndex])

  // Réinitialiser l'index quand on change d'activité
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selected?.id])

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          ></motion.div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent"
          >
            Notre Activités
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-primary-100"
          >
            Découvrez nos actions et leurs impacts
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activities.map((a, i) => (
              <motion.div
                key={a.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCard(a.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelected(a)}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform-gpu"
                style={{ perspective: '1000px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-56 bg-primary-500 relative overflow-hidden">
                  <motion.img 
                    src={encodeImagePath(a.images[0])} 
                    alt={a.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: hoveredCard === a.id ? 1 : 0.8,
                      y: hoveredCard === a.id ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{a.title}</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"></div>
                  </motion.div>
                </div>
                <div className="p-6 relative">
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={false}
                    animate={{ color: hoveredCard === a.id ? '#374151' : '#4B5563' }}
                  >
                    {a.description}
                  </motion.p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 mt-4"
                  />
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
              >
                <div className="h-80 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      src={encodeImagePath(selected.images[currentImageIndex])} 
                      alt={selected.title} 
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, x: 100, scale: 1.1 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -100, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Barre de progression automatique */}
                  {selected.images.length > 1 && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gold-400 to-gold-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                  )}
                  
                  {/* Indicateurs de carousel */}
                  {selected.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                      {selected.images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(index)
                            setProgress(0)
                          }}
                          className={`h-2 rounded-full transition-all relative overflow-hidden ${
                            index === currentImageIndex ? 'w-8 bg-white/30' : 'w-2 bg-white/50'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {index === currentImageIndex && (
                            <motion.div
                              className="absolute inset-0 bg-white rounded-full"
                              initial={{ width: "0%" }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.1, ease: "linear" }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}
                  
                  {/* Boutons de navigation */}
                  {selected.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length)
                          setProgress(0)
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10 backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex((prev) => (prev + 1) % selected.images.length)
                          setProgress(0)
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10 backdrop-blur-sm"
                      >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-10"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-bold text-white mb-2 drop-shadow-lg"
                    >
                      {selected.title}
                    </motion.h2>
                  </div>
                </div>
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-700 mb-8 text-lg leading-relaxed"
                  >
                    {selected.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                      <span className="w-1 h-8 bg-gradient-to-b from-primary-600 to-primary-700 rounded-full mr-3"></span>
                      Objectifs
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {selected.objectives.map((o, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-start group/item"
                        >
                          <motion.span
                            className="text-primary-600 mr-3 mt-1 text-xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                          >
                            ✓
                          </motion.span>
                          <span className="text-gray-700 text-lg group-hover/item:text-primary-600 transition-colors">{o}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {selected.images && selected.images.length > 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-primary-600 to-primary-700 rounded-full mr-3"></span>
                        Galerie
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selected.images.map((img, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.05, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            className="rounded-xl overflow-hidden shadow-lg cursor-pointer group/img"
                            onClick={() => setSelectedImage(img)}
                          >
                            <div className="relative overflow-hidden">
                              <img 
                                src={encodeImagePath(img)} 
                                alt={`${selected.title} - Image ${i + 1}`} 
                                className="w-full h-40 object-cover transition-transform duration-500 group-hover/img:scale-125" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                Image {i + 1}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal pour afficher l'image en grand */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <motion.img
                src={encodeImagePath(selectedImage)}
                alt="Image agrandie"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Bouton fermer */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Instructions */}
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Activities
