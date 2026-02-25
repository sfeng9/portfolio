export default function Skills() {
  const languageList = [
    "Java", "Python", "SQL", "JavaScript", "C", "CUDA", "R", "Matlab", 
    "HTML/CSS", "TypeScript"
  ];
  const toolList = [
    "Node.js", "React.js", "AngularJS", "Flask", "NumPy", "Pandas", "Matplotlib",
    "Docker", "Jest", "Scikit-learn", "Git", "Wireshark", "SonarQube", "Snyk",
    "Apache Hadoop", "Apache Spark", "OpenMP", "OpenACC", "Tensorflow", "PyTorch", "OpenCV", "Vercel"
  ];

  return (
    <section id="skills" className="mb-32">
      <h2 className="text-lg tracking-widest font-bold mb-2 text-white">
        Skills
      </h2>
      <div className="w-12 h-1 bg-white mt-2 mb-10"></div> 

      <h1 className="text-sm font-semibold text-gray-400 mt-4 mb-2 p-4">Programming Languages</h1>
      <div className="flex flex-wrap gap-3 p-8">
        {languageList.map((skill) => (
          <span
            key={skill}
            className="
              px-5 py-2 
              rounded-full 
              bg-zinc-900/50 
              border border-zinc-800 
              text-gray-300 
              text-sm font-medium
              transition-all duration-300 ease-in-out
              cursor-default
              /* The Glow Effects on Hover */
              hover:text-white 
              hover:border-violet-500/50 
              hover:bg-zinc-800
              hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
              hover:-translate-y-0.5
            "
          >
            {skill}
          </span>
        ))}
      </div>
      <h1 className="text-sm font-semibold text-gray-400 mt-4 mb-2 p-4">Tools & Frameworks</h1>
      <div className="flex flex-wrap gap-3 p-8">
        {toolList.map((skill) => (
          <span
            key={skill}
            className="
              px-5 py-2 
              rounded-full 
              bg-zinc-900/50 
              border border-zinc-800 
              text-gray-300 
              text-sm font-medium
              transition-all duration-300 ease-in-out
              cursor-default
              /* The Glow Effects on Hover */
              hover:text-white 
              hover:border-violet-500/50 
              hover:bg-zinc-800
              hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
              hover:-translate-y-0.5
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}