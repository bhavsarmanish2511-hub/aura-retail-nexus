import React from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from './ProductCard';
import { cn } from '@/lib/utils';

interface AIRecommendationsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({ 
  products, 
  onProductClick 
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="glassmorphism rounded-2xl p-4 border border-secondary/30">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
        <h3 className="font-semibold text-foreground">Karen's Recommendations</h3>
        <span className="ml-auto text-xs text-secondary">AI Curated</span>
      </div>

      {/* Recommendation Cards */}
      <div className="relative">
        <Button
          variant="glass"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="glass"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-40 cursor-pointer group"
              onClick={() => onProductClick(product)}
            >
              <div className="relative glassmorphism rounded-xl p-3 border border-border/30 hover:border-secondary/50 transition-all duration-300">
                {/* AR Preview Badge */}
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30">
                  <span className="text-xs text-secondary font-medium">AR</span>
                </div>

                {/* Product Image */}
                <div className="h-32 rounded-lg overflow-hidden bg-card/30 mb-2">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <h4 className="text-xs font-semibold text-foreground truncate">{product.name}</h4>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-sm font-bold text-neon-purple">₿{product.price}</span>
                  <span className="text-xs text-muted-foreground">Credits</span>
                </div>

                {/* AI Match Score */}
                <div className="mt-2 flex items-center gap-1">
                  <div className="flex-1 h-1 bg-background/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                      style={{ width: `${85 + Math.random() * 15}%` }}
                    />
                  </div>
                  <span className="text-xs text-secondary">Match</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="mt-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
        <p className="text-xs text-foreground">
          <span className="text-secondary font-semibold">Karen says:</span> "These items match your style profile and recent purchases. The smart jacket pairs perfectly with your last order!"
        </p>
      </div>
    </div>
  );
};