import { Product } from '@/components/ProductCard';
import dress1 from '@/assets/dress-1.jpg';
import dress2 from '@/assets/dress-2.jpg';
import top1 from '@/assets/top-1.jpg';
import coat1 from '@/assets/coat-1.jpg';
import gown1 from '@/assets/gown-1.jpg';
import gown2 from '@/assets/evening-gown-2.jpg';
import blouse1 from '@/assets/blouse-1.jpg';
import blouse2 from '@/assets/blouse-2.jpg';
import pants1 from '@/assets/pants-1.jpg';
import pants2 from '@/assets/pants-2.jpg';
import skirt1 from '@/assets/skirt-1.jpg';
import skirt2 from '@/assets/skirt-2.jpg';
import wrap1 from '@/assets/wrap-1.jpg';
import romper1 from '@/assets/romper-1.jpg';
import blazer1 from '@/assets/blazer-1.jpg';
import maxi1 from '@/assets/maxi-1.jpg';
import pencilSkirt1 from '@/assets/pencil-skirt-1.jpg';
import culotte1 from '@/assets/culotte-1.jpg';
import jumpsuit1 from '@/assets/jumpsuit-1.jpg';
import ballgown1 from '@/assets/ballgown-1.jpg';
import leggings1 from '@/assets/leggings-1.jpg';
import capeDress1 from '@/assets/cape-dress-1.jpg';
import miniDress1 from '@/assets/mini-dress-1.jpg';
import wrapDress1 from '@/assets/wrap-dress-1.jpg';
import corset1 from '@/assets/corset-1.jpg';
import tunic1 from '@/assets/tunic-1.jpg';

