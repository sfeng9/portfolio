import { Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  {
    label: "Email Edward",
    href: "mailto:sfeng9@ncsu.edu",
    icon: Mail,
  },
  {
    label: "Edward Feng on LinkedIn",
    href: "https://www.linkedin.com/in/edward-feng-57b365230/",
    icon: Linkedin,
  },
  {
    label: "Edward Feng on GitHub",
    href: "https://github.com/sfeng9",
    icon: Github,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="mb-32">
      <h2 className="mb-2 text-lg font-bold tracking-widest text-white">
        Contacts
      </h2>
      <div className="mb-8 mt-2 h-1 w-12 rounded-full bg-white"></div>

      <div className="flex gap-4 p-4">
        {contactLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/60 hover:bg-zinc-800 hover:text-teal-100 hover:shadow-[0_0_20px_rgba(45,212,191,0.22)]"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </section>
  )
}
