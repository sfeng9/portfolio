import { BadgeCheck, Cloud } from "lucide-react"

export default function Certifications() {
  return (
    <section id="certifications" className="mb-32">
      <h2 className="mb-2 text-lg font-bold tracking-widest text-white">
        Certifications
      </h2>
      <div className="mb-8 mt-2 h-1 w-12 rounded-full bg-white"></div>

      <article className="flex flex-col gap-5 rounded-lg border border-zinc-800 bg-zinc-950/70 p-5 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-teal-200">
          <Cloud className="h-7 w-7" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                AWS Certified Cloud Practitioner
                <BadgeCheck className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              </h3>
              <p className="mt-1 text-sm font-medium text-teal-200">
                Amazon Web Services Training and Certification
              </p>
            </div>
            <div className="shrink-0 text-sm leading-6 text-gray-500 sm:text-right">
              <p>Issued Jun 2024</p>
              <p>Expires Jun 2027</p>
            </div>
          </div>

          <div className="mt-5 border-t border-zinc-800 pt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Credential ID
            </p>
            <p className="mt-2 break-all font-mono text-xs text-gray-300">
              1edbd5b231224ea5b8c15f904dbaa056
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
