export interface Info {
  name: string;
  address: string;
  email: string;
  phone: string;
  sponsors: string[];
  googleApiKey: string;
  links: Link[];
}

export interface Link {
  url: string;
  label: string;
  tooltip?: string;
}
