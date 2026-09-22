import { Route, Routes } from 'react-router-dom'
import Analytics from './components/Analytics'
import Layout from './components/Layout'
import Entry from './pages/Entry'
import Home from './pages/Home'
import Work from './pages/Work'
import ProductStoriesIndex from './pages/ProductStoriesIndex'
import ProductStory from './pages/ProductStory'
import Thinking from './pages/Thinking'
import Lab from './pages/Lab'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="product-stories" element={<ProductStoriesIndex />} />
                <Route path="product-stories/:slug" element={<ProductStory />} />
                <Route path="thinking" element={<Thinking />} />
                <Route path="lab" element={<Lab />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  )
}
