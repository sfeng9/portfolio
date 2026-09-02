// Edit portfolio project content here.
// `description` is the short card summary. Keep it concise.
// `writeup` is the casual modal story you can fill in yourself.
// Put images under `public/projects/<slug>/` or import them from `src/images`,
// then list them in `screenshots`.

import pixelmp3Main from "../images/PixelMP3/pixelmp3_main.png"
import pixelmp3Minimized from "../images/PixelMP3/pixelmp3_minimized.png"
import pixelmp3Playing from "../images/PixelMP3/pixelmp3_playing.png"
import pixelmp3Songlist from "../images/PixelMP3/pixelmp3_songlist.png"

export type ProjectWriteupSection = {
  title: string
  body: string[]
  screenshots?: string[]
}

export type ProjectWriteup = {
  intro?: string
  bullets?: string[]
  sections?: ProjectWriteupSection[]
}

export type Project = {
  slug: string
  title: string
  description: string
  skills: string[]
  imageFolder: string
  repo?: string
  screenshots?: string[]
  writeup?: ProjectWriteup
}

export type ProjectCategory = {
  label: string
  projects: Project[]
}

const projectsBySlug: Record<string, Project> = {
  "emotion-recognition-ppg": {
    slug: "emotion-recognition-ppg",
    title: "Emotion Recognition from PPG Signals",
    description:
      "Developed an emotion classification pipeline for raw PPG signals from the WESAD dataset using 1D CNN and CNN-LSTM architectures. Added 4th-order Butterworth filtering and Leave-One-Subject-Out cross-validation to support subject-independent evaluation.",
    skills: ["Python", "PyTorch", "CNN-LSTM", "1D CNN", "NumPy", "Pandas", "WESAD"],
    imageFolder: "/projects/emotion-recognition-ppg",
    screenshots: [
      "/projects/emotion-recognition-ppg/ppg_filter_comparison.png",
      "/projects/emotion-recognition-ppg/confusion_matrix_cnn.png",
      "/projects/emotion-recognition-ppg/cnn_training_loss.png",
      "/projects/emotion-recognition-ppg/feature_importance_rf.png",
    ],
    writeup: {
      intro:
        "I did this project for my Ubiquitous Computing & Mobile Health class. The idea was to see if we could use wearable-style PPG signals, basically the kind of pulse data you can get from health devices, to classify emotional or physiological states from the WESAD dataset.",
      bullets: [
        "I worked on the full pipeline: cleaning the raw signal, breaking it into windows, training models, and comparing the results.",
        "The project was a mix of signal processing and machine learning, so it was a good chance to connect health data with practical model evaluation.",
        "The screenshots show the filter comparison, CNN confusion matrix, CNN training loss, and Random Forest feature importance.",
      ],
      sections: [
        {
          title: "Tech Stack",
          body: [
            "I used Python with PyTorch for the deep learning models, plus NumPy, Pandas, and Matplotlib for preprocessing, data handling, and plotting. The signal cleanup used a 4th-order Butterworth filter, and the models included a 1D CNN and a CNN-LSTM.",
          ],
        },
        {
          title: "What It Does",
          body: [
            "The pipeline takes raw PPG/BVP signals, filters out noise, slices the signal into usable windows, and trains models to recognize patterns tied to stress and other emotional states. I also used Leave-One-Subject-Out validation so the evaluation was closer to testing on a new person instead of just memorizing the people already in the training set.",
          ],
        },
        {
          title: "Results",
          body: [
            "The 1D CNN ended up being the strongest model overall, reaching about 65% accuracy and very high stress recall. The main takeaway was that even a fairly simple deep learning model can pick up useful physiological patterns from cleaned PPG data, but generalizing across people is still the hard part.",
          ],
        },
      ],
    },
  },
  "fingerprint-authentication-system": {
    slug: "fingerprint-authentication-system",
    title: "Fingerprint Authentication System",
    description:
      "Developed a 1:N open-set identification system for 500 identities using RootSIFT descriptors and global intensity histograms. Achieved a 0.95 AUC with hybrid scoring plus CLAHE and Median Blur preprocessing.",
    skills: ["OpenCV", "Python", "RootSIFT", "CLAHE", "Median Blur", "Biometrics"],
    imageFolder: "/projects/fingerprint-authentication-system",
    screenshots: [],
    writeup: {
      intro:
        "I built this for my Cyber-Physical Systems for Biometrics class with Jaewoo Bae. The goal was to make a fingerprint identification system that could enroll users, compare a new fingerprint against the database, and still say unknown when the match was not strong enough.",
      bullets: [
        "The main challenge was making the matching reliable enough for open-set identification instead of forcing every probe into an enrolled identity.",
        "I liked this project because it was not just training a black-box model. A lot of the result came from preprocessing, feature extraction, scoring logic, and threshold tuning.",
      ],
      sections: [
        {
          title: "Input Data",
          body: [
            "The system works with fingerprint images split into train, test, and validation folders. The train images are used to enroll identities, and the test images are used as probes for 1:N identification.",
          ],
          screenshots: [
            "/projects/fingerprint-authentication-system/sample-fingerprint.png",
          ],
        },
        {
          title: "Tech Stack",
          body: [
            "I used Python with OpenCV for image processing, Scikit-Image and Scikit-learn for feature and evaluation utilities, NumPy for array work, and Matplotlib/Seaborn for the plots.",
          ],
        },
        {
          title: "How It Works",
          body: [
            "The pipeline first cleans up the fingerprint with Median Blur and CLAHE so the ridge patterns are easier to match. Then it extracts RootSIFT descriptors for local ridge features and combines that with a global intensity histogram for a second similarity signal.",
            "For the final decision, it uses hybrid scoring plus open-set threshold and margin logic. In plain terms, the best match has to be strong enough, and it also has to be clearly better than the second-best match.",
          ],
          screenshots: [
            "/projects/fingerprint-authentication-system/confusion_matrix.png",
          ],
        },
        {
          title: "Results",
          body: [
            "The system reached a 0.95 AUC, which was a strong result for separating genuine matches from imposters. The final evaluation also reports accuracy, precision, recall, and F1 so it is easier to see the tradeoffs beyond a single score.",
          ],
          screenshots: [
            "/projects/fingerprint-authentication-system/roc_curve.png",
            "/projects/fingerprint-authentication-system/evaluation_plot.png",
          ],
        },
      ],
    },
  },
  "defect-prediction-risk-modeling-tool": {
    slug: "defect-prediction-risk-modeling-tool",
    title: "Defect Prediction Risk Modeling Tool",
    description:
      "Built a repository-mining defect predictor that scored file-level bug risk from commit history, code churn, complexity, ownership, and recency signals. Normalized features and optimized weights against ground truth, improving prediction accuracy from 0.66 to 0.74.",
    skills: ["Python", "PyDriller", "Scikit-learn", "MinMaxScaler", "Static Analysis", "Git Mining"],
    imageFolder: "/projects/defect-prediction-risk-modeling-tool",
    screenshots: [],
    writeup: {
      intro: "",
      bullets: [],
      sections: [],
    },
  },
  "distributed-cnn-training": {
    slug: "distributed-cnn-training",
    title: "Distributed CNN Training",
    description:
      "Parallelized CIFAR-10 CNN training with TensorFlow MultiWorkerMirroredStrategy for synchronous training on an HPC cluster. Optimized GPU utilization with SLURM and improved accuracy from 61.6% to 73.4% through distributed scaling.",
    skills: ["TensorFlow", "Python", "SLURM", "CUDA", "Multi-node GPU Training"],
    imageFolder: "/projects/distributed-cnn-training",
    screenshots: [],
    writeup: {
      intro: "",
      bullets: [],
      sections: [],
    },
  },
  "running-prediction": {
    slug: "running-prediction",
    title: "Running Prediction",
    description:
      "Built a data science pipeline using Strava running data to predict race finish times and classify run types. Cleaned and analyzed 43 activities with pace, distance, heart-rate, elevation, power, cadence, and shoe data, then evaluated linear regression and decision-tree models with cross-validation and performance visualizations.",
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Linear Regression", "Decision Tree"],
    imageFolder: "/projects/running-prediction",
    repo: "https://github.com/sfeng9/DSC412-project-edward-feng",
    screenshots: [],
    writeup: {
      intro: "",
      bullets: [],
      sections: [],
    },
  },
  "real-time-facial-hand-recognition": {
    slug: "real-time-facial-hand-recognition",
    title: "Real-time Facial & Hand Recognition",
    description:
      "Architected and trained CNNs with PyTorch, using NumPy and Pandas for dataset preprocessing and augmentation. Built OpenCV webcam pipelines for live face and hand detection.",
    skills: ["PyTorch", "OpenCV", "Python", "NumPy", "Pandas"],
    imageFolder: "/projects/real-time-facial-hand-recognition",
    screenshots: [],
    writeup: {
      intro: "",
      bullets: [],
      sections: [],
    },
  },
  "pixelmp3": {
    slug: "pixelmp3",
    title: "PixelMP3",
    description:
      "Developed a cross-platform desktop music player with Electron and React, featuring a custom pixel-art interface and secure OAuth + PKCE authentication flow. Integrated Spotify Web Playback SDK and REST APIs for real-time playback and token refreshing.",
    skills: ["Electron", "React", "JavaScript", "OAuth", "PKCE", "Spotify API"],
    imageFolder: "/projects/pixelmp3",
    repo: "https://github.com/sfeng9/PixelMP3",
    screenshots: [],
    writeup: {
      intro:
        "PixelMP3 is basically my take on a tiny old-school MP3 player for Spotify. I wanted the controls I use all the time without keeping the full Spotify window open, so I wrapped playlists and Spotify Connect playback in a small pixel-art desktop app.",
      bullets: [
        "Spotify still handles the music; PixelMP3 controls whichever desktop, phone, or speaker is active through Spotify Connect.",
        "I gave it green, blue, amber, and purple themes, plus a compact mode for when I only want the basic controls on screen.",
      ],
      sections: [
        {
          title: "The Player",
          body: [
            "After I log in, the player shows the album art, song and artist, playback progress, and volume. It has the usual play, pause, previous, next, shuffle, and repeat controls, but the whole thing is styled like a little piece of retro hardware.",
          ],
          screenshots: [pixelmp3Main, pixelmp3Playing],
        },
        {
          title: "Playlists",
          body: [
            "I can browse my Spotify playlists inside the app, search through the songs, and click a track to start playing it on my active Spotify device. That keeps the app small while still giving me the part of Spotify I actually need.",
          ],
          screenshots: [pixelmp3Songlist],
        },
        {
          title: "Compact Mode",
          body: [
            "When I do not need the full player, I can collapse it into a thin strip with the current song, progress bar, and previous, play, and next buttons. It is handy for leaving the player in a corner while I work.",
          ],
          screenshots: [pixelmp3Minimized],
        },
        {
          title: "Tech Stack",
          body: [
            "The desktop shell is Electron, and the interface is built with React and Vite. Spotify login uses the Authorization Code flow with PKCE and a small local callback server, so I do not have to ship a Spotify client secret inside the app. Tokens are stored in Electron's local user-data folder and refreshed when needed, while the Spotify Web API handles playlists and playback controls.",
          ],
        },
      ],
    },
  },
  "christmas-tree-database": {
    slug: "christmas-tree-database",
    title: "The Christmas Tree Database",
    description:
      "Built a React, Node.js, and MySQL application for field researchers at NCSU College of Natural Resources. Supported transactional updates, offline synchronization, RESTful endpoints, and Docker-based multi-platform deployment.",
    skills: ["React", "Node.js", "MySQL", "Docker", "REST APIs", "Offline Sync"],
    imageFolder: "/projects/christmas-tree-database",
    screenshots: [],
    writeup: {
      intro: "",
      bullets: [],
      sections: [],
    },
  },
  "inventory-management-system": {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Developed a Python and MySQL system for manufacturers with normalized schemas, role-based access control, and database-layer business logic for FEFO lot selection, traceability tracking, and automated cost calculations.",
    skills: ["Python", "MySQL", "SQL", "RBAC", "Database Design"],
    imageFolder: "/projects/inventory-management-system",
    screenshots: [],
    writeup: {
      intro: "",
      bullets: [],
      sections: [],
    },
  },
  sebastian: {
    slug: "sebastian",
    title: "S.E.B.A.S.T.I.A.N.",
    description:
      "Built a local-first Windows voice assistant with a custom wake word, local speech recognition, Ollama tool calling, and Home Assistant integration for controlling smart-home devices.",
    skills: [
      "Python",
      "Home Assistant",
      "Ollama",
      "Faster Whisper",
      "openWakeWord",
      "Piper",
      "SQLite",
      "REST APIs",
    ],
    imageFolder: "/projects/sebastian",
    repo: "https://github.com/sfeng9/S.E.B.A.S.T.I.A.N",
    screenshots: [],
    writeup: {
      intro:
        "I built Sebastian as a local-first voice assistant for my Windows PC. I wanted something I could wake up by name, talk to naturally, and use for both everyday computer tasks and smart-home controls without sending the main voice pipeline to a cloud assistant.",
      bullets: [
        "It listens for a custom Sebastian wake word, detects when I stop speaking, transcribes the command locally, and speaks the response back.",
        "I connected it to Home Assistant, Gmail, Google Calendar, weather, web search, reminders, and a set of allowlisted PC controls.",
        "I also built confirmation and permission checks around sensitive actions such as shutting down the PC or changing smart-home devices.",
      ],
      sections: [
        {
          title: "Tech Stack",
          body: [
            "The assistant is written in Python. It uses openWakeWord for wake-word detection, Faster Whisper for speech-to-text, Ollama with Qwen for conversation and tool calling, and Piper for text-to-speech. Home Assistant provides the IoT layer, while SQLite stores local notes, tasks, lists, and reminders.",
          ],
        },
        {
          title: "What It Can Do",
          body: [
            "Sebastian can answer questions, check live information, manage my calendar and reminders, control approved Windows apps, and operate configured lights, switches, fans, thermostats, and scenes through Home Assistant. The integrations are separated into tools, so the assistant only gets access to the capability needed for that request.",
          ],
        },
      ],
    },
  },
}

