import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="p-8 grid gap-8 grid-cols-1 md:grid-cols-2">
      <ProjectCard
        title="Distributed Pipeline"
        description="Spark microservices for large data processing"
        tech="Java, Spark, MySQL"
        repo="https://github.com/yourname/project1"
      />
    </section>
  )
}