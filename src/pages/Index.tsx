import React, { useState, useEffect } from 'react';
import { ProductCard, Product } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { CartView, CartItem } from '@/components/CartView';
import { AIRecommendations } from '@/components/AIRecommendations';
import { PaymentScreen } from '@/components/PaymentScreen';
import { KarenAI } from '@/components/KarenAI';
import { mockProducts } from '@/data/mockProducts';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Screen = 'catalog' | 'cart' | 'payment';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('catalog');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showBlockchainView, setShowBlockchainView] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Handle hash changes for blockchain view
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#blockchain-view') {
        setShowBlockchainView(true);
      } else if (window.location.hash === '#product-detail') {
        setShowBlockchainView(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleQRClick = (product: Product) => {
    setSelectedProduct(product);
    setShowBlockchainView(false);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setSelectedProduct(null);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setCurrentScreen('payment');
  };

  const handlePaymentConfirm = (paymentMethod: string, deliveryMethod: string) => {
    console.log('Payment confirmed:', { paymentMethod, deliveryMethod });
    // Clear the cart after successful order
    setCart([]);
    setCurrentScreen('catalog');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartTotalUSD = cart.reduce((sum, item) => sum + (item.product.priceUSD * item.quantity), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto min-h-screen relative">
        {/* Header */}
        <header className="sticky top-0 z-30 glassmorphism border-b border-border/30">
          <div className="flex items-center justify-between p-4">
            {currentScreen !== 'catalog' && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentScreen(currentScreen === 'payment' ? 'cart' : 'catalog')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-xl font-bold font-orbitron text-neon-cyan flex-1 text-center">
              NeoWear 2035
            </h1>
            {currentScreen === 'catalog' && (
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setCurrentScreen('cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary rounded-full text-xs flex items-center justify-center text-secondary-foreground">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            )}
            {currentScreen !== 'catalog' && <div className="w-10" />}
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 pb-20">
          {/* Screen 1: Product Catalog */}
          {currentScreen === 'catalog' && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground font-orbitron mb-2">
                  Hello, Hannah
                </h2>
                <p className="text-sm text-muted-foreground">
                  Explore our blockchain-verified collection
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {mockProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQRClick={handleQRClick}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </>
          )}

          {/* Screen 2: Shopping Cart */}
          {currentScreen === 'cart' && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground font-orbitron mb-2">
                  Shopping Cart
                </h2>
                <p className="text-sm text-muted-foreground">
                  {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'} • ₿{cartTotal} Credits
                </p>
              </div>

              <CartView
                items={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onCheckout={handleCheckout}
              />

              {cart.length > 0 && (
                <div className="mt-6">
                  <AIRecommendations
                    products={mockProducts.filter(p => !cart.find(item => item.product.id === p.id))}
                    onProductClick={handleAddToCart}
                  />
                </div>
              )}
            </>
          )}

          {/* Screen 3: Payment */}
          {currentScreen === 'payment' && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground font-orbitron mb-2">
                  Secure Checkout
                </h2>
                <p className="text-sm text-muted-foreground">
                  Quantum-encrypted payment
                </p>
              </div>

              <PaymentScreen
                total={cartTotal}
                totalUSD={cartTotalUSD}
                onConfirm={handlePaymentConfirm}
              />
            </>
          )}
        </main>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            showBlockchain={showBlockchainView}
          />
        )}

        {/* Karen AI Assistant */}
        <KarenAI
          onMessage={(message) => console.log('Karen AI:', message)}
        />
      </div>
    </div>
  );
};

export default Index;