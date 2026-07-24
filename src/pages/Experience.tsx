export default function Experience() {
  return (
    <section id="experience" className="mb-32">
      <h2 className="text-lg tracking-widest font-bold mb-2 text-white">
        Experience
      </h2>
      <div className="w-12 h-1 bg-white mt-2 mb-8 rounded-full"></div> 
      <div className="space-y-8 p-4">
        <article>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-white">
              Software Developer Intern
            </h3>
            <span className="text-sm text-gray-500">Jun. 2024 -- Aug. 2024</span>
          </div>
          <p className="mt-1 text-sm font-medium text-teal-200">
            Hiii Tech | Launch Chapel Hill
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-400">
            <li>
              Developed e-commerce features using Shopify and JavaScript to scale digital business solutions.
            </li>
          </ul>
        </article>

        <article>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-white">
              60mm Mortar Squad Leader
            </h3>
            <span className="text-sm text-gray-500">
              Jun. 2022 -- Aug. 2022; Jun. 2023 -- Aug. 2023
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-teal-200">
            Republic of China Army
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-400">
            <li>
              Completed mandatory military training and served as a 60mm mortar squad leader.
            </li>
            <li>
              Coordinated small-team field exercises, equipment readiness, and safety-focused communication under structured training conditions.
            </li>
          </ul>
        </article>

        <article>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-white">
              Undergraduate Teaching Assistant
            </h3>
            <span className="text-sm text-gray-500">Jan. 2022 -- May 2022</span>
          </div>
          <p className="mt-1 text-sm font-medium text-teal-200">
            NCSU Department of Computer Science
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-400">
            <li>
              Mentored 57 students in Java-based programming fundamentals and hosted 6 hours of weekly office hours for technical guidance.
            </li>
            <li>
              Collaborated with faculty to manage grading and content delivery for introductory computer science courses.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
