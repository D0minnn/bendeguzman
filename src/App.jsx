import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-green-100 selection:text-gray-500">
      <div className="flixed top-0 -z-10 h-full w-full">

      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />  
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App
