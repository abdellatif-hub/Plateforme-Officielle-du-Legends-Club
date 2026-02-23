import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Collaborators from './pages/Collaborators'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import Videos from './pages/Videos'
import Vision from './pages/Vision'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nous-connaitre" element={<About />} />
          <Route path="activites" element={<Activities />} />
          <Route path="collaborateurs" element={<Collaborators />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donation" element={<Donation />} />
          <Route path="videos" element={<Videos />} />
          <Route path="vision" element={<Vision />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
