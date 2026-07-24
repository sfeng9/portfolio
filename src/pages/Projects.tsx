import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Github, X } from "lucide-react"
import ProjectCard, { type Project } from "../components/ProjectCard"

type ProjectCategory = {
  label: string
  projects: Project[]
}

const inventoryManagementWriteup: NonNullable<Project["writeup"]> = {
  overview:
    "This CSC540 Database Management Systems project was a production-style inventory management system for prepared and frozen meals manufacturers. Built with Pranav V, Christopher Dillon Michels, Anandteertha Ramesh Rao, and Edward Feng, the system combined a Python CLI with a MySQL/MariaDB database to manage products, ingredients, suppliers, manufacturers, batches, recipes, inventory, and traceability workflows.",
  highlights: [
    "Designed role-based workflows for manufacturers, suppliers, and general viewers through a menu-driven Python CLI.",
    "Built normalized MySQL/MariaDB schemas for users, products, ingredients, formulations, recipe plans, batches, consumption, and incompatibility rules.",
    "Implemented database-level business logic with stored procedures and triggers for FEFO lot selection, expiration validation, inventory updates, lot numbering, and batch cost recalculation.",
    "Added graduate-level features for recall traceability, ingredient incompatibility checking, product comparison, and analytical query reporting.",
  ],
  sections: [
    {
      title: "Problem",
      content: [
        "Prepared and frozen meals manufacturers need to track ingredients, recipes, suppliers, lots, product batches, costs, expiration dates, and recalls with stronger guarantees than a simple spreadsheet can provide. The project modeled those workflows as a database-backed inventory system where critical rules are enforced consistently.",
        "The application had to support multiple user roles. Manufacturers needed product, recipe, production, inventory, cost, and recall workflows; suppliers needed ingredient and formulation management; general viewers needed product browsing, flattened ingredient lists, and product incompatibility comparisons.",
      ],
    },
    {
      title: "Database Design",
      content: [
        "The schema centered on normalized entities such as UserDetails, Product, Ingredient, IngredientFormulation, ProductBOM, RecipePlan, IngredientBatch, ProductBatch, IngredientConsumption, and IngredientIncompatibility. This structure separated product definitions, supplier-specific ingredient formulations, versioned recipes, inventory lots, and production output.",
        "Versioned recipe plans and ingredient formulations made the system more realistic because recipes and supplier formulations can change over time. The data model also supported one-level compound ingredient composition, allowing ingredients to be made from other ingredients while still preserving traceability.",
      ],
    },
    {
      title: "Role-Based Workflows",
      content: [
        "Manufacturer workflows included creating product types, maintaining recipe plans, recording ingredient receipts, creating production batches, consuming ingredient lots, generating inventory reports, calculating batch costs, and tracing affected batches during recalls.",
        "Supplier workflows included managing supplied ingredients, creating or updating ingredient definitions, maintaining versioned formulations, managing do-not-combine rules, and receiving ingredient batches with automatic lot numbering. General viewer workflows focused on browsing products, generating flattened ingredient lists, and comparing products for ingredient conflicts.",
      ],
    },
    {
      title: "Business Logic",
      content: [
        "The project intentionally pushed core business rules into the database layer with stored procedures and triggers. Stored procedures handled production batch creation, ingredient intake, ingredient lot consumption, and batch cost recalculation.",
        "Triggers automated ingredient lot numbers, enforced expiration rules, prevented expired ingredient consumption, maintained inventory on-hand quantities, and validated user roles for manufacturer and supplier operations. This reduced the risk of invalid state even when actions passed through different application menus.",
      ],
    },
    {
      title: "Graduate Features",
      content: [
        "FEFO lot selection prioritized the earliest expiring ingredient batches during production, which is critical for perishable inventory. Recall and traceability workflows mapped ingredient lots to affected product batches so the system could identify what production output would be impacted by a recall.",
        "Ingredient incompatibility support allowed the system to detect conflicts during recipe creation and product comparison. This made the database useful not just for storage, but also for enforcing safety and compatibility constraints.",
      ],
    },
    {
      title: "Analytics And Queries",
      content: [
        "The query module included five predefined analytical queries: listing ingredients and lot numbers for the last Steak Dinner batch, supplier spending analysis for a manufacturer, unit cost lookup for a product lot, conflict detection for a product lot, and supplier coverage analysis.",
        "These reports demonstrated how the normalized schema could answer practical operational questions about cost, sourcing, traceability, and ingredient compatibility.",
      ],
    },
    {
      title: "Outcome",
      content: [
        "The final system delivered a complete Python and MySQL/MariaDB application with setup scripts, sample data, stored procedures, triggers, environment-based configuration, and a menu-driven CLI. The database setup workflow could drop and recreate the schema, load business logic, and seed sample data for demos.",
        "This project strengthened my experience designing relational schemas, enforcing business constraints at the database layer, writing stored procedures and triggers, and connecting a Python application to operational SQL workflows.",
      ],
    },
  ],
}

