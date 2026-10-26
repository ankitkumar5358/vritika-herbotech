import { siteImages } from "@/lib/site-images";

// Campaign / category imagery is illustrative (AI-generated, unbranded).
export const images = {
  hero: siteImages.hero,
  craft: siteImages.ourApproach,
  heritage: siteImages.aboutVritika,
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
};

// Company facts and partner names come from the supplied Vritika Herbotech brief.
export const company = {
  name: "Vritika Herbotech Pvt. Ltd.",
  legalName: "Vritika Herbotech Private Limited",
  cin: "U24304RJ2017PTC057908",
  operatingSince: "2007",
  incorporated: "2017",
  address: "45, Katewa Nagar, Gurjar ki Thadi, New Sanganer Road, Jaipur, Rajasthan – 302019",
  phone: "+91 93512 60012",
  phoneHref: "tel:+919351260012",
  email: "vritikaherbotech@gmail.com",
  facebook: "https://www.facebook.com/vritikaherbotech",
};

export const founders = [
  {
    name: "Mr. Tara Prakash Tiwari",
    role: "Managing Director",
    note: "MSc Agriculture and former government agricultural research scientist.",
  },
  {
    name: "Mrs. Anamika Tiwari",
    role: "Co-Founder",
    note: "Part of a family lineage of Ayurvedic physicians.",
  },
];

export const certifications = [
  "WHO GMP",
  "AYUSH GMP",
  "FSSAI",
  "APEDA",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 22000:2018",
  "ISO 45001:2018",
  "Vegan",
  "Halal",
];

export const partners = [
  "Dabur",
  "Himalaya",
  "Shree Baidyanath Ayurved",
  "Leeford Healthcare",
  "Sharmaayu",
  "Unjha Pharmacy",
];

export const approachPoints = [
  {
    title: "Rooted heritage",
    copy: "Led by an agricultural scientist and a family lineage of Ayurvedic physicians, working in herbal products since 2007.",
  },
  {
    title: "From the field",
    copy: "Captive organic cultivation of medicinal plants connects the raw herb to the finished product.",
  },
  {
    title: "Tested with care",
    copy: "Microbiology and heavy-metal laboratory testing are part of the production process in Jaipur.",
  },
];

export type Category = {
  name: string;
  short: string;
  note: string;
  items: string[];
  image: string;
};

export const categories: Category[] = [
  {
    name: "Herbal Juices & Syrups",
    short: "Juices & Syrups",
    note: "Liquid wellness formats, from single-herb juices to proprietary syrups.",
    items: ["Aloe Vera", "Noni", "Amla", "Wheatgrass", "Giloy", "Karela-Jamun", "Sea Buckthorn"],
    image: siteImages.herbalJuices,
  },
  {
    name: "Tablets, Capsules & Powders",
    short: "Tablets & Powders",
    note: "Solid formats including tablets, capsules, sachets and classical churnas.",
    items: ["Ayurvedic Tablets", "Capsules", "Herbal Sachets", "Herbal Powders", "Churnas"],
    image: siteImages.tabletsCapsules,
  },
  {
    name: "Personal & Cosmetic Care",
    short: "Personal Care",
    note: "Herbal personal care, from hair care to creams, face washes and soaps.",
    items: ["Skin Creams", "Face Washes", "Saffron Gels", "Natural Soaps", "Tulsi Ark Drops"],
    image: siteImages.personalCare,
  },
  {
    name: "Classical Ayurvedic Preparations",
    short: "Classical",
    note: "Traditional classical formats and botanical extracts.",
    items: ["Classical Medicines", "Avleha", "Pak", "Botanical Extracts"],
    image: siteImages.classicalPreparations,
  },
];

export const products: Product[] = [
  {
    slug: "elovra",
    name: "Elovra Hair Care Range",
    category: "Personal & Cosmetic Care",
    summary: "Hair Cleanser, Herbal Hair Oil and Hair Care Capsules from the Vritikas Elovra line.",
    image: siteImages.products.hair,
  },
  {
    slug: "dengoo",
    name: "Dengoo Kare Juice",
    category: "Herbal Juices & Syrups",
    summary: "An Ayurvedic herbal juice in the signature Vritikas bottle and carton.",
    image: siteImages.products.dengoo,
  },
  {
    slug: "peedaant",
    name: "Peedaant Syrup",
    category: "Herbal Juices & Syrups",
    summary: "A proprietary Ayurvedic syrup from the Vritikas portfolio.",
    image: siteImages.products.peedaant,
  },
  {
    slug: "serum",
    name: "Vritikas Hair Serum",
    category: "Personal & Cosmetic Care",
    summary: "Spray-bottle hair serums from the Vritikas personal care range.",
    image: siteImages.products.serum,
  },
  {
    slug: "tea",
    name: "Vritikas Green Tea",
    category: "Herbal Tea",
    summary: "Boxed green tea from Vritikas — “Take a Sip of True Wellness.”",
    image: siteImages.products.tea,
  },
];
