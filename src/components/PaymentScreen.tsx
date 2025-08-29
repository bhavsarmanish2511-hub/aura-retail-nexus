import React, { useState } from 'react';
import { CreditCard, Fingerprint, Wallet, Bot, Package, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PaymentScreenProps {
  total: number;
  totalUSD: number;
  onConfirm: (paymentMethod: string, deliveryMethod: string) => void;
}

export const PaymentScreen: React.FC<PaymentScreenProps> = ({ total, totalUSD, onConfirm }) => {
  const [selectedPayment, setSelectedPayment] = useState('crypto');
  const [selectedDelivery, setSelectedDelivery] = useState('humanoid');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const paymentMethods = [
    { id: 'crypto', name: 'CryptoPay', icon: Wallet, description: 'Instant blockchain payment' },
    { id: 'biometric', name: 'Biometric Pay', icon: Fingerprint, description: 'Secure bio-authentication' },
    { id: 'ai', name: 'AI Wallet', icon: CreditCard, description: 'Smart contract payment' },
  ];

  const deliveryMethods = [
    { id: 'humanoid', name: 'Humanoid Delivery', icon: Bot, description: 'Personal robot delivery', eta: '2-3 hours' },
    { id: 'locker', name: 'Smart Locker', icon: Package, description: 'Quantum locker pickup', eta: '30 minutes' },
  ];

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsConfirmed(true);
      onConfirm(selectedPayment, selectedDelivery);
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-[600px] flex items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-md">
          {/* Success Animation */}
          <div className="relative">
            <div className="h-32 w-32 mx-auto glassmorphism rounded-full flex items-center justify-center border border-primary/30">
              <Check className="h-16 w-16 text-primary animate-pulse-neon" />
            </div>
            <div className="absolute inset-0 h-32 w-32 mx-auto rounded-full bg-primary/20 animate-ping" />
          </div>

          {/* Order Confirmation */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground font-orbitron">Order Confirmed!</h2>
            <div className="glassmorphism rounded-xl p-4 border border-primary/30">
              <p className="text-sm text-muted-foreground mb-2">Order ID</p>
              <p className="text-lg font-mono text-neon-cyan">#ORD-9X73-{Date.now().toString().slice(-4)}</p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="glassmorphism rounded-xl p-4 border border-secondary/30">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-secondary animate-float" />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Humanoid Delivery Scheduled</p>
                <p className="text-xs text-muted-foreground">ETA: 2-3 hours</p>
                <p className="text-xs text-secondary mt-1">Unit: ALEX-7 assigned to your order</p>
              </div>
            </div>
          </div>

          {/* Karen Message */}
          <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
            <p className="text-sm text-foreground">
              <span className="text-secondary font-semibold">Karen:</span> "Congratulations Hannah! Your order is confirmed. ALEX-7 will deliver your items. You can track the delivery in real-time!"
            </p>
          </div>

          <Button variant="neon" className="w-full">
            Track Delivery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Payment Method
        </h3>
        <div className="space-y-2">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={cn(
                  "glassmorphism rounded-xl p-4 border cursor-pointer transition-all duration-300",
                  selectedPayment === method.id
                    ? "border-primary/50 bg-primary/10"
                    : "border-border/30 hover:border-primary/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center",
                    selectedPayment === method.id
                      ? "bg-primary/20 text-primary"
                      : "bg-card/30 text-muted-foreground"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{method.name}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                  {selectedPayment === method.id && (
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Delivery Options */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Delivery Option
        </h3>
        <div className="space-y-2">
          {deliveryMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                onClick={() => setSelectedDelivery(method.id)}
                className={cn(
                  "glassmorphism rounded-xl p-4 border cursor-pointer transition-all duration-300",
                  selectedDelivery === method.id
                    ? "border-secondary/50 bg-secondary/10"
                    : "border-border/30 hover:border-secondary/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center",
                    selectedDelivery === method.id
                      ? "bg-secondary/20 text-secondary"
                      : "bg-card/30 text-muted-foreground"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{method.name}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                    <p className="text-xs text-secondary mt-1">ETA: {method.eta}</p>
                  </div>
                  {selectedDelivery === method.id && (
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center">
                      <Check className="h-3 w-3 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Summary */}
      <div className="glassmorphism rounded-xl p-4 border border-primary/30">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Total Amount</span>
          <span className="text-xl font-bold text-neon-cyan">₿{total} Credits</span>
        </div>
      </div>

      {/* Confirm Button */}
      <Button 
        variant="neon"
        className="w-full"
        onClick={handleConfirm}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Processing...
          </span>
        ) : (
          'Confirm & Pay'
        )}
      </Button>
    </div>
  );
};