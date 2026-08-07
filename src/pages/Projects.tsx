import { useMemo, useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, Github, X } from "lucide-react"
import ProjectCard from "../components/ProjectCard"
import { projectCategories, type Project } from "../data/projects"

const pageSize = 3

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].label)
  const [page, setPage] = useState(0)
  const [swipeDirection, setSwipeDirection] = useState<"next" | "previous">("next")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const activeProjects = useMemo(
    () =>
      projectCategories.find((category) => category.label === activeCategory)
        ?.projects ?? [],
    [activeCategory],
  )

  const visibleProjects = activeProjects.slice(page, page + pageSize)
  const canGoBack = page > 0
  const canGoForward = page + pageSize < activeProjects.length

  const setCategory = (label: string) => {
    setActiveCategory(label)
    setPage(0)
    setSwipeDirection("next")
  }

  const goToPreviousPage = () => {
    setSwipeDirection("previous")
    setPage((current) => Math.max(0, current - pageSize))
  }

  const goToNextPage = () => {
    setSwipeDirection("next")
    setPage((current) => current + pageSize)
  }

  return (
    <section id="projects" className="mb-32">
      <h2 className="text-lg font-bold tracking-widest text-white">
        Projects
      </h2>
      <div className="mb-8 mt-2 h-1 w-12 rounded-full bg-white"></div>

      <div className="mb-8 flex flex-wrap gap-3 px-1">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category.label
          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setCategory(category.label)}
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

      <div className="overflow-hidden">
        <div
          key={`${activeCategory}-${page}`}
          className={`grid gap-5 md:grid-cols-3 ${
            swipeDirection === "next"
              ? "project-cards-swipe-next"
              : "project-cards-swipe-previous"
          }`}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <CarouselButton
          label="Previous projects"
          disabled={!canGoBack}
          onClick={goToPreviousPage}
        >
          <ChevronLeft className="h-5 w-5" />
        </CarouselButton>
        <CarouselButton
          label="Next projects"
          disabled={!canGoForward}
          onClick={goToNextPage}
        >
          <ChevronRight className="h-5 w-5" />
        </CarouselButton>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

function CarouselButton({
  children,
  disabled,
  label,
  onClick,
}: {
  children: ReactNode
  disabled: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
        disabled
          ? "cursor-not-allowed border-zinc-800 bg-zinc-800 text-zinc-600"
          : "border-zinc-700 bg-zinc-900 text-gray-300 hover:border-teal-300/70 hover:bg-zinc-800 hover:text-teal-200"
      }`}
    >
      {children}
    </button>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const hasWriteup =
    Boolean(project.writeup?.intro) ||
    Boolean(project.writeup?.bullets?.length) ||
    Boolean(project.writeup?.sections?.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-10"
      onClick={onClose}
    >
      <article
        className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-zinc-800 bg-[#0f0f0f] p-6 text-left shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-gray-400">{project.description}</p>
          </div>
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-gray-300 transition-colors hover:border-teal-300/60 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {hasWriteup ? (
          <div className="mt-8 space-y-7">
            {project.writeup?.intro ? (
              <section>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-teal-200">
                  Project Story
                </h4>
                <p className="mt-3 leading-7 text-gray-300">
                  {project.writeup.intro}
                </p>
              </section>
            ) : null}

            {project.writeup?.bullets?.length ? (
              <section>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Notes
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.writeup.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l border-teal-300/40 pl-4 leading-7 text-gray-300"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.writeup?.sections?.map((section) => (
              <section key={section.title}>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  {section.title}
                </h4>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.screenshots?.length ? (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {section.screenshots.map((screenshot) => (
                      <img
                        key={screenshot}
                        src={screenshot}
                        alt={`${project.title} ${section.title} screenshot`}
                        className="rounded-lg border border-zinc-800 object-cover"
                      />
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Skills Used
          </h4>
          <div className="mt-3 flex flex-wrap gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-teal-300/60 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {project.screenshots?.length ? (
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Screenshots
            </h4>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <img
                  key={screenshot}
                  src={screenshot}
                  alt={`${project.title} screenshot`}
                  className="rounded-lg border border-zinc-800 object-cover"
                />
              ))}
            </div>
          </div>
        ) : null}

        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-teal-300/60 hover:text-teal-100"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        ) : null}
      </article>
    </div>
  )
}
