export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-60 p-8">
      <ul className="space-y-6">
        <li>
          <a href="#about" className="hover:text-white text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-white text-gray-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-white text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-white text-gray-400">
            Education
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-white text-gray-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}