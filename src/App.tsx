import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 min-h-screen">
      <div className="flex">
        
        <Navbar />

        <main className="ml-72 w-full border-0">
          <div className="max-w-5xl mx-auto px-8 py-24 lg:px-12">
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
