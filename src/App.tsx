import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-gray-300">
      <div className="flex flex-col lg:flex-row">
        
        <Navbar />

        <main className="w-full border-0 lg:ml-72">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
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
