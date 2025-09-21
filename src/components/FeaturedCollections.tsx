import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Essential",
      subtitle: "Core Pieces",
      description: "Timeless streetwear essentials that define your everyday style",
      image: collection1,
      link: "#",
    },
    {
      id: 2,
      title: "Urban",
      subtitle: "City Life",
      description: "Built for the streets, designed for the hustle",
      image: collection2,
      link: "#",
    },
    {
      id: 3,
      title: "Limitless",
      subtitle: "Premium Line",
      description: "Exclusive pieces for those who demand excellence",
      image: collection3,
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-4 uppercase">
            Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each collection tells a story. Find yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg rize-transition animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 rize-transition"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 rize-transition">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Button
                    variant="rize"
                    size="sm"
                    className="w-full group/btn"
                  >
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 rize-transition" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {collection.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-tight">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;