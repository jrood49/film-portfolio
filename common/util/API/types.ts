export type Project = {
  title: string,
  url: string,
  categories: Category[],
  slug: string,
  priority: number,
  project_type: 'vimeo' | 'link',
  thumbnail: {
    url: string,
    formats: {
      medium: {
        url: string,
      },
    },
  },
};

export type Category = {
  name: string,
  slug: string,
  projects: Project[],
};

export type ContactInfo = {
  email: string,
  name: string,
  phone_number: string,
};

export type SiteInfo = {
  site_name: string,
  instagram: string,
  vimeo: string,
  facebook: string,
  twitter: string,
  title: string,
};
