//import { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import HeroSection from './components/heroSection/HeroSection'
import Information from './components/information/Information'
import Projects from './components/projects/Projects'


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen flex w-full  flex-col dark:bg-gray-800 overflow-x-hidden">
          <Navigation />
          
          {/* El contenido crece y empuja el footer hacia abajo */}
          <main className="flex-grow">
            <HeroSection />
            <Information/>
            <Projects/>
          </main>
      
          <Footer />
        </div>
    </>
  )
}

export default App
