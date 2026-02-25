import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
export default function App() {
  return (
    // <>
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Experience />
    //   <Projects />
    //   <Education />
    //   <Skills />
    //   <Contact />
    // </>
    <div className="bg-[#0a0a0a] text-gray-300 min-h-screen">
      <div className="flex">
        
        <Navbar />

        <main className="ml-72 w-full border-0">
          <div className="max-w-3xl mx-auto px-12 py-24">
            <About />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}