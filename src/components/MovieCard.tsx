import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string[];
  language: string;
  format: string[];
  releaseDate?: string;
  isComingSoon?: boolean;
}

export const MovieCard = ({
  title,
  poster,
  rating,
  genre,
  language,
  format,
  releaseDate,
  isComingSoon = false,
}: MovieCardProps) => {
  return (
    <div className="movie-card group cursor-pointer">
      {/* Poster */}
      <div className="relative overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Coming Soon Badge */}
        {isComingSoon && (
          <Badge className="absolute top-2 left-2 bg-accent-gold text-accent-foreground">
            Coming Soon
          </Badge>
        )}

        {/* Overlay with Book Button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button className="btn-cinema-primary w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {isComingSoon ? "Notify Me" : "Book Tickets"}
          </Button>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
          <span className="text-sm font-medium">{rating}/10</span>
          <span className="text-xs text-muted-foreground">
            ({Math.floor(Math.random() * 50 + 10)}K votes)
          </span>
        </div>

        {/* Genre */}
        <div className="flex flex-wrap gap-1 mb-2">
          {genre.slice(0, 2).map((g) => (
            <Badge key={g} variant="secondary" className="text-xs">
              {g}
            </Badge>
          ))}
        </div>

        {/* Language and Format */}
        <div className="text-sm text-muted-foreground mb-1">
          {language} • {format.join(", ")}
        </div>

        {/* Release Date */}
        {releaseDate && (
          <div className="text-xs text-muted-foreground">
            {isComingSoon ? `Releases ${releaseDate}` : `Released ${releaseDate}`}
          </div>
        )}
      </div>
    </div>
  );
};