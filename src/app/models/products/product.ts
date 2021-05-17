export class PromoCodeProduct {
  promoCode: string;
  products: Product[];
  promoCodeDescription: string;
  promoCodeTagLine: string;
}

export class SummarizedProduct {
  productCode: string;
  productName: string;
  productRate: number;
  provider: string;
}

export class Product {
  productCode: string;
  productName: string;
  category: string;
  subcategory: string;
  productDescription: string;
  productRate: number;
  productDiscountType: string;
  productDiscountAmount: number;
  productDiscountPeriod: number;
  productDiscountSequence: number;
  onceOffCharge: boolean;
  summary: string;
  isHero: boolean;
  sellOnline: boolean;
  accessLimit: number;
  accessLimitUnits: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  highlight1Icon: string;
  highlight2Icon: string;
  highlight3Icon: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  provider: string;
  includes: any[];
  highlights: string[];
  technicalTerms: string;
  lineSpeed: number;
  parameters: Parameter[];
  friendlyName: string;
  heroTagLine: string;
  heroImage: string;
  invoiceRollupDescription: string;
  minimumContractMonths: number;
  productType: string;
  chargePeriod: string;
  highlight4: string;
  highlight5: string;
  highlight6: string;
  highlight4Icon: string;
  highlight5Icon: string;
  highlight6Icon: string;
  displayPrice: number;
}

export class Parameter {
  name: string;
  value: number;
}
