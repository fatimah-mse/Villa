import Navbar from "./components/Navbar/Navbar"
import TopNav from "./components/TopNav/TopNav"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Properties from "./Pages/Properties"
import SingleProperty from "./Pages/SingleProperty"
import Contact from "./Pages/Contact"

function App() {


  return (
    <>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Properties' element={<Properties />} />
        <Route path='/Property-Details' element={<SingleProperty />} />
        <Route path='/Contact-Us' element={<Contact />} />
        
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
