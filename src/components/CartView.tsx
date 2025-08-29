import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from './ProductCard';
import { cn } from '@/lib/utils';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartViewProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartView: React.FC<CartViewProps> = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}) => {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="space-y-4">
      {/* Cart Items */}
      {items.length === 0 ? (
        <div className="glassmorphism rounded-2xl p-8 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div 
              key={item.product.id}
              className="glassmorphism rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="h-24 w-24 rounded-lg overflow-hidden bg-card/30 flex-shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-foreground">{item.product.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-neon-cyan">₿{item.product.price}</span>
                    <span className="text-xs text-muted-foreground">Credits</span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="glass"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-12 text-center text-sm font-medium text-foreground">
                      {item.quantity}
                    </span>
                    <Button
                      variant="glass"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 ml-auto text-destructive hover:bg-destructive/10"
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {items.length > 0 && (
        <div className="glassmorphism rounded-xl p-4 border border-primary/30">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">₿{total}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quantum Shipping</span>
              <span className="text-accent">FREE</span>
            </div>
            <div className="h-px bg-border/30 my-2" />
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="text-xl font-bold text-neon-cyan">₿{total} Credits</span>
            </div>
          </div>

          <Button 
            variant="neon"
            className="w-full mt-4"
            onClick={onCheckout}
          >
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};