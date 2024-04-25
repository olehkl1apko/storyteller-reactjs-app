import { ReactNode } from "react";

export interface IMenuItem {
  label: string;
  icon: ReactNode;
  key: string;
}

export interface IStory {
  title: string;
  pages: string[];
  lastModified: number;
  status: string;
  liveFrom?: number;
  ends?: number;
  id: string;
}
