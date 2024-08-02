import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import Careers from "./pages/careers"
import About from "./pages/about"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {

  return (
    <Router>
      <div className="app">
     <Navbar/>
      
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />

          
        
      </Routes>
      

     <Footer/>
     </div>
    </Router>
  )
}

export default App
