/* ==========================================================================
   CHAMCHA RESTAURANT — SITE DATA
   --------------------------------------------------------------------------
   Everything a restaurant owner is likely to change lives in this file:
   menu items, categories, gallery photos and contact details. Swap the
   values below (and the matching files in /assets/images) and the site
   updates everywhere it's used — no HTML editing required.

   DEMO NOTICE: image URLs currently point to temporary stock photography
   for presentation purposes only. Replace `img` fields with real Chamcha
   Restaurant photography before launch (see README.md).
   ========================================================================== */

const IMG = {
  hero:      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=1800&q=80",
  karahi:    "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=1200&q=80",
  biryani:   "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80",
  bbq:       "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=1200&q=80",
  naan:      "https://images.unsplash.com/photo-1566698629409-787a68fc5724?auto=format&fit=crop&w=1200&q=80",
  interior:  "https://images.unsplash.com/photo-1763626080059-523898c7ffef?auto=format&fit=crop&w=1400&q=80",
  tea:       "https://images.unsplash.com/photo-1678026557271-a178ec37f844?auto=format&fit=crop&w=1200&q=80",
};

const menuData = {
  categories: ["All", "Starters", "BBQ", "Karahi", "Rice", "Breads", "Drinks", "Desserts"],
  items: [
    {
      id: "chicken-karahi",
      name: "Chicken Karahi",
      category: "Karahi",
      description: "Rich, comforting and made for sharing — simmered with tomato, ginger and green chilli.",
      img: IMG.karahi,
      showPrice: false,
      price: null
    },
    {
      id: "chicken-tikka",
      name: "Chicken Tikka",
      category: "BBQ",
      description: "Charred, smoky and full of flavour, straight off the grill.",
      img: IMG.bbq,
      showPrice: false,
      price: null
    },
    {
      id: "seekh-kebab",
      name: "Seekh Kebab",
      category: "BBQ",
      description: "Tender grilled kebabs with traditional seasoning.",
      img: IMG.bbq,
      showPrice: false,
      price: null
    },
    {
      id: "chicken-biryani",
      name: "Chicken Biryani",
      category: "Rice",
      description: "Aromatic basmati rice layered with slow-cooked flavour.",
      img: IMG.biryani,
      showPrice: false,
      price: null
    },
    {
      id: "pilao",
      name: "Chicken Pilao",
      category: "Rice",
      description: "Fragrant rice prepared for a satisfying, everyday meal.",
      img: IMG.biryani,
      showPrice: false,
      price: null
    },
    {
      id: "fresh-naan",
      name: "Fresh Naan",
      category: "Breads",
      description: "A warm classic, baked fresh for the table.",
      img: IMG.naan,
      showPrice: false,
      price: null
    },
    {
      id: "lassi",
      name: "Lassi",
      category: "Drinks",
      description: "A refreshing traditional yoghurt drink.",
      img: IMG.tea,
      showPrice: false,
      price: null
    },
    {
      id: "chai",
      name: "Chai",
      category: "Drinks",
      description: "A simple, warming finish to a good meal.",
      img: IMG.tea,
      showPrice: false,
      price: null
    }
  ]
};

const galleryData = [
  { id: "g1", img: IMG.karahi,   alt: "Demo photo — Chicken karahi, close up",      size: "large" },
  { id: "g2", img: IMG.bbq,      alt: "Demo photo — Grilled BBQ platter",           size: "small" },
  { id: "g3", img: IMG.biryani,  alt: "Demo photo — Chicken biryani bowl",          size: "small" },
  { id: "g4", img: IMG.naan,     alt: "Demo photo — Fresh naan basket",             size: "wide"  },
  { id: "g5", img: IMG.interior, alt: "Demo photo — Restaurant interior seating",   size: "small" },
  { id: "g6", img: IMG.tea,      alt: "Demo photo — Tea being poured at the table", size: "small" }
];

const contactData = {
  phone: "Phone number to be added",
  whatsapp: "WhatsApp number to be added",
  instagram: "Instagram handle to be added",
  hours: "Opening hours to be added",
  addressLine: "G-9 Markaz, Karachi Company, Islamabad",
  addressDetail: "Exact location details to be added",
  mapsUrl: "#"
};
