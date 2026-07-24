import { useState } from "react"
import { X } from "lucide-react"

const simbaPhotos = Object.entries(
  import.meta.glob("../images/Simba/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, src]) => src as string)

const getSimbaPhotoPosition = (index: number) => {
  if ([11, 12, 15].includes(index)) return "center 15%"
  if ([6, 7, 10].includes(index)) return "center 25%"
  return "center"
}

export default function About() {
  const [isSimbaGalleryOpen, setIsSimbaGalleryOpen] = useState(false)

  return (
    <section id="about" className="mb-32">
      <h2 className="text-lg tracking-widest font-bold mb-2 text-white">
        About
      </h2>
      <div className="w-12 h-1 bg-white mt-2 mb-8 rounded-full"></div> 
      <div className="space-y-8 p-4">
        <article>
          <h3 className="text-base font-semibold text-white">
            Career Objective
          </h3>
          <p className="mt-3 leading-7 text-gray-400">
            I am a Machine Learning Engineer with experience building applied AI systems in biometrics, physiological signal processing, computer vision, and software analytics. I enjoy turning data-heavy problems into reliable pipelines, trained models, and measurable evaluations. I also bring full-stack and database systems experience, which helps me build machine learning work with production-minded software practices.
          </p>
        </article>

        <article>
          <h3 className="text-base font-semibold text-white">Beyond Work</h3>
          <p className="mt-3 leading-7 text-gray-400">
            Outside of engineering, I spend a lot of time around gaming, fashion, photography, strength training, running, biking, rock climbing, and making coffee or matcha. Swimming is on the list of habits I want to build next.
          </p>
          <p className="mt-3 leading-7 text-gray-400">
            I also have a cat named Simba, who deserves his own corner of the portfolio.
          </p>
          {simbaPhotos.length ? (
            <button
              type="button"
              onClick={() => setIsSimbaGalleryOpen(true)}
              className="mt-4 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-100 hover:shadow-[0_0_20px_rgba(45,212,191,0.18)]"
            >
              Simba Gallery
            </button>
          ) : null}
        </article>
      </div>

      {isSimbaGalleryOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-10"
          onClick={() => setIsSimbaGalleryOpen(false)}
        >
          <article
            className="max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-zinc-800 bg-[#0f0f0f] p-6 text-left shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Simba Gallery
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Simba is the sweetest and nicest cat! However, he's tooooo friendly to strangers. Sometimes I wonder if he even knows I'm his dad, or if he's fine as long as he has food.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close Simba gallery"
                onClick={() => setIsSimbaGalleryOpen(false)}
                className="rounded-full border border-zinc-800 bg-zinc-900 p-2 text-gray-300 transition-colors hover:border-teal-300/60 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {simbaPhotos.map((photo, index) => (
                <img
                  key={photo}
                  src={photo}
                  alt={`Simba photo ${index + 1}`}
                  loading="lazy"
                  style={{ objectPosition: getSimbaPhotoPosition(index) }}
                  className="h-56 w-full rounded-lg border border-zinc-800 object-cover"
                />
              ))}
            </div>
          </article>
        </div>
      ) : null}
    </section>
  )
}
