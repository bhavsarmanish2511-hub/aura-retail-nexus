import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Product {
  id: string;
  name: string;
  price: number;
  priceUSD: number;
  image: string;
  category: string;
  description: string;
  materials: string[];
  blockchain: {
    origin: string;
    certifications: string[];
    sustainabilityScore: number;
  };
}

interface ProductCardProps {
  product: Product;
  onQRClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQRClick, onAddToCart }) => {
  return (
    <div className="relative group">
      {/* Holographic effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glassmorphism rounded-2xl p-4 border border-border/30 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-card/50 to-card/30">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          
          {/* QR Code Badge - Bigger and Blinking */}
          <button
            onClick={() => onQRClick(product)}
            className="absolute top-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border-2 border-primary/50 hover:border-primary hover:bg-primary/20 transition-all duration-300 group/qr shadow-lg hover:shadow-neon"
          >
            <QrCode className="h-8 w-8 text-primary animate-blink" />
            <span className="absolute -bottom-5 right-0 text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full animate-pulse-neon">
              DPP
            </span>
          </button>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30">
            <span className="text-xs text-secondary font-medium">{product.category}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground font-orbitron">{product.name}</h3>
          
          {/* Price with futuristic currency */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neon-cyan">₿{product.price}</span>
              <span className="text-xs text-muted-foreground">Credits</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-semibold text-foreground">${product.priceUSD}</span>
              <span className="text-xs text-muted-foreground">USD</span>
            </div>
          </div>

          {/* Sustainability Score */}
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <div className="flex-1 h-2 bg-background/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-500"
                style={{ width: `${product.blockchain.sustainabilityScore}%` }}
              />
            </div>
            <span className="text-xs text-accent">{product.blockchain.sustainabilityScore}%</span>
          </div>

          {/* Materials */}
          <div className="flex flex-wrap gap-1">
            {product.materials.slice(0, 2).map((material, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-card/30 rounded-lg text-muted-foreground"
              >
                {material}
              </span>
            ))}
          </div>

          {/* Add to Cart Button */}
          <Button 
            variant="glass"
            className="w-full mt-3 group/btn"
            onClick={() => onAddToCart(product)}
          >
            <span className="group-hover/btn:text-primary transition-colors">Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};