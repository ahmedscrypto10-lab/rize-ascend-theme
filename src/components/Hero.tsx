import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary-foreground mb-6 uppercase">
            Define Your
            <span className="block text-accent animate-glow-pulse">Ascent</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium">
            Built for movement. Designed for the moment. 
            Discover streetwear that moves with your ambition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="rize" 
              size="xl" 
              className="group w-full sm:w-auto"
            >
              Shop New Arrivals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 rize-transition" />
            </Button>
            
            <Button 
              variant="rize-outline" 
              size="xl"
              className="w-full sm:w-auto text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;