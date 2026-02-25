export default function Contact() {
  return (
    <section id="contact" className="mb-32">
      <h2 className="text-lg tracking-widest font-bold mb-2 text-white">
        Contacts
      </h2>
      <div className="w-12 h-1 bg-white mt-2 mb-8 rounded-full"></div> 
      <p className="leading-7 text-gray-400 p-4">
        <ul className="space-y-6 text-xs  tracking-wide">
          <li className="leading-7 text-gray-400">
            <strong>Email:</strong> sfeng9@ncsu.edu
          </li>
          <li className="leading-7 text-gray-400">
           <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/edward-feng-57b365230/" className="text-blue-500">linkedin.com/in/edward-feng</a>
          </li>
          <li className="leading-7 text-gray-400">
           <strong>GitHub:</strong> <a href="https://github.com/sfeng9" className="text-blue-500">github.com/sfeng9</a> 
          </li>
        </ul>
      </p>
    </section>
  )
}