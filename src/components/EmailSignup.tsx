import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Welcome to RIZE!",
        description: "Check your email for your 10% discount code.",
      });
    }, 500);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 uppercase tracking-tight">
              You're In!
            </h2>
            <p className="text-lg text-muted-foreground">
              Welcome to the RIZE community. Your discount code is on its way.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase tracking-tight">
            Join the Movement
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be the first to know about new drops, exclusive releases, and get 10% off your first order.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background border-border/20 focus:border-accent rize-transition"
              required
            />
            <Button 
              type="submit" 
              variant="rize" 
              size="lg"
              className="group sm:w-auto"
              disabled={!email}
            >
              Get 10% Off
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 rize-transition" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;