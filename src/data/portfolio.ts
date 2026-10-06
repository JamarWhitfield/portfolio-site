export const skills = {
  languages: ["Python", "JavaScript/TypeScript", "SQL", "C++", "Java", "Bash"],
  mlData: ["scikit-learn", "Computer Vision", "Signal Processing", "PostgreSQL", "Spark/Databricks", "Redis"],
  systemsWeb: ["Next.js", "React", "FastAPI", "Flask", "Docker", "AWS", "Git", "Linux", "Supabase"]
};

export const projects = [
  {
    title: "Casetra — Title Operations Platform",
    description:
      "Built a production-oriented title-operations platform with OCR-assisted document processing, search, audit logs, collaboration workflows, and secure data access.",
    period: "2026 - Present",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OCR", "RLS"],
    highlights: [
      "Built OCR-driven document ingestion and searchable record workflows.",
      "Implemented audit logs, invitations, comments, recent searches, and role-aware data access.",
      "Designed the application around structured title records, document review, and future AI-assisted extraction and summarization."
    ]
  },
  {
    title: "LSU Vision Lab Website",
    description:
      "Built a multi-page responsive website for the LSU Vision Lab to present research, publications, and team profiles using structured JSON-driven content.",
    period: "Feb 2026 - Apr 2026",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "JSON"],
    highlights: [
      "Created a JSON-driven people directory for dynamic team profile rendering.",
      "Designed responsive pages for research, publications, and lab information.",
      "Deployed a professional academic site with clean navigation and accessible structure."
    ],
    github: "https://github.com/JamarWhitfield/lsuvision",
    viewSite: "https://jamarwhitfield.github.io/lsuvision/index.html"
  },
  {
    title: "Machine Learning and Spectral Analysis for CO2 Sensor Response",
    description:
      "Built a Python pipeline to clean spectral sensor data, detect resonance features, and model CO2 response patterns.",
    period: "Mar 2026 - Present",
    stack: ["Python", "Machine Learning", "Signal Processing", "Spectral Analysis", "scikit-learn"],
    highlights: [
      "Processed raw wavelength-transmittance data into structured datasets.",
      "Applied signal smoothing and resonance dip detection techniques.",
      "Evaluated baseline regression models for CO2 response analysis."
    ],
    github: "https://github.com/JamarWhitfield"
  },
  {
    title: "Microscopy Particle Segmentation Web App",
    description:
      "Built a Flask web app for denoising microscopy images, segmenting particles, reviewing detections, and exporting measurements.",
    period: "",
    stack: ["Python", "Flask", "Computer Vision", "Image Processing", "OpenCV", "scikit-image"],
    highlights: [
      "Built a denoising and segmentation workflow for microscopy particle analysis.",
      "Added an interactive review step for excluding, editing, and adding detections.",
      "Generated overlays, histograms, and CSV exports for downstream reporting."
    ]
  },
  {
    title: "Internal Document QA Chatbot",
    description:
      "Built a local document chatbot that indexes PDF and DOCX files, retrieves relevant chunks, and answers questions with cited sources.",
    period: "Present",
    stack: ["React", "FastAPI", "SQLite", "SQLAlchemy", "Document Retrieval"],
    highlights: [
      "Built a PDF/DOCX upload pipeline with parsing, chunking, and SQLite storage.",
      "Implemented grounded question answering with document-scoped retrieval and cited source chunks.",
      "Added document management tools for upload, search, delete, and reindex actions."
    ],
    github: "https://github.com/JamarWhitfield"
  }
];

export const experience = [
  {
    role: "Software Engineering Intern",
    org: "Blue Origin | Kent, WA",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Automated mapping and comparison of configuration classes across legacy and modern ingestion frameworks to accelerate migration readiness for large-scale datasets.",
      "Built translation scripts and validation tooling to convert legacy ingestion configs into a modern framework, reducing manual migration effort.",
      "Designed repeatable test and data-validation workflows to compare outputs between pipelines, catching regressions early and improving production confidence."
    ]
  },
  {
    role: "Data Science Intern",
    org: "BASF Corporation | Geismar, LA",
    period: "May 2024 – Aug 2024",
    highlights: [
      "Architected and implemented a scalable streaming data pipeline processing live feeds from 25+ sensors for lifecycle monitoring and analysis.",
      "Developed a Streamlit web application for real-time visualization and monitoring, improving operational visibility for engineering teams.",
      "Integrated machine learning models to predict sensor failures and surface early risk signals for review."
    ]
  },
  {
    role: "Undergraduate Researcher – Vision Lab",
    org: "LSU Vision Lab | Baton Rouge, LA",
    period: "Aug 2025 – Present",
    highlights: [
      "Developed an online human-subject data collection platform for motion-only scene recognition experiments using Random-Dot Kinematogram video stimuli.",
      "Analyzed 2,600+ participant responses from 52 volunteers to evaluate recognition accuracy across noise levels and identify human–machine performance gaps.",
      "Contributed to research on motion perception in humans and vision-language models."
    ]
  },
  {
    role: "Undergraduate Researcher – Computer Vision / Machine Learning",
    org: "LSU Mathematics Department | Baton Rouge, LA",
    period: "May 2023 – May 2024",
    highlights: [
      "Developed and trained CNN-based computer vision models for frog egg counting, reducing manual counting time from days to minutes.",
      "Improved model performance through preprocessing, augmentation, validation checks, and architecture experimentation.",
      "Presented research findings at the 7th TX-LA Mathematics Conference."
    ]
  }
];

export const research = [
  {
    title: "Motion Perception in Humans and AI",
    subtitle: "LSU Vision Lab",
    body:
      "Studies how motion-only visual information supports scene recognition, with an emphasis on comparing human perception against modern vision and vision-language models.",
    tags: ["Computer Vision", "Motion Perception", "Human-AI Comparison"]
  },
  {
    title: "Point Tracking",
    subtitle: "Literature Review & Research Direction",
    body:
      "Exploring modern point-tracking methods, training strategies, benchmark design, and failure modes to identify useful research directions for robust long-term tracking.",
    tags: ["Tracking", "Video", "Representation Learning"]
  },
  {
    title: "Biological Image Analysis",
    subtitle: "LSU Mathematics Department",
    body:
      "Applied deep learning and image-processing methods to biological counting problems, with emphasis on reducing manual analysis time while preserving reliable measurements.",
    tags: ["CNNs", "Segmentation", "Scientific ML"]
  }
];

export const mathQuant = {
  education: [
    "B.S. Computer Science, Louisiana State University — completed 2026",
    "B.S. Mathematics, Louisiana State University — in progress"
  ],
  coursework: ["Linear Algebra", "Advanced Calculus", "Numerical Linear Algebra"],
  interests: [
    "Numerical methods",
    "Optimization and statistical modeling",
    "Machine learning for quantitative problems",
    "Reliable software for data-intensive decision systems"
  ]
};
