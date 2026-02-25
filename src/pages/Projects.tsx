import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="mb-32 grid gap-8 grid-cols-1 md:grid-cols-2">
      <h2 className="text-lg tracking-widest font-bold text-white">
        Projects
        <div className="w-12 h-1 bg-white mt-2 mb-8 rounded-full"></div> 
      </h2>
      
      <br></br>
      <p className="leading-7 text-gray-400 p-4">
      <ProjectCard
        title="Distributed Pipeline"
        description="Spark microservices for large data processing"
        tech="Java, Spark, MySQL"
        repo="https://github.com/yourname/project1"
      />
      </p>
    </section>
  )
}
