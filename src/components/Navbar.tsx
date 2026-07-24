import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function Sidebar() {

  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contacts" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight - 10; 

    if (scrollPosition >= threshold) {
      setActiveSection("contact"); 
    }
  };

  window.addEventListener("scroll", handleScroll);

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="relative w-full border-0 bg-[#0a0a0a] px-8 py-12 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-72 lg:px-12 lg:py-24">
      
      {/* Profile Pic */}
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full border-2 border-zinc-800 overflow-hidden mb-6 scale-150 -translate-y-4 translate-x-4">
          <img 
            src="/profile_pic.jpg"
            alt="Edward Feng"
            className="w-full h-full object-cover scale-150 -translate-y-4"
          />
        </div>
        <PixelSimba />
      </div>

      {/* Name and Title */}
      <div>
        <h1 className="text-3xl font-semibold text-white tracking-tight">
          Edward Feng
        </h1>
        <p className="text-sm mt-2 text-gray-300">
          Machine Learning Engineer
        </p>
      </div>

      {/* Open to work badge */}
      <div className="mt-4 flex items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest text-white uppercase">
            Open to work
          </span>
        </div>
      </div>
      
      {/* Location */}
      <div className="mb-10 mt-4 flex items-center gap-2 text-gray-400 lg:mb-20">
        <MapPin size={16} />
        <span className="text-sm">Cary, NC</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 lg:block lg:space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="group flex items-center gap-4">
                {/* Dynamic Line */}
                <span 
                  className={`h-px transition-all duration-300 
                    ${isActive ? "w-16 bg-teal-300" : "w-8 bg-zinc-600"} 
                    group-hover:w-16 group-hover:bg-white`}
                ></span>
                
                {/* Dynamic Text */}
                <a 
                  href={`#${item.id}`}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 
                    ${isActive ? "text-white" : "text-zinc-500"} 
                    group-hover:text-white`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function PixelSimba() {
  return (
    <div className="pixel-simba" aria-label="Pixel art Simba walking right">
      <span className="pixel-simba-tail" />
      <span className="pixel-simba-body" />
      <span className="pixel-simba-head" />
      <span className="pixel-simba-ear pixel-simba-ear-left" />
      <span className="pixel-simba-ear pixel-simba-ear-right" />
      <span className="pixel-simba-eye" />
      <span className="pixel-simba-nose" />
      <span className="pixel-simba-leg pixel-simba-leg-back" />
      <span className="pixel-simba-leg pixel-simba-leg-front" />
    </div>
  )
}
