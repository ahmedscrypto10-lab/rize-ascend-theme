import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "NEW", href: "#" },
    { label: "SHOP ALL", href: "#" },
    { label: "COLLECTIONS", href: "#" },
    { label: "ABOUT", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-black tracking-tighter text-primary">
            RIZE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide text-foreground hover:text-accent rize-transition uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="rize-ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="rize-ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="rize-ghost" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center">
              0
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="rize-ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden border-t border-border/10 bg-background",
        isMobileMenuOpen ? "block" : "hidden"
      )}>
        <nav className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm font-medium tracking-wide text-foreground hover:text-accent rize-transition uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-border/10">
            <Button variant="rize-ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="rize-ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="rize-ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;