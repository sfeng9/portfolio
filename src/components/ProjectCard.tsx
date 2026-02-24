type Props = {
  title: string
  description: string
  tech: string
  repo: string
}

export default function ProjectCard({ title, description, tech, repo }: Props) {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <p className="mt-2 font-semibold text-sm text-gray-600">{tech}</p>
      <a href={repo} target="_blank" className="mt-2 text-blue-500">
        View on GitHub
      </a>
    </div>
  )
}