export class Campaigns {
  link: Link;
  campaigns: Campaign[];
}

export class Link {
  link: string[];
}

export class Campaign {
  code: string;
  name: string;
  description?: string;
  urlSlug?: string;
  categor: string;
  isStandardCampaign: boolean;
  isDefaultCampaign: boolean;
  isPrivateCampaign: boolean;
  promoCodes: string[];
  links: string [];
}