import { motion } from 'framer-motion'
import { useState } from 'react'

const Donation = () => {
  const [copied, setCopied] = useState(false)
  const rib = '5417 5540 0099 7389'
  const copyToClipboard = () => {
    navigator.clipboard.writeText(rib.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Faire un Don</h1>
          <p className="text-xl text-primary-100">Votre générosité nous permet de continuer nos actions humanitaires</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Informations Bancaires</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Banque</label>
                <p className="text-2xl font-bold text-primary-600">Attijariwafa bank</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">RIB</label>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold font-mono">{rib}</p>
                  <button onClick={copyToClipboard} className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700">{copied ? 'Copié !' : 'Copier'}</button>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600 text-sm">Après votre don, contactez-nous à clublegends2022@gmail.com</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Donation
