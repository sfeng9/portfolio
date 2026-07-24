export default function Education() {
  return (
    <section id="education" className="mb-32">
      <h2 className="text-lg tracking-widest font-bold mb-2 text-white">
        Education
      </h2>
      <div className="w-12 h-1 bg-white mt-2 mb-8 rounded-full"></div> 
      <div className="space-y-8 p-4">
        <article>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-white">
              M.S. in Computer Science
            </h3>
            <span className="text-sm text-gray-500">May 2026</span>
          </div>
          <p className="mt-1 text-sm font-medium text-teal-200">
            North Carolina State University
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-400">
            Graduate GPA: 3.567
          </p>
        </article>

        <article>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-white">
              B.S. in Computer Science
            </h3>
            <span className="text-sm text-gray-500">May 2025</span>
          </div>
          <p className="mt-1 text-sm font-medium text-teal-200">
            North Carolina State University
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-400">
            Undergraduate GPA: 3.900
          </p>
        </article>
      </div>
    </section>
  )
}
