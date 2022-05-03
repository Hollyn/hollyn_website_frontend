export interface Work {
  [key: string]: string | number | boolean | Category | Link[] | undefined;

  id: number;
  name: string;
  title: string;
  description: string;
  category: Category;
  link: string;
  priority: number;
  showInFrontPage: boolean;
  links?: undefined | Link[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Link {
  icon: string;
  name: string;
  link: string;
  external: boolean;
}