const christmasTreeDatabaseWriteup: NonNullable<Project["writeup"]> = {
  overview:
    "This CSC 492 senior design project enhanced ROOTS 3.0, the Research Operation Organization and Tracking System for NCSU's College of Natural Resources Whitehill Lab and Christmas Tree Genetics program. Built with Gabe Burkett, Nick Gallo, Huy Nguyen, and Benjy Phillips, the project extended a database-centric web application used to track Fraser Fir research material, lifecycle data, genealogy, locations, alerts, and field workflows.",
  highlights: [
    "Built on a React, Node.js, Express, Sequelize, and MySQL application used by Christmas Tree Genetics researchers.",
    "Focused the ROOTS 3.0 release on offline field workflows so researchers could collect and manage plant material data without internet access.",
    "Improved the user experience with a new home flow for Field Work, Lab Work, and Archived Data, plus clearer navigation and descriptive controls.",
    "Contributed backend development, lead testing, notetaking, and IT management; authored the testing strategy and acceptance test coverage for navigation, offline behavior, sync, scheduling, and conflict handling.",
  ],
  sections: [
    {
      title: "Problem",
      content: [
        "The Whitehill Lab's Christmas Tree Genetics program tracks plant material across a long research lifecycle, including seeds, cones, ramets, trees, locations, species, genealogy, lifecycle stages, media, photos, notes, files, reports, and QR-code based identification. Earlier versions of ROOTS replaced spreadsheet workflows with a centralized web application, but researchers still needed stronger support for field work.",
        "A major gap was offline use. Researchers often collect specimen data in field locations without reliable internet, so the system needed a way to add, view, and eventually edit or delete records offline, then synchronize changes back to the central database when connectivity returned.",
      ],
    },
    {
      title: "System Architecture",
      content: [
        "ROOTS 3.0 was organized around four major directories: client, server, notification-service, and proxy. The client used React and Material UI for the frontend, while the server used Node.js, Express, Sequelize, and MySQL for API and database operations.",
        "The notification service used Node-Cron and Nodemailer to scan the database for material transfers and email compiled reminders. The proxy layer supported routing and authentication through NCSU Shibboleth, while Docker Compose started the frontend, backend, database, proxy, and database manager containers together.",
      ],
    },
    {
      title: "Offline Field Work",
      content: [
        "The core ROOTS 3.0 requirement was offline data manipulation. The planned workflow allowed researchers to prepare for field work, enter offline mode, collect or manage material data without connectivity, and update the central database when they returned online.",
        "The team also designed a checkout-style conflict mitigation strategy. When a user takes a resource offline, the online system can prevent conflicting edits to that same resource until it is checked back in, reducing the risk of overwriting field updates.",
      ],
    },
    {
      title: "User Experience",
      content: [
        "The frontend overhaul reorganized ROOTS around clearer researcher workflows. The home menu gave users direct choices for Field Work, Lab Work, and Archived Data, with Field Work branching into online or offline paths.",
        "The UI changes emphasized descriptive buttons, consistent back navigation, and workflow grouping so researchers could move through field and lab tasks with less ambiguity. Sponsor feedback from weekly meetings helped guide these usability changes.",
      ],
    },
    {
      title: "Research Data Model",
      content: [
        "ROOTS functions as a laboratory information management system for plant material. It tracks material identity, location, species, year, mother material, lineage, lifecycle stage, media, QR codes, photos, notes, files, and reportable attributes.",
        "The data model supports traceability across generations of plant material, which is essential for Christmas tree genetic research and for understanding how materials move through initiation, maintenance, maturation, cold treatment, germination, acclimation, greenhouse, and field station stages.",
      ],
    },
    {
      title: "Testing",
      content: [
        "The project used Jest for backend unit tests and Clover for coverage reporting, with a 70% minimum coverage target. Existing API endpoint tests from the previous team were kept in scope, and new backend endpoints were validated as they were added.",
        "Because the release included a significant frontend overhaul and time was limited, acceptance testing was used for user-facing behavior. The acceptance test plan covered Field, Lab, and Archive navigation; offline page access; back-button behavior; offline add, edit, and delete flows; sync behavior; notification scheduling; invalid sync handling; and locked-entry conflict handling.",
      ],
    },
    {
      title: "Outcome",
      content: [
        "The final report delivered updated requirements, design documentation, implementation details, Docker configuration guidance, system diagrams, project structure documentation, and a detailed acceptance testing plan for the ROOTS 3.0 release.",
        "This project strengthened my experience with full-stack systems, backend testing, Dockerized deployment, authenticated research applications, offline-first workflow design, and stakeholder-driven development for a real NCSU research lab.",
      ],
    },
  ],
}

