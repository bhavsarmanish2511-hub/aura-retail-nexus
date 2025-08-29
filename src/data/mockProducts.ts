import { Product } from '@/components/ProductCard';
import jacket1 from '@/assets/jacket-1.jpg';
import dress1 from '@/assets/dress-1.jpg';
import top1 from '@/assets/top-1.jpg';
import shoes1 from '@/assets/shoes-1.jpg';
import coat1 from '@/assets/coat-1.jpg';
import dress2 from '@/assets/dress-2.jpg';

export const mockProducts: Product[] = [
  {
    id: 'neo-jacket-001',
    name: 'NeoSkin Smart Jacket',
    price: 450,
    image: jacket1,
    category: 'Smart Wear',
    description: 'Adaptive temperature-regulating jacket with built-in air purification and holographic display panels. Features self-cleaning nanofibers and mood-responsive color shifting.',
    materials: ['Graphene Mesh', 'Bio-Silk', 'Nano-Carbon'],
    blockchain: {
      origin: 'Neo-Tokyo Lab',
      certifications: ['Carbon Neutral', 'Fair Trade 2035', 'Quantum Verified'],
      sustainabilityScore: 92
    }
  },
  {
    id: 'holo-dress-002',
    name: 'Holographic Evening Gown',
    price: 780,
    image: dress1,
    category: 'Luxury',
    description: 'Stunning holographic gown with programmable light patterns. Features gesture-controlled color changes and integrated AR projection for virtual accessories.',
    materials: ['Light-Fiber', 'Synthetic Diamond Dust', 'Memory Fabric'],
    blockchain: {
      origin: 'Milano 3.0',
      certifications: ['Eco-Luxury', 'Zero Waste', 'Artisan Crafted'],
      sustainabilityScore: 88
    }
  },
  {
    id: 'quantum-top-003',
    name: 'Quantum Phase Top',
    price: 230,
    image: top1,
    category: 'Everyday',
    description: 'Phase-shifting top that adapts to your environment. UV protection, antimicrobial properties, and biometric health monitoring built into the fabric.',
    materials: ['Phase-Cotton', 'Silver Nano-threads', 'Bio-Polymer'],
    blockchain: {
      origin: 'Swiss Tech Valley',
      certifications: ['Health+', 'Biodegradable', 'Energy Efficient'],
      sustainabilityScore: 95
    }
  },
  {
    id: 'gravity-shoes-004',
    name: 'Anti-Gravity Runners',
    price: 680,
    image: shoes1,
    category: 'Footwear',
    description: 'Revolutionary anti-gravity shoes with magnetic levitation soles. Self-lacing, gait analysis, and energy return system for effortless movement.',
    materials: ['Aerogel Sole', 'Carbon Nanotube', 'Smart Memory Foam'],
    blockchain: {
      origin: 'Berlin Innovation Hub',
      certifications: ['Performance+', 'Recyclable', 'Tech Pioneer'],
      sustainabilityScore: 90
    }
  },
  {
    id: 'cyber-coat-005',
    name: 'Cyberpunk Trench',
    price: 890,
    image: coat1,
    category: 'Outerwear',
    description: 'Water-repelling trench coat with integrated solar panels and device charging. Features cloaking mode for privacy and built-in air shield.',
    materials: ['Solar Fabric', 'Titanium Mesh', 'Hydrophobic Coating'],
    blockchain: {
      origin: 'Seoul Future Lab',
      certifications: ['Tech Fashion', 'Weather Proof', 'Smart Grid'],
      sustainabilityScore: 87
    }
  },
  {
    id: 'bio-dress-006',
    name: 'Living Bio-Dress',
    price: 1200,
    image: dress2,
    category: 'Avant-Garde',
    description: 'Living dress with bioluminescent patterns that respond to music and emotions. Self-repairing fabric with integrated air purification.',
    materials: ['Bio-Silk', 'Living Algae Fibers', 'Organic LED'],
    blockchain: {
      origin: 'Amsterdam Bio-Lab',
      certifications: ['Bio-Innovation', 'Living Fashion', 'Carbon Negative'],
      sustainabilityScore: 98
    }
  }
];