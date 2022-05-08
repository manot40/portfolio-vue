declare type TQuote = {
  content: string;
  author: string;
};

declare type TSkill = {
  name: string;
  value: string;
};

declare type TExperience = {
  title: string;
  description: string;
  date: string;
  type: "job" | "education";
};

declare type TSocial = {
  github: string;
  twitter: string;
  linkedin: string;
  whatsapp: string;
};

declare type TProject = {};

declare type APIData = {
  avatarUrl: string;
  fullname: string;
  nickname: string;
  greeting: string;
  about: string;
  quote: TQuote;
  skills: any[];
  experiences: any[];
  projects: TProject | TProject[];
  social: TSocial;
};

declare type APIRes<T> = {
  data: {
    attributes: T | T[];
  };
};
