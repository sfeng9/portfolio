import { useState } from "react"

const skillCategories = [
  {
    label: "Machine Learning",
    skills: [
      "1D CNN",
      "CLAHE",
      "CNN-LSTM",
      "Matplotlib",
      "NumPy",
      "OpenCV",
      "Pandas",
      "PyDriller",
      "PyTorch",
      "Python",
      "RootSIFT",
      "Scikit-learn",
      "SMOTE",
      "TensorFlow",
    ],
  },
  {
    label: "Software Engineering",
    skills: [
      "Docker",
      "Express",
      "Git",
      "HTML/CSS",
      "IndexedDB",
      "Java",
      "JavaScript",
      "Jenkins",
      "Jest",
      "Material UI",
      "Node.js",
      "React",
      "REST APIs",
      "TypeScript",
    ],
  },
  {
    label: "Database Systems",
    skills: [
      "Database Triggers",
      "Git Mining",
      "MariaDB",
      "MySQL",
      "Offline Sync",
      "Pandas",
      "Sequelize",
      "SQL",
      "Stored Procedures",
    ],
  },
  {
    label: "Parallel Systems",
    skills: [
      "Apache Hadoop",
      "Apache Spark",
      "C",
      "CUDA",
      "Multi-node GPU Training",
      "NCSU ARC Cluster",
      "OpenACC",
      "OpenMP",
      "SLURM",
      "TensorFlow",
    ],
  },
  {
    label: "Other",
    skills: [
      "Docker",
      "Excel",
      "Git",
      "Matlab",
      "OAuth",
      "PKCE",
      "R",
      "SLURM",
      "Snyk",
      "SonarQube",
      "Vercel",
      "Wireshark",
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].label)
  const activeSkills =
    skillCategories.find((category) => category.label === activeCategory)
      ?.skills ?? []

  return (
    <section id="skills" className="mb-32">
      <h2 className="mb-2 text-lg font-bold tracking-widest text-white">
        Skills
      </h2>
      <div className="mb-10 mt-2 h-1 w-12 rounded-full bg-white"></div>

      <div className="mb-6 flex flex-wrap gap-3 px-1">
        {skillCategories.map((category) => {
          const isActive = activeCategory === category.label
          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveCategory(category.label)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-teal-300 bg-teal-300 text-zinc-950"
                  : "border-zinc-800 bg-zinc-900/50 text-gray-300 hover:border-teal-300/60 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-3 p-4">
        {activeSkills.map((skill) => (
          <span
            key={skill}
            className="cursor-default rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-teal-300/60 hover:bg-zinc-800 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.22)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
