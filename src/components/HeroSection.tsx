import { Play, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Movie Title */}
          <Badge className="bg-accent-gold text-accent-foreground mb-4">
            Now Playing
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-accent-gold bg-clip-text text-transparent">
            Blockbuster Action
          </h1>
          
          {/* Movie Details */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
            <span>2024</span>
            <span>•</span>
            <span>2h 35m</span>
            <span>•</span>
            <span>Action, Adventure</span>
            <span>•</span>
            <span>English, Hindi</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            An epic action-adventure that takes you on a thrilling journey through spectacular 
            visuals and heart-stopping sequences. Experience cinema like never before.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="btn-cinema-primary text-lg px-8 py-6"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Tickets
            </Button>
            
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              size="lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex items-center space-x-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Available in 2D, 3D, IMAX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};