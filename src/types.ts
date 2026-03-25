export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
  completedAt?: number;
  tags: string[];
  subtasks: SubTask[];
  isDecomposed: boolean;
  isGeneratingTags: boolean;
  isDecomposing: boolean;
}

export type FilterType = "all" | "active" | "completed";

export interface AppSettings {
  theme: "light" | "dark" | "system";
}
