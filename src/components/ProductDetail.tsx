import React from 'react';
import { X, Shield, Leaf, Globe, Factory, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from './ProductCard';
import { cn } from '@/lib/utils';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  showBlockchain?: boolean;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onClose, 
  onAddToCart,
  showBlockchain = false 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md glassmorphism rounded-2xl border border-primary/30 overflow-hidden">
        {/* Header */}
        <div className="relative h-64 bg-gradient-to-br from-card/50 to-card/30">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          
          <Button
            variant="glass"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Holographic QR Display */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="glassmorphism rounded-xl p-3 border border-primary/30">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 bg-primary/10 rounded-lg border border-primary/30 flex items-center justify-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded animate-pulse-neon" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Digital Product Passport</p>
                  <p className="text-sm font-mono text-primary">#DPP-{product.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-orbitron">{product.name}</h2>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-neon-cyan">₿{product.price}</span>
              <span className="text-sm text-muted-foreground">Credits</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{product.description}</p>

          {/* Materials */}
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
              Material Composition
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((material, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-card/30 rounded-full text-xs text-foreground border border-border/30"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {!showBlockchain ? (
            <>
              {/* Blockchain Preview */}
              <div className="glassmorphism rounded-xl p-4 border border-primary/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-foreground">Blockchain Verified</h3>
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Eco-Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-secondary" />
                    <span className="text-xs text-muted-foreground">{product.blockchain.origin}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost"
                  className="w-full mt-3 text-xs"
                  onClick={() => window.location.hash = '#blockchain-view'}
                >
                  View Full Blockchain Journey →
                </Button>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="neon"
                  className="flex-1"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button variant="outline">
                  Try AR
                </Button>
              </div>
            </>
          ) : (
            /* Blockchain Deep Dive */
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Blockchain Journey
              </h3>
              
              <div className="space-y-3">
                {/* Origin */}
                <div className="glassmorphism rounded-lg p-3 border border-border/30">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Origin</p>
                      <p className="text-sm text-foreground">{product.blockchain.origin}</p>
                      <p className="text-xs text-muted-foreground mt-1">Verified on Block #7892341</p>
                    </div>
                  </div>
                </div>

                {/* Manufacturing */}
                <div className="glassmorphism rounded-lg p-3 border border-border/30">
                  <div className="flex items-start gap-3">
                    <Factory className="h-5 w-5 text-secondary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Manufacturing</p>
                      <p className="text-sm text-foreground">Zero-Emission Factory</p>
                      <p className="text-xs text-muted-foreground mt-1">ISO 14001 Certified</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="glassmorphism rounded-lg p-3 border border-border/30">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-accent mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Certifications</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.blockchain.certifications.map((cert, index) => (
                          <span key={index} className="text-xs bg-accent/10 px-2 py-0.5 rounded text-accent">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sustainability Score */}
                <div className="glassmorphism rounded-lg p-3 border border-border/30">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Sustainability Score</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-background/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: `${product.blockchain.sustainabilityScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-primary">
                          {product.blockchain.sustainabilityScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="glass"
                className="w-full"
                onClick={() => window.location.hash = '#product-detail'}
              >
                ← Back to Product
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};