export const projectCategories: ProjectCategory[] = [
  {
    label: "Machine Learning",
    projects: [
      projectsBySlug["emotion-recognition-ppg"],
      projectsBySlug["fingerprint-authentication-system"],
      projectsBySlug["defect-prediction-risk-modeling-tool"],
      projectsBySlug["distributed-cnn-training"],
      projectsBySlug["running-prediction"],
      projectsBySlug["real-time-facial-hand-recognition"],
    ],
  },
  {
    label: "Software Engineering",
    projects: [
      projectsBySlug["sebastian"],
      projectsBySlug["pixelmp3"],
      projectsBySlug["christmas-tree-database"],
      projectsBySlug["inventory-management-system"],
    ],
  },
  {
    label: "Embedded Systems / IoT",
    projects: [projectsBySlug["sebastian"]],
  },
  {
    label: "Database Systems",
    projects: [
      {
        ...projectsBySlug["inventory-management-system"],
        description:
          "Developed a Python and MySQL system for manufacturers with normalized schemas and role-based access control. Implemented FEFO lot selection, traceability tracking, and automated cost calculations at the database layer.",
        skills: ["Python", "MySQL", "SQL", "Normalized Schemas", "RBAC"],
      },
      {
        ...projectsBySlug["christmas-tree-database"],
        description:
          "Built a full-stack field research application with React, Node.js, and MySQL, including transactional updates, offline synchronization, RESTful endpoints, and Dockerized deployment.",
        skills: ["React", "Node.js", "MySQL", "Docker", "Transactions", "REST APIs"],
      },
    ],
  },
  {
    label: "Parallel Systems",
    projects: [
      {
        ...projectsBySlug["distributed-cnn-training"],
        description:
          "Parallelized CIFAR-10 CNN training with TensorFlow MultiWorkerMirroredStrategy for synchronous training on an HPC cluster, using SLURM to improve GPU utilization and distributed scaling.",
        skills: ["TensorFlow", "SLURM", "CUDA", "HPC", "Multi-node GPU Training"],
      },
    ],
  },
]
