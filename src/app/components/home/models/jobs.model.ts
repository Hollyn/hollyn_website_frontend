export interface Job {
  [key: string]: string | number | boolean | Skill[] | undefined;

  title: string;
  employmentyTpe: string;
  companyName: string;
  location: string;
  isCurrent: boolean;
  startDate: string;
  endDate: string;
  industry: string;
  description: string;
  headline: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
}
