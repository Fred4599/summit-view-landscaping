export interface Service {
  title: string;
  slug: string;
  description: string;
  details: string[];
  image: string;
}

export const services: Service[] = [
  {
    title: "Landscape Install",
    slug: "landscape-install",
    description:
      "Custom landscape plans brought to life — from flower beds and shrubs to full yard transformations. We work with you to design an outdoor space that matches your vision, lifestyle, and budget.",
    details: [
      "Custom landscape design & planning",
      "Flower beds, shrubs & ornamental plantings",
      "Sod installation & grading",
      "Mulch, rock & ground cover installation",
      "Full yard transformations",
      "Drainage solutions",
    ],
    image: "/images/portfolio/landscape-install.jpg",
  },
  {
    title: "Hardscaping",
    slug: "hardscaping",
    description:
      "Patios, retaining walls, walkways, and fire pits built to last with quality materials. Our hardscape work adds beauty and function to any outdoor space.",
    details: [
      "Paver & stone patios",
      "Retaining walls & seat walls",
      "Walkways & stepping stone paths",
      "Fire pits & outdoor living features",
      "Edging & borders",
      "Decorative rock & gravel areas",
    ],
    image: "/images/portfolio/hardscaping-patio.jpg",
  },
  {
    title: "Sprinklers",
    slug: "sprinklers",
    description:
      "Sprinkler installation, repair, and seasonal start-up/blow-out to keep your landscape hydrated efficiently. We design systems that save water and keep your lawn green.",
    details: [
      "New sprinkler system installation",
      "System repair & troubleshooting",
      "Seasonal start-up & winterization",
      "Sprinkler head replacement & adjustment",
      "Drip irrigation systems",
      "Smart controller upgrades",
    ],
    image: "/images/portfolio/sprinklers.jpg",
  },
  {
    title: "Maintenance",
    slug: "maintenance",
    description:
      "Regular mowing, edging, trimming, and clean-up to keep your yard looking sharp all season long. Reliable, consistent service you can count on.",
    details: [
      "Weekly & bi-weekly mowing",
      "Edging & string trimming",
      "Hedge & shrub trimming",
      "Leaf & debris clean-up",
      "Weed control",
      "Seasonal property clean-ups",
    ],
    image: "/images/portfolio/maintenance.jpg",
  },
  {
    title: "Tree Care",
    slug: "tree-care",
    description:
      "Professional trimming, pruning, and removal to keep your trees healthy, safe, and looking their best. Our crew handles everything from routine maintenance to complex removals.",
    details: [
      "Tree trimming & shaping",
      "Pruning for health & clearance",
      "Tree & stump removal",
      "Storm damage clean-up",
      "Canopy thinning & deadwood removal",
      "Young tree training & staking",
    ],
    image: "/images/portfolio/tree-care.jpg",
  },
  {
    title: "Fertilizer",
    slug: "fertilizer",
    description:
      "Targeted fertilization programs to promote lush, green growth and long-term lawn health. We tailor our approach to Idaho's unique soil and climate conditions.",
    details: [
      "Custom lawn fertilization programs",
      "Weed & feed applications",
      "Soil testing & amendments",
      "Pre-emergent weed prevention",
      "Fall winterizer treatments",
      "Organic & eco-friendly options",
    ],
    image: "/images/portfolio/fertilizer.jpg",
  },
  {
    title: "Spring & Fall Clean-Up",
    slug: "spring-fall-clean-up",
    description:
      "Comprehensive seasonal clean-ups to prepare your yard for the months ahead. We handle the heavy lifting so your property stays pristine year-round.",
    details: [
      "Leaf removal & disposal",
      "Bed clean-out & prep",
      "Gutter cleaning",
      "Debris hauling",
      "Pruning & cut-back of perennials",
      "Lawn dethatching & aeration",
    ],
    image: "/images/portfolio/fall-cleanup.jpg",
  },
  {
    title: "Snow Removal",
    slug: "snow-removal",
    description:
      "Reliable snow removal and ice management to keep your property safe and accessible through Idaho winters. Residential and commercial services available.",
    details: [
      "Driveway & walkway snow clearing",
      "Parking lot plowing",
      "Ice melt & de-icing applications",
      "Seasonal snow removal contracts",
      "Emergency storm response",
      "Roof snow removal",
    ],
    image: "/images/portfolio/gallery-property.jpg",
  },
];
