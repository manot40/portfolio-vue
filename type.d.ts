declare type TQuote = {
  content: string;
  author: string;
}

declare type TSkill = {
  name: string;
  value: string;
}

declare type TExperience = {
  title: string;
  description: string;
  date: string;
  type: "job" | "education";
}

declare type APIData = {
  about?: string;
  quote?: TQuote;
  skills?: any[];
  experiences?: any[];
  projects: any;
};

declare type APIRes<T> = {
  data: {
    attributes: T | T[];
  };
};