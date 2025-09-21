import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "New Arrivals", href: "#" },
        { label: "Best Sellers", href: "#" },
        { label: "Collections", href: "#" },
        { label: "Sale", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Size Guide", href: "#" },
        { label: "Shipping", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black tracking-tighter mb-4">RIZE</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Define your ascent. Built for movement, designed for the moment. 
              Premium streetwear for those who refuse to settle.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="rize-ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-accent uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent rize-transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 RIZE. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent rize-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent rize-transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent rize-transition">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;