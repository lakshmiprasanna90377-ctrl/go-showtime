import { Facebook, Twitter, Instagram, Youtube, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: ["About Us", "Contact Us", "Careers", "Our Story", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "FAQs", "Terms & Conditions", "Privacy Policy", "Refund Policy"],
    },
    {
      title: "Services",
      links: ["Movie Tickets", "Event Tickets", "Gift Cards", "Corporate Bookings", "Bulk Bookings"],
    },
    {
      title: "Cities",
      links: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
    },
  ];

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent mb-4">
              CineBook
            </h3>
            <p className="text-muted-foreground mb-6">
              Your ultimate destination for booking movie tickets, events, and entertainment experiences.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-surface-hover">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-surface-hover">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-surface-hover">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-surface-hover">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="font-semibold mb-2">Download Our App</h4>
            <p className="text-muted-foreground text-sm">
              Get exclusive offers and book tickets on the go
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
            
            <Button variant="outline" className="flex items-center space-x-2">
              <Monitor className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CineBook. All rights reserved. | Made with ❤️ for movie lovers
          </p>
        </div>
      </div>
    </footer>
  );
};