const projectCategories: ProjectCategory[] = [
  {
    label: "Machine Learning",
    projects: [
      {
        title: "Emotion Recognition from PPG Signals",
        description:
          "Developed an emotion classification pipeline for raw PPG signals from the WESAD dataset using 1D CNN and CNN-LSTM architectures. Added 4th-order Butterworth filtering and Leave-One-Subject-Out cross-validation to support subject-independent evaluation.",
        skills: ["Python", "PyTorch", "CNN-LSTM", "1D CNN", "NumPy", "Pandas", "WESAD"],
        writeup: {
          overview:
            "This CSC591 Ubiquitous Computing and Mobile Health project, built with Shazia Muckram, focused on classifying emotional and physiological states from raw BVP/PPG signals in the WESAD dataset. The project compared handcrafted physiological features, classical machine learning, and deep learning architectures to evaluate how well wearable-style signals can support subject-independent emotion recognition.",
          highlights: [
            "Built a full pipeline for WESAD loading, filtering, windowing, feature extraction, training, and evaluation.",
            "Applied a 4th-order Butterworth bandpass filter from 0.5 to 4.0 Hz with zero-phase distortion to clean raw PPG waveforms.",
            "Extracted 18 handcrafted HRV and morphology features, including RMSSD, pNN50, LF/HF, and PPG shape statistics.",
            "Compared Random Forest, 1D CNN, CNN-LSTM, and LOSO Random Forest models; the 1D CNN reached 65.45% accuracy and 97% stress recall.",
          ],
          sections: [
            {
              title: "Problem",
              content: [
                "The project explored whether emotion-related states can be inferred from photoplethysmography signals, which are commonly available through wearable health devices. Instead of relying on images or text, the system worked with physiological time-series data where emotion labels must be inferred from subtle changes in heart-rate variability and waveform structure.",
                "The WESAD dataset provided the foundation for the experiments, with subject-level data stored as pickle files and processed into windows suitable for both feature-based models and neural networks.",
              ],
            },
            {
              title: "Preprocessing",
              content: [
                "Raw BVP/PPG signals were filtered with a 4th-order Butterworth bandpass filter from 0.5 to 4.0 Hz. The filter removed irrelevant low-frequency drift and high-frequency noise while preserving the physiological band where pulse-related information is most useful.",
                "The pipeline then segmented the cleaned signal into analysis windows so the same input preparation could support handcrafted feature extraction, 1D convolutional learning, and temporal sequence modeling.",
              ],
            },
            {
              title: "Feature Engineering",
              content: [
                "The feature extraction module produced 18 handcrafted metrics spanning time-domain HRV, frequency-domain HRV, and PPG morphology. Time-domain features included RMSSD and pNN50, while frequency-domain analysis included LF/HF measurements.",
                "These features made the physiological interpretation more transparent and supported classical machine learning baselines such as Random Forest. SMOTE was used for feature-based models to reduce the impact of class imbalance.",
              ],
            },
            {
              title: "Deep Learning Models",
              content: [
                "The 1D CNN learned directly from filtered waveform windows, allowing the model to discover local temporal patterns without relying only on manually engineered features. This end-to-end model produced the strongest overall result in the experiments.",
                "The CNN-LSTM hybrid combined convolutional feature extraction with recurrent temporal modeling. This architecture was designed to capture both short-term waveform patterns and longer temporal dependencies across the physiological signal.",
              ],
            },
            {
              title: "Evaluation",
              content: [
                "The project used both a fixed subject-level split and Leave-One-Subject-Out cross-validation. LOSO evaluation was especially important because it tested whether the model could generalize to a new person rather than only recognizing patterns from subjects seen during training.",
                "Class imbalance was handled with SMOTE for classical models and class-weighted loss functions for neural networks. Evaluation included accuracy, macro F1, confusion matrices, loss curves, and class-specific recall.",
              ],
            },
            {
              title: "Results",
              content: [
                "The 1D CNN achieved the best overall performance with 65.45% accuracy, 0.5982 macro F1, and 97% recall for stress detection. Random Forest reached 63.64% accuracy and 0.5564 macro F1 while providing stronger interpretability.",
                "The CNN-LSTM reached 64.00% accuracy and 0.5321 macro F1, with an 86% recall highlight for meditation. LOSO Random Forest reached 60.28% accuracy and 0.4855 macro F1, making it the most realistic evaluation setting for new-user generalization.",
              ],
            },
            {
              title: "Outcome",
              content: [
                "The final deliverable was a complete Python research pipeline with modules for data loading, filtering, feature extraction, model definitions, and generated plots. It demonstrated that deep learning on filtered PPG waveforms can outperform feature-based baselines for stress-focused emotion recognition.",
                "This project strengthened my experience with physiological signal processing, class-imbalanced machine learning, subject-independent evaluation, and PyTorch sequence modeling for wearable health data.",
              ],
            },
          ],
        },
      },
      {
        title: "Fingerprint Authentication System",
        description:
          "Developed a 1:N open-set identification system for 500 identities using RootSIFT descriptors and global intensity histograms. Achieved a 0.95 AUC with hybrid scoring plus CLAHE and Median Blur preprocessing.",
        skills: ["OpenCV", "Python", "RootSIFT", "CLAHE", "Median Blur", "Biometrics"],
        writeup: {
          overview:
            "This CSC591 Cyber-Physical Systems for Biometrics project, built with Jaewoo Bae, implements a fingerprint biometric identification system for educational research. The system enrolls users from fingerprint images, extracts local and global features, and performs 1:N open-set identification across 500 identities while rejecting low-confidence probes as unknown.",
          highlights: [
            "Designed an end-to-end enrollment and identification pipeline over train, test, and validation fingerprint image folders.",
            "Enhanced ridge patterns with Median Blur noise reduction and CLAHE contrast normalization before feature extraction.",
            "Implemented RootSIFT descriptors with Hellinger normalization and fused them with global intensity histogram similarity.",
            "Tuned open-set decision logic with a 28.5 score threshold and 1.6 top-match margin, achieving a 0.95 AUC.",
          ],
          sections: [
            {
              title: "Problem",
              content: [
                "The goal was to identify whether a probe fingerprint belongs to one of the enrolled users while still supporting an unknown class for imposters or weak matches. This made the task more realistic than closed-set classification, because the system needed to decide when not to assign an identity.",
                "The dataset organization supported biometric enrollment and evaluation: the train folder provided enrollment images, the test folder provided probe images, and a validation set supported threshold tuning.",
              ],
            },
            {
              title: "Preprocessing",
              content: [
                "Fingerprint images can contain sensor noise, inconsistent contrast, and ridge gaps that make feature matching unstable. The preprocessing stage used Median Blur to reduce local noise while preserving ridge structure, then applied CLAHE to improve local contrast and make ridge-valley patterns easier to detect.",
                "This image enhancement step made the downstream feature extraction more reliable, especially for textured fingerprint regions where small contrast changes can affect descriptor quality.",
              ],
            },
            {
              title: "Feature Extraction",
              content: [
                "The system used RootSIFT for local fingerprint descriptors. RootSIFT applies Hellinger kernel normalization to SIFT descriptors, which improves matching behavior for textured patterns such as fingerprint ridges.",
                "To add a broader image-level signal, the pipeline also computed global intensity histograms. These histograms captured coarse distribution differences between fingerprint images and helped supplement local keypoint matching.",
              ],
            },
            {
              title: "Identification Model",
              content: [
                "The verification module performed 1:N identification by comparing a probe against enrolled identities and scoring candidate matches. The score combined local RootSIFT match counts with global histogram cosine similarity, producing a hybrid signal that was more robust than either feature family alone.",
                "Open-set support came from two decision rules: a minimum identification threshold of 28.5 and a top-1 versus top-2 margin of 1.6. If the best candidate was not strong enough, or if the top two candidates were too close, the system labeled the probe as unknown rather than forcing a match.",
              ],
            },
            {
              title: "Evaluation",
              content: [
                "The project generated multiple evaluation artifacts after running the main pipeline: a ROC curve, a normalized confusion matrix for the first 10 identities, and a summary evaluation plot covering accuracy, precision, recall, and F1-score.",
                "The final system achieved an AUC of 0.95, indicating strong separability between genuine matches and imposters. That result validated the combined preprocessing, RootSIFT, histogram, and open-set thresholding approach.",
              ],
            },
            {
              title: "Outcome",
              content: [
                "The final deliverable was a complete Python biometric pipeline with modular components for preprocessing, feature extraction, verification, evaluation, and utility functions. The project structure made it straightforward to enroll users, run identification, and review generated analytics.",
                "This project strengthened my experience building computer vision systems where model performance depends on both algorithm design and careful evaluation thresholds, not just feature extraction alone.",
              ],
            },
          ],
        },
      },
      {
        title: "Defect Prediction Risk Modeling Tool",
        description:
          "Built a repository-mining defect predictor that scored file-level bug risk from commit history, code churn, complexity, ownership, and recency signals. Normalized features and optimized weights against ground truth, improving prediction accuracy from 0.66 to 0.74.",
        skills: ["Python", "PyDriller", "Scikit-learn", "MinMaxScaler", "Static Analysis", "Git Mining"],
        writeup: {
          overview:
            "This CSC 495 project, completed from February through April 2025 with Huy Nguyen, focused on predicting which source files in a GitHub repository were most likely to contain defects. The system mined commit history, extracted file-level risk features, normalized those signals, and ranked files by a weighted hotspot score so maintainers could prioritize code review and testing effort.",
          highlights: [
            "Mined repository history with PyDriller to collect commit dates, changed files, added and deleted lines, file LOC, and cyclomatic complexity.",
            "Designed a hotspot score from recency, change frequency, modified lines, file size, complexity, and minor contributor activity.",
            "Used MinMaxScaler normalization and a weight optimization harness to compare rankings against ground-truth defective files.",
            "Improved measured prediction accuracy from 0.66 to 0.74 after optimization showed recency was the strongest factor.",
          ],
          sections: [
            {
              title: "Problem",
              content: [
                "Large repositories make it difficult to know which files deserve the most attention before a release. The goal was to build a defect predictor that could inspect a repository's historical activity and surface the files most likely to be risky.",
                "Early planning explored commit message keyword detection with spaCy or NLTK, SZZ-style defect tracing, and a weighted formula that combined recency, frequency, change size, and file size. As the project progressed, the model became more data-driven and relied on measurable repository features rather than only developer-written commit messages.",
              ],
            },
            {
              title: "Implementation",
              content: [
                "The core pipeline used PyDriller to traverse repository commits and collect file-level metadata. For each candidate file, the tool calculated recency of change, number of times changed, total modified lines, lines of code, cyclomatic complexity, and the number of minor contributors with less than 5% ownership of the file.",
                "Each raw factor was normalized with Scikit-learn's MinMaxScaler so that no single metric dominated only because it had a larger numeric range. Recency used an inverted normalized score, making recently changed files rank as higher risk.",
              ],
            },
            {
              title: "Risk Model",
              content: [
                "The first score combined recency, frequency, message keywords, changed lines, and file size. Later iterations replaced less reliable keyword weighting with stronger static and repository signals, including cyclomatic complexity and minor contributors.",
                "The final optimized weighting emphasized recency at 45%, then frequency at 17.5%, minor contributors at 12.5%, cyclomatic complexity at 10%, lines modified at 7.5%, and LOC at 7.5%. This aligned with the project finding that recent change activity was the most predictive factor in the tested repositories.",
              ],
            },
            {
              title: "Testing And Optimization",
              content: [
                "The project used the course harness and sample repositories to compare predicted risky files against ground truth. Separate test functions validated the individual feature calculators before combining them into the overall risk score.",
                "A weight optimization harness tested absence-based and extreme-value configurations across multiple config files. Instead of hardcoding one formula, the optimizer evaluated candidate weight sets, calculated accuracy for each run, averaged the results, and selected the best-performing distribution.",
              ],
            },
            {
              title: "Outcome",
              content: [
                "The optimized model improved accuracy from 0.66 to 0.74. The wrap-up analysis showed that increasing the weight for recency produced the clearest gain, which suggests that recently touched code was the strongest indicator of defect risk in the evaluated repositories.",
                "The final deliverable included documented code, updated README guidance, filtering for test and irrelevant files, and a ranked output that could be used to identify the highest-risk files for review.",
              ],
            },
          ],
        },
      },
      {
        title: "Distributed CNN Training",
        description:
          "Parallelized CIFAR-10 CNN training with TensorFlow MultiWorkerMirroredStrategy for synchronous training on an HPC cluster. Optimized GPU utilization with SLURM and improved accuracy from 61.6% to 73.4% through distributed scaling.",
        skills: ["TensorFlow", "Python", "SLURM", "CUDA", "Multi-node GPU Training"],
      },
      {
        title: "Running Prediction",
        description:
          "Built a data science pipeline using Strava running data to predict race finish times and classify run types. Cleaned and analyzed 43 activities with pace, distance, heart-rate, elevation, power, cadence, and shoe data, then evaluated linear regression and decision-tree models with cross-validation and performance visualizations.",
        skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Linear Regression", "Decision Tree"],
        repo: "https://github.com/sfeng9/DSC412-project-edward-feng",
      },
      {
        title: "Real-time Facial & Hand Recognition",
        description:
          "Architected and trained CNNs with PyTorch, using NumPy and Pandas for dataset preprocessing and augmentation. Built OpenCV webcam pipelines for live face and hand detection.",
        skills: ["PyTorch", "OpenCV", "Python", "NumPy", "Pandas"],
      },
    ],
  },
  {
    label: "Software Engineering",
    projects: [
      {
        title: "PixelMP3",
        description:
          "Developed a cross-platform desktop music player with Electron and React, featuring a custom pixel-art interface and secure OAuth + PKCE authentication flow. Integrated Spotify Web Playback SDK and REST APIs for real-time playback and token refreshing.",
        skills: ["Electron", "React", "JavaScript", "OAuth", "PKCE", "Spotify API"],
      },
      {
        title: "The Christmas Tree Database",
        description:
          "Built a React, Node.js, and MySQL application for field researchers at NCSU College of Natural Resources. Supported transactional updates, offline synchronization, RESTful endpoints, and Docker-based multi-platform deployment.",
        skills: ["React", "Node.js", "MySQL", "Docker", "REST APIs", "Offline Sync"],
        writeup: christmasTreeDatabaseWriteup,
      },
      {
        title: "Inventory Management System",
        description:
          "Developed a Python and MySQL system for manufacturers with normalized schemas, role-based access control, and database-layer business logic for FEFO lot selection, traceability tracking, and automated cost calculations.",
        skills: ["Python", "MySQL", "SQL", "RBAC", "Database Design"],
        writeup: inventoryManagementWriteup,
      },
    ],
  },
  {
    label: "Database Systems",
    projects: [
      {
        title: "Inventory Management System",
        description:
          "Developed a Python and MySQL system for manufacturers with normalized schemas and role-based access control. Implemented FEFO lot selection, traceability tracking, and automated cost calculations at the database layer.",
        skills: ["Python", "MySQL", "SQL", "Normalized Schemas", "RBAC"],
        writeup: inventoryManagementWriteup,
      },
      {
        title: "The Christmas Tree Database",
        description:
          "Built a full-stack field research application with React, Node.js, and MySQL, including transactional updates, offline synchronization, RESTful endpoints, and Dockerized deployment.",
        skills: ["React", "Node.js", "MySQL", "Docker", "Transactions", "REST APIs"],
        writeup: christmasTreeDatabaseWriteup,
      },
    ],
  },
  {
    label: "Parallel Systems",
    projects: [
      {
        title: "Distributed CNN Training",
        description:
          "Parallelized CIFAR-10 CNN training with TensorFlow MultiWorkerMirroredStrategy for synchronous training on an HPC cluster, using SLURM to improve GPU utilization and distributed scaling.",
        skills: ["TensorFlow", "SLURM", "CUDA", "HPC", "Multi-node GPU Training"],
      },
    ],
  },
]

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
    setPage((current) =>
      Math.min(activeProjects.length - pageSize, current + pageSize),
    )
  }

  return (
    <section id="projects" className="mb-32">
      <h2 className="text-lg tracking-widest font-bold text-white">
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
              key={project.title}
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
  children: React.ReactNode
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

        {project.writeup ? (
          <div className="mt-8 space-y-7">
            <section>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-teal-200">
                Project Write-up
              </h4>
              <p className="mt-3 leading-7 text-gray-300">
                {project.writeup.overview}
              </p>
            </section>

            {project.writeup.highlights?.length ? (
              <section>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Key Contributions
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.writeup.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border-l border-teal-300/40 pl-4 leading-7 text-gray-300"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.writeup.sections.map((section) => (
              <section key={section.title}>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  {section.title}
                </h4>
                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
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
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((screenshot) => (
              <img
                key={screenshot}
                src={screenshot}
                alt={`${project.title} screenshot`}
                className="rounded-lg border border-zinc-800 object-cover"
              />
            ))}
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
