export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date
  time?: string;
  location?: string;
  address?: string;
  rsvpUrl?: string;
  image?: string;
  description?: string;
  tags?: string[];
};

export type Leader = {
  role: string;
  name: string;
  photo?: string;
  blurb?: string;
  email?: string;
  linkedin?: string;
};

export type SiteConfig = {
  name: string;
  campus: string;
  status?: string;
  purpose: string;
  leaders: Leader[];
  contact: { email: string; instagram: string };
  meeting: {
    day: string;
    venue: string;
    address: string;
    mapEmbedQuery: string;
  };
  founded?: string;
  dues?: string;
  membership?: string;
  announcement?: { message: string; enabled?: boolean };
};


