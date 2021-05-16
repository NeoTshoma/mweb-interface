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
  category: string;
  isStandardCampaign: boolean;
  isDefaultCampaign: boolean;
  isPrivateCampaign: boolean;
  promocodes: string[];
  links: string [];
}
