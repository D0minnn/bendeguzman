import About from "./components/About"
import Contacts from "./components/Contacts"
import Exp from "./components/Exp"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-emerald-400 selection:text-slate-100">
      <div className="fixed top-0 -z-10 h-full w-full">

      </div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />  
        <Hero />
        <About />
        <Technologies />
        <Exp />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  )
}

export default App
