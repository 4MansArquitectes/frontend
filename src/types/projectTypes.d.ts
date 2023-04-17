export interface Project {
  id: string;
  name: string;
  tags: string[];
  coverImage: string;
  startDate: number;
  endDate: number;
}

export type Projects = Project[];
