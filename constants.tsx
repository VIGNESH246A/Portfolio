
import { Project, ProjectCategory, Tool } from './types';

export interface ToolWithColor extends Tool {
  color: string;
  slug: string;
}

export const TOOLS: ToolWithColor[] = [
  { name: 'Python', icon: 'python', slug: 'python', color: '#3776AB' },
  { name: 'SQL', icon: 'postgresql', slug: 'postgresql', color: '#4169E1' },
  { name: 'Pandas', icon: 'pandas', slug: 'pandas', color: '#150458' },
  { name: 'NumPy', icon: 'numpy', slug: 'numpy', color: '#013243' },
  { name: 'Scikit-learn', icon: 'scikitlearn', slug: 'scikitlearn', color: '#F7931E' },
  { name: 'TensorFlow', icon: 'tensorflow', slug: 'tensorflow', color: '#FF6F00' },
  { name: 'PyTorch', icon: 'pytorch', slug: 'pytorch', color: '#EE4C2C' },
  { name: 'OpenAI', icon: 'openai', slug: 'openai', color: '#412991' },
  { name: 'Hugging Face', icon: 'huggingface', slug: 'huggingface', color: '#FFD21E' },
  { name: 'Docker', icon: 'docker', slug: 'docker', color: '#2496ED' },
  { name: 'AWS', icon: 'amazonaws', slug: 'amazonaws', color: '#FF9900' },
  { name: 'FastAPI', icon: 'fastapi', slug: 'fastapi', color: '#05998B' },
  { name: 'Streamlit', icon: 'streamlit', slug: 'streamlit', color: '#FF4B4B' },
  { name: 'Git', icon: 'git', slug: 'git', color: '#F05032' },
  { name: 'GitHub', icon: 'github', slug: 'github', color: '#FFFFFF' },
  { name: 'Power BI', icon: 'powerbi', slug: 'powerbi', color: '#F2C811' }
];

