export type ProcessStage = {
  n: string;
  title: string;
  purpose: string;
  fromYou: string;
  fromUs: string;
  output: string;
  approval: string;
  duration: string;
  art: string;
  deliverables?: string[];
  tools?: string[];
  cta?: string;
  infoCards?: {
    icon: string;
    title: string;
    body: string;
    status: string;
    badge: string;
  }[];
};
