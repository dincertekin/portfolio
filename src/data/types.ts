export type Language = "EN" | "TR";

export interface Repo {
  name: string;
  url: string;
  stars?: string;
  desc: string;
  tags: string[];
  color: string;
}

export interface Translation {
  nav: string[];
  hero: string[];
  sub: string;
  work: string;
  workSub: string;
  ossHeader: string;
  repos: Repo[];
  content: string;
  contentLabel: string;
  stats: string[];
  contentSub: string;
  recruiterTitle: string;
  recruiterKeys: string[];
  recruiterValues: string[];
  cv: string;
  copy: string;
  success: string;
  form: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    thanks: string;
  };
  footer: string;
}