export const PROJECTS: Project[] = [
  {
    title: "GenAgent Pro",
    description: "Agentic AI Workflow Engine — Autonomous multi-agent system for complex task execution.",
    techStack: ["Python", "LangGraph", "Google Gemini", "FAISS", "Streamlit"],
    githubUrl: "https://github.com/VIGNESH246A/GenAgent-Pro-Agentic-AI-Workflow",
    category: ProjectCategory.GEN_AI,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    details: [
      "Architected autonomous multi-agent system using LangGraph with Planner, Executor, and Validator agents.",
      "Implemented state-machine orchestration and conditional routing.",
      "Integrated FAISS vector memory for long-term context retention."
    ]
  },
  {
    title: "HR Copilot",
    description: "AI-Powered Hiring Assistant — End-to-end autonomous recruitment workflow system.",
    techStack: ["Python", "Google Gemini", "NLP", "Streamlit", "SQLite"],
    githubUrl: "https://github.com/VIGNESH246A/HR-Copilot",
    liveUrl: "https://hr-copilot-2egdggstbugtejcanhzcnu.streamlit.app/",
    category: ProjectCategory.GEN_AI,
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    details: [
      "Automated JD creation, resume screening, and interview scheduling.",
      "Built multi-agent architecture with intent-based task routing.",
      "Delivered analytics dashboard for hiring metrics."
    ]
  },
  {
    title: "Enterprise Document AI Assistant",
    description: "Production-grade RAG system for internal knowledge search.",
    techStack: ["Python", "RAG", "FAISS", "Google Gemini", "FastAPI", "Docker"],
    githubUrl: "https://github.com/VIGNESH246A/Enterprise-Document-AI-Assistant",
    liveUrl: "https://enterprise-document-ai-assistant-rpegwwkqedqzufzfmsa9u7.streamlit.app/",
    category: ProjectCategory.RAG,
    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    details: [
      "Multi-format document ingestion (PDF, DOCX, TXT).",
      "Semantic search with FAISS and citation-grounded responses.",
      "FastAPI backend with Dockerized deployment."
    ]
  },
  {
    title: "Policy & Invoice RAG System",
    description: "Enterprise RAG with OCR and hallucination control.",
    techStack: ["Python", "RAG", "Google Gemini", "ChromaDB", "OCR", "Streamlit"],
    githubUrl: "https://github.com/VIGNESH246A/Policy---Invoice-RAG-System",
    liveUrl: "https://policy---invoice-rag-system-yuf5dwgqvw4d3remzazkem.streamlit.app/",
    category: ProjectCategory.RAG,
    imageUrl: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?auto=format&fit=crop&q=80&w=800",
    details: [
      "OCR-based ingestion for PDFs & images.",
      "Multi-layer hallucination detection (TF-IDF, entity & number validation).",
      "Domain-restricted answers for finance use cases."
    ]
  },
  {
    title: "Customer Intelligence System",
    description: "Actionable NLP classification + RAG chatbot.",
    techStack: ["NLP", "Random Forest", "LSTM", "FAISS", "Streamlit"],
    githubUrl: "https://github.com/VIGNESH246A/AI-Powered-Customer-Intelligence-System-Actionable-Message-NLP-Classification-RAG-Chatbot",
    liveUrl: "https://ntptwygoz34ofkupgb5wxi.streamlit.app/",
    category: ProjectCategory.RAG,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    details: [
      "Dual-model NLP pipeline (Random Forest + LSTM).",
      "Actionable vs non-actionable message routing.",
      "Real-time confidence scoring for decision support."
    ]
  },
  {
    title: "SmartVision AI",
    description: "Computer Vision Platform for real-time object detection and classification.",
    techStack: ["Python", "YOLOv8", "CNN", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com/VIGNESH246A/SmartVision_AI",
    category: ProjectCategory.CV,
    imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
    details: [
      "YOLOv8-based multi-object detection.",
      "CNN image classification with VGG16, ResNet50, MobileNet.",
      "Performance comparison with accuracy, F1, and mAP metrics."
    ]
  },
  {
    title: "Helmet Detection System",
    description: "AI-based construction site safety monitoring for PPE compliance.",
    techStack: ["Python", "YOLOv8", "PyTorch", "OpenCV", "SQLite"],
    githubUrl: "https://github.com/VIGNESH246A/Real-Time-Helmet-Detection-Construction-Site-Safety-Monitoring-System",
    category: ProjectCategory.CV,
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    details: [
      "Real-time PPE compliance detection (25–30 FPS).",
      "Multi-source video input support (CCTV, RTSP).",
      "Automated alerts and analytics dashboard."
    ]
  },
  {
    title: "EMIPredict AI",
    description: "Financial Risk Assessment — ML-powered EMI eligibility platform.",
    techStack: ["Python", "XGBoost", "MLflow", "Streamlit", "Scikit-learn"],
    githubUrl: "https://github.com/VIGNESH246A/EMI_Predict_AI",
    liveUrl: "https://emipredictai-4l99bbuzz5jyinjtpxv4bf.streamlit.app/",
    category: ProjectCategory.DS_ML,
    imageUrl: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=800",
    details: [
      "Classification + Regression ML pipeline.",
      "Processed 400K records with outlier handling.",
      "Achieved 94.82% accuracy with XGBoost."
    ]
  },
  {
    title: "PatrolIQ",
    description: "Chicago Crime Analytics — Unsupervised ML for urban safety analysis.",
    techStack: ["Python", "K-Means", "PCA", "t-SNE", "MLflow"],
    githubUrl: "https://github.com/VIGNESH246A/Chicago-Crime-Analytics-PatrolIQ",
    liveUrl: "https://chicago-crime-analytics-patroliq-bp57cn2n9t7eoyvcmvqmx6.streamlit.app/",
    category: ProjectCategory.DS_ML,
    imageUrl: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&q=80&w=800",
    details: [
      "Crime hotspot detection using clustering algorithms.",
      "Temporal & geographic crime pattern analysis.",
      "Interactive dashboards & heatmaps."
    ]
  },
  {
    title: "Amazon Sales Analytics",
    description: "Large-scale e-commerce analytics & BI dashboard (2015-2025).",
    techStack: ["Python", "Pandas", "SQL", "Power BI"],
    githubUrl: "https://github.com/VIGNESH246A/amazon-india-2015-to-2025-sales-analytics-dashboard",
    category: ProjectCategory.DS_ML,
    imageUrl: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
    details: [
      "Cleaned ~1M transaction records.",
      "Advanced EDA & statistical analysis.",
      "Power BI dashboards with 25–30 interactive charts."
    ]
  },
  {
    title: "Cricbuzz LiveStats",
    description: "Real-time cricket analytics platform using live API data.",
    techStack: ["Python", "SQL", "REST API", "Streamlit"],
    githubUrl: "https://github.com/VIGNESH246A/Cricbuzz_livestats",
    liveUrl: "https://cricbuzzlivestats-app.streamlit.app/",
    category: ProjectCategory.DS_ML,
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    details: [
      "Live API data ingestion & SQL analytics.",
      "JSON processing & interactive dashboard.",
      "CRUD-based data management."
    ]
  }
];
