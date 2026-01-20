
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: ProjectCategory;
  details: string[];
  imageUrl: string;
}

export enum ProjectCategory {
  GEN_AI = "Generative AI & Agentic Systems",
  RAG = "Retrieval-Augmented Generation (RAG) & Document AI",
  CV = "Computer Vision & Deep Learning",
  DS_ML = "Data Science & Machine Learning"
}

export interface Tool {
  name: string;
  icon: string;
}
