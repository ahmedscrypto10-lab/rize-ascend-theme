const BrandStatement = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 uppercase leading-tight">
            Built for Movement.
            <span className="block text-accent">Designed for the Moment.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            At RIZE, we believe that true style comes from authentic expression. 
            Every piece is crafted for those who refuse to settle, who push boundaries, 
            and who understand that your ascent is your own.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-black text-accent mb-2">
                100%
              </div>
              <div className="text-sm uppercase tracking-wider font-medium">
                Premium Materials
              </div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-black text-accent mb-2">
                24/7
              </div>
              <div className="text-sm uppercase tracking-wider font-medium">
                Comfort Promise
              </div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-black text-accent mb-2">
                ∞
              </div>
              <div className="text-sm uppercase tracking-wider font-medium">
                Limitless Potential
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;