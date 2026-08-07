# Project Writeup Guide

Write project content in `src/data/projects.ts`.

For each project:

- Keep `description` as the short card summary.
- Add your casual popup text in `writeup.intro`.
- Add quick notes in `writeup.bullets`.
- Add longer sections in `writeup.sections`.
- Put images in the matching `public/projects/<slug>/` folder.
- Add image paths to section-level `screenshots` if you want them between text.
- Add image paths to the top-level `screenshots` if you want them at the end.

Example:

```ts
writeup: {
  intro: "I built this for my senior design project with a team of five. We worked with the NCSU Christmas Tree Genetics lab to improve their research tracking system.",
  bullets: [
    "I focused on backend testing, documentation, and parts of the offline workflow.",
    "The screenshot below shows the field work dashboard we redesigned.",
  ],
  sections: [
    {
      title: "What I Built",
      body: [
        "A more casual paragraph can go here.",
        "A second paragraph can go here if you want more detail.",
      ],
      screenshots: [
        "/projects/christmas-tree-database/dashboard.png",
      ],
    },
  ],
},
screenshots: [
  "/projects/christmas-tree-database/final-demo.png",
],
```
