/* ============================================================
   HEAVENLY NOOR — Brand config & product data
   Products derived from @heavenly.noor Instagram captions
   (highlights: Behind Scenes 💗 · Valentines 💌 · Details 🌷)
   Replace placeholder images with real IG media when synced.
   ============================================================ */

const HEAVENLY_NOOR = {
  name: 'Heavenly Noor',
  handle: '@heavenly.noor',
  instagram: 'https://www.instagram.com/heavenly.noor/',
  founder: 'Pihu Azad',
  location: 'Boca Raton, FL',
  serviceAreas: ['Palm Beach', 'Broward', 'Boca Raton'],
  // TODO: add real number — used for floating CTA + all "order" buttons
  whatsapp: 'https://wa.me/1XXXXXXXXXX?text=Hi%20Heavenly%20Noor!%20I%27d%20love%20to%20order%20flowers.',
  email: 'hello@heavenlynoor.com',
  tagline: 'Flowers that carry light',
};

const PRODUCTS = [
  {
    id: 'bridal-blush',
    name: 'Blush Bridal Bouquet',
    price: 240,
    priceNote: 'custom sizing available',
    img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
    alt: 'Blush pink bridal bouquet with garden roses',
    tags: ['wedding', 'bridal', 'pink', 'romantic', 'fresh'],
    story: 'A soft gathering of garden roses and ranunculus — the bouquet our brides carry down Palm Beach aisles.',
  },
  {
    id: 'everlasting-dried',
    name: 'Everlasting Dried Arrangement',
    price: 145,
    priceNote: 'lasts 1+ years',
    img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80',
    alt: 'Dried pampas and preserved floral arrangement',
    tags: ['dried', 'preserved', 'neutral', 'home', 'everlasting'],
    story: 'Pampas, bunny tails and preserved palm — wabi-sabi in a vessel. It never wilts, only softens.',
  },
  {
    id: 'valentine-loveletter',
    name: 'Love Letter Valentine Set',
    price: 165,
    priceNote: 'limited seasonal',
    img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80',
    alt: 'Red and pink valentine roses arrangement',
    tags: ['valentines', 'romantic', 'red', 'pink', 'gift', 'fresh'],
    story: 'From our Valentines 💌 highlight — velvet reds, blush pinks, and a handwritten note tied in ribbon.',
  },
  {
    id: 'market-fresh-weekly',
    name: 'Fresh Market Wrap',
    price: 55,
    priceNote: 'weekly rotating stems',
    img: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=800&q=80',
    alt: 'Fresh market flower wrap bouquet',
    tags: ['fresh', 'daily', 'market', 'gift', 'colorful'],
    story: 'Whatever was most beautiful at the market this morning — wrapped in kraft, tied with string.',
  },
  {
    id: 'event-centerpiece',
    name: 'Event Centerpiece Collection',
    price: 85,
    priceNote: 'per table, min. 8',
    img: 'https://images.unsplash.com/photo-1477120128765-a0528148fed2?w=800&q=80',
    alt: 'Elegant event table centerpiece florals',
    tags: ['event', 'wedding', 'party', 'elegant', 'fresh'],
    story: 'Low, lush tablescapes for Boca Raton soirées — see the Details 🌷 highlight for behind the scenes.',
  },
  {
    id: 'tulip-spring',
    name: 'Spring Tulip Bundle',
    price: 48,
    priceNote: 'seasonal availability',
    img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&q=80',
    alt: 'Colorful spring tulip bundle',
    tags: ['fresh', 'tulips', 'spring', 'colorful', 'gift'],
    story: 'Parrot tulips in every shade the season offers — the mood-lifter our regulars re-order weekly.',
  },
  {
    id: 'peony-cloud',
    name: 'Peony Cloud Vase',
    price: 120,
    priceNote: 'May–June peak',
    img: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
    alt: 'Cloud of pink peonies in a vase',
    tags: ['fresh', 'peonies', 'pink', 'romantic', 'home'],
    story: 'A full cloud of peonies — brief season, unforgettable presence. DM to reserve.',
  },
  {
    id: 'white-serenity',
    name: 'Serenity White Bouquet',
    price: 130,
    priceNote: 'sympathy & celebration',
    img: 'https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?w=800&q=80',
    alt: 'White serenity bouquet with eucalyptus',
    tags: ['white', 'elegant', 'sympathy', 'wedding', 'fresh'],
    story: 'White blooms and eucalyptus — for quiet celebrations and gentle goodbyes.',
  },
];