export const mockProducts: Product[] = [
  {
    id: 'holo-gown-001',
    name: 'Holographic Evening Gown',
    price: 2800,
    priceUSD: 420,
    image: gown1,
    category: 'Luxury Evening',
    description: 'Stunning holographic gown with programmable light patterns. Features gesture-controlled color changes and integrated AR projection for virtual accessories.',
    materials: ['Light-Fiber', 'Synthetic Diamond Dust', 'Memory Fabric'],
    blockchain: {
      origin: 'Milano 3.0',
      certifications: ['Eco-Luxury', 'Zero Waste', 'Artisan Crafted'],
      sustainabilityScore: 88
    }
  },
  {
    id: 'bio-dress-002',
    name: 'Living Bio-Dress',
    price: 4200,
    priceUSD: 630,
    image: dress2,
    category: 'Avant-Garde',
    description: 'Living dress with bioluminescent patterns that respond to music and emotions. Self-repairing fabric with integrated air purification.',
    materials: ['Bio-Silk', 'Living Algae Fibers', 'Organic LED'],
    blockchain: {
      origin: 'Amsterdam Bio-Lab',
      certifications: ['Bio-Innovation', 'Living Fashion', 'Carbon Negative'],
      sustainabilityScore: 98
    }
  },
  {
    id: 'silk-blouse-003',
    name: 'Quantum Silk Blouse',
    price: 980,
    priceUSD: 147,
    image: blouse1,
    category: 'Business Luxury',
    description: 'Phase-shifting silk blouse with temperature adaptation and wrinkle-free memory. Embedded with health monitoring nanosensors.',
    materials: ['Quantum Silk', 'Silver Nanothread', 'Bio-Polymer'],
    blockchain: {
      origin: 'Swiss Tech Valley',
      certifications: ['Health+', 'Biodegradable', 'Energy Efficient'],
      sustainabilityScore: 95
    }
  },
  {
    id: 'cyber-coat-004',
    name: 'Neo-Victorian Overcoat',
    price: 3500,
    priceUSD: 525,
    image: coat1,
    category: 'Outerwear Couture',
    description: 'Elegant overcoat with adaptive weather shield and self-cleaning fabric. Features hidden solar panels for device charging.',
    materials: ['Weather-Tech Wool', 'Titanium Fibers', 'Hydrophobic Coating'],
    blockchain: {
      origin: 'London Fashion Lab',
      certifications: ['Heritage Craft', 'Weather Proof', 'Smart Grid'],
      sustainabilityScore: 87
    }
  },
  {
    id: 'cocktail-dress-005',
    name: 'Morphing Cocktail Dress',
    price: 1850,
    priceUSD: 278,
    image: dress1,
    category: 'Smart Cocktail',
    description: 'Shape-shifting cocktail dress that adapts length and silhouette via app control. Chromatic fabric changes color with lighting.',
    materials: ['Shape-Memory Alloy', 'Chromatic Fiber', 'Nano-Mesh'],
    blockchain: {
      origin: 'Paris Innovation Hub',
      certifications: ['Fashion Tech', 'Recyclable', 'AI-Enhanced'],
      sustainabilityScore: 91
    }
  },
  {
    id: 'luxury-skirt-006',
    name: 'Floating Pleat Skirt',
    price: 1450,
    priceUSD: 218,
    image: skirt1,
    category: 'Designer Skirts',
    description: 'Anti-gravity pleated skirt with magnetic levitation hem. Self-adjusting waistband with biometric comfort sensing.',
    materials: ['Aerogel Fabric', 'Magnetic Silk', 'Smart Elastic'],
    blockchain: {
      origin: 'Tokyo Future Fashion',
      certifications: ['Innovation Award', 'Comfort+', 'Zero Gravity'],
      sustainabilityScore: 89
    }
  },
  {
    id: 'designer-pants-007',
    name: 'Holographic Palazzo Pants',
    price: 1680,
    priceUSD: 252,
    image: pants1,
    category: 'Designer Pants',
    description: 'Wide-leg palazzo pants with holographic shimmer effect. Temperature-regulating fabric with built-in air circulation.',
    materials: ['Holo-Cotton', 'Cooling Mesh', 'Bio-Bamboo'],
    blockchain: {
      origin: 'Seoul Fashion Tech',
      certifications: ['Comfort Elite', 'Eco-Fashion', 'Breathable+'],
      sustainabilityScore: 93
    }
  },
  {
    id: 'evening-wrap-008',
    name: 'Aurora Cashmere Wrap',
    price: 2200,
    priceUSD: 330,
    image: wrap1,
    category: 'Luxury Wraps',
    description: 'Color-shifting cashmere wrap with aurora borealis effect. Self-warming technology with gesture-controlled temperature.',
    materials: ['Smart Cashmere', 'Aurora Fiber', 'Thermal Mesh'],
    blockchain: {
      origin: 'Iceland Craft Studio',
      certifications: ['Pure Luxury', 'Sustainable Wool', 'Nordic Heritage'],
      sustainabilityScore: 96
    }
  },
  {
    id: 'midi-dress-009',
    name: 'AI-Tailored Midi Dress',
    price: 1380,
    priceUSD: 207,
    image: dress1,
    category: 'Smart Casual',
    description: 'Self-fitting midi dress that adjusts to body measurements in real-time. Includes posture correction technology.',
    materials: ['Adaptive Fabric', 'Memory Cotton', 'Flex-Polymer'],
    blockchain: {
      origin: 'Berlin Tech Atelier',
      certifications: ['Body Positive', 'Adaptive Fashion', 'Health Tech'],
      sustainabilityScore: 94
    }
  },
  {
    id: 'luxury-romper-010',
    name: 'Crystal Embedded Romper',
    price: 2450,
    priceUSD: 368,
    image: romper1,
    category: 'Luxury Playsuit',
    description: 'Designer romper with embedded healing crystals and chakra-balancing frequencies. UV-protective with antimicrobial properties.',
    materials: ['Crystal Mesh', 'Bio-Lycra', 'Energy Fabric'],
    blockchain: {
      origin: 'LA Wellness Fashion',
      certifications: ['Wellness+', 'UV Shield', 'Crystal Verified'],
      sustainabilityScore: 90
    }
  },
  {
    id: 'designer-blazer-011',
    name: 'Power Suit Blazer',
    price: 2850,
    priceUSD: 428,
    image: blazer1,
    category: 'Business Elite',
    description: 'Executive blazer with built-in presentation hologram projector. Stress-reducing fabric with aromatherapy diffusion.',
    materials: ['Executive Wool', 'Tech-Linen', 'Aroma-Fiber'],
    blockchain: {
      origin: 'New York Executive',
      certifications: ['Corporate Elite', 'Stress-Free', 'Power Dressing'],
      sustainabilityScore: 88
    }
  },
  {
    id: 'maxi-dress-012',
    name: 'Goddess Maxi Dress',
    price: 3200,
    priceUSD: 480,
    image: maxi1,
    category: 'Red Carpet',
    description: 'Floor-length gown with constellation mapping LED patterns. Self-supporting bodice with anti-gravity technology.',
    materials: ['Star-Silk', 'LED Mesh', 'Support-Tech'],
    blockchain: {
      origin: 'Hollywood Couture',
      certifications: ['Red Carpet Ready', 'Star Quality', 'Luxury Elite'],
      sustainabilityScore: 85
    }
  },
  {
    id: 'pencil-skirt-013',
    name: 'Neo-Classic Pencil Skirt',
    price: 890,
    priceUSD: 134,
    image: pencilSkirt1,
    category: 'Office Chic',
    description: 'Smart pencil skirt with auto-adjust hem length for sitting/standing. Wrinkle-free with stain-repelling nanotechnology.',
    materials: ['Smart Wool', 'Nano-Cotton', 'Flex-Waist'],
    blockchain: {
      origin: 'Milan Business Fashion',
      certifications: ['Office Ready', 'Professional+', 'Easy Care'],
      sustainabilityScore: 92
    }
  },
  {
    id: 'culotte-set-014',
    name: 'Floating Culotte Set',
    price: 1580,
    priceUSD: 237,
    image: culotte1,
    category: 'Contemporary',
    description: 'Wide-leg culottes with matching top featuring magnetic closure. Includes mood-responsive color gradients.',
    materials: ['Flow-Fabric', 'Magnetic Silk', 'Mood-Tech'],
    blockchain: {
      origin: 'Copenhagen Design Lab',
      certifications: ['Minimalist Luxury', 'Scandinavian', 'Mood Fashion'],
      sustainabilityScore: 97
    }
  },
  {
    id: 'designer-jumpsuit-015',
    name: 'Zero-G Jumpsuit',
    price: 2680,
    priceUSD: 402,
    image: jumpsuit1,
    category: 'Space Couture',
    description: 'Anti-gravity jumpsuit designed for space tourism. Features pressure regulation and radiation shielding.',
    materials: ['Space-Grade Polymer', 'Radiation Shield', 'Pressure-Tech'],
    blockchain: {
      origin: 'SpaceX Fashion Division',
      certifications: ['Space Ready', 'NASA Approved', 'Zero-G Tested'],
      sustainabilityScore: 86
    }
  },
  {
    id: 'ball-gown-016',
    name: 'Quantum Ball Gown',
    price: 5800,
    priceUSD: 870,
    image: ballgown1,
    category: 'Haute Couture',
    description: 'Magnificent ball gown with quantum fabric that exists in multiple color states simultaneously. Includes holographic train projection.',
    materials: ['Quantum Silk', 'Hologram Tulle', 'Diamond Dust'],
    blockchain: {
      origin: 'Vienna Opera House Atelier',
      certifications: ['Haute Couture', 'Museum Quality', 'Quantum Fashion'],
      sustainabilityScore: 83
    }
  },
  {
    id: 'smart-leggings-017',
    name: 'Bio-Metric Leggings',
    price: 680,
    priceUSD: 102,
    image: leggings1,
    category: 'Athleisure Luxe',
    description: 'Performance leggings with muscle recovery technology. Real-time posture correction and circulation enhancement.',
    materials: ['Recovery-Tech', 'Compression Mesh', 'Bio-Elastic'],
    blockchain: {
      origin: 'Swiss Sports Lab',
      certifications: ['Medical Grade', 'Performance+', 'Recovery Tech'],
      sustainabilityScore: 94
    }
  },
  {
    id: 'cape-dress-018',
    name: 'Ethereal Cape Dress',
    price: 3450,
    priceUSD: 518,
    image: capeDress1,
    category: 'Fantasy Couture',
    description: 'Flowing cape dress with levitating hem technology. Features aurora-inspired light patterns and wind-responsive fabric.',
    materials: ['Float-Silk', 'Light-Weave', 'Wind-Tech'],
    blockchain: {
      origin: 'Nordic Fantasy Fashion',
      certifications: ['Ethereal Collection', 'Wind Powered', 'Light Art'],
      sustainabilityScore: 91
    }
  },
  {
    id: 'mini-dress-019',
    name: 'Hologram Mini Dress',
    price: 1280,
    priceUSD: 192,
    image: miniDress1,
    category: 'Party Luxe',
    description: 'Interactive mini dress with gesture-controlled holographic patterns. Includes music-sync light show capability.',
    materials: ['Holo-Mesh', 'Party-Tech', 'Sound-Reactive'],
    blockchain: {
      origin: 'Ibiza Tech Fashion',
      certifications: ['Party Ready', 'Music Fashion', 'Interactive Wear'],
      sustainabilityScore: 87
    }
  },
  {
    id: 'wrap-dress-020',
    name: 'Infinity Wrap Dress',
    price: 1150,
    priceUSD: 173,
    image: wrapDress1,
    category: 'Versatile Luxury',
    description: 'Multi-way wrap dress with 50+ styling options via smart fabric. Self-tying technology with perfect fit guarantee.',
    materials: ['Smart Stretch', 'Memory Silk', 'Adapt-Tech'],
    blockchain: {
      origin: 'Tokyo Innovation Studio',
      certifications: ['Versatile Fashion', 'One Dress Revolution', 'Smart Style'],
      sustainabilityScore: 95
    }
  },
  {
    id: 'corset-top-021',
    name: 'Neo-Corset Top',
    price: 1680,
    priceUSD: 252,
    image: corset1,
    category: 'Modern Vintage',
    description: 'Tech-enhanced corset with automatic lacing and perfect fit adjustment. Posture support with breathable smart fabric.',
    materials: ['Smart Boning', 'Breathe-Tech', 'Auto-Lace'],
    blockchain: {
      origin: 'Victorian Tech London',
      certifications: ['Modern Heritage', 'Comfort Corset', 'Smart Vintage'],
      sustainabilityScore: 89
    }
  },
  {
    id: 'designer-tunic-022',
    name: 'Floating Tunic Dress',
    price: 1380,
    priceUSD: 207,
    image: tunic1,
    category: 'Ethereal Casual',
    description: 'Weightless tunic with anti-gravity fibers creating a floating effect. Color-changing fabric responds to wearer\'s aura.',
    materials: ['Anti-Grav Fiber', 'Aura-Silk', 'Float-Cotton'],
    blockchain: {
      origin: 'Zen Fashion Kyoto',
      certifications: ['Mindful Fashion', 'Aura Responsive', 'Weightless Wear'],
      sustainabilityScore: 93
    }
  }
];