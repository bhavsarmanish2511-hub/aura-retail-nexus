import React, { useState } from 'react';
import { MessageCircle, Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface KarenAIProps {
  onMessage?: (message: string) => void;
}

export const KarenAI: React.FC<KarenAIProps> = ({ onMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (message.trim() && onMessage) {
      onMessage(message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Floating Karen AI Button */}
      <div 
        className={cn(
          "fixed bottom-6 left-6 z-50 transition-all duration-300",
          isOpen && "bottom-[320px]"
        )}
      >
        <Button
          variant="neon"
          size="icon"
          className="h-14 w-14 rounded-full animate-float neon-glow-purple"
          onClick={toggleChat}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
        <div className="absolute -top-2 -right-2 h-4 w-4 bg-secondary rounded-full animate-pulse-neon" />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-secondary whitespace-nowrap">
          Karen AI
        </span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-80 h-72 glassmorphism rounded-2xl border border-primary/30 z-40 flex flex-col">
          <div className="p-4 border-b border-border/30">
            <h3 className="text-sm font-semibold text-foreground">Karen AI Assistant</h3>
            <p className="text-xs text-muted-foreground">Your personal shopping guide</p>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-card/30 rounded-lg p-3 mb-3">
              <p className="text-sm text-foreground">
                Hello Hannah! I'm Karen, your AI shopping assistant. I can help you find the perfect outfit, track orders, or explore our blockchain-verified products.
              </p>
            </div>
            {message && (
              <div className="bg-primary/10 rounded-lg p-3 ml-8">
                <p className="text-sm text-foreground">{message}</p>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-border/30 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-background/50 border border-border/30 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <Button
              variant="glass"
              size="icon"
              onClick={() => setIsListening(!isListening)}
              className={cn(isListening && "bg-primary/20 border-primary")}
            >
              <Mic className={cn("h-4 w-4", isListening && "text-primary animate-pulse")} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};