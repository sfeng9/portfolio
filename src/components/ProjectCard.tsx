import { ExternalLink } from "lucide-react"

export type Project = {
  title: string
  description: string
  skills: string[]
  repo?: string
  screenshots?: string[]
  writeup?: {
    overview: string
    highlights?: string[]
    sections: {
      title: string
      content: string[]
    }[]
  }
}

type Props = {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex min-h-64 w-full flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-950/70 p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/60 hover:bg-zinc-900 hover:shadow-[0_0_24px_rgba(45,212,191,0.18)]"
    >
      <div>
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-teal-100">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-400">
          {project.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-teal-200" />
      </div>
    </button>
  )
}
