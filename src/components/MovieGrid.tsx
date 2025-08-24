import { MovieCard } from "./MovieCard";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";
import moviePoster3 from "@/assets/movie-poster-3.jpg";
import moviePoster4 from "@/assets/movie-poster-4.jpg";

interface MovieGridProps {
  title: string;
  subtitle?: string;
  isComingSoon?: boolean;
}

export const MovieGrid = ({ title, subtitle, isComingSoon = false }: MovieGridProps) => {
  const movies = [
    {
      id: "1",
      title: "Thunder Strike",
      poster: moviePoster1,
      rating: 8.5,
      genre: ["Action", "Thriller"],
      language: "English",
      format: ["2D", "3D", "IMAX"],
      releaseDate: isComingSoon ? "25 Dec 2024" : "15 Nov 2024",
    },
    {
      id: "2",
      title: "Cosmic Adventure",
      poster: moviePoster2,
      rating: 9.1,
      genre: ["Sci-Fi", "Adventure"],
      language: "English",
      format: ["2D", "3D", "IMAX"],
      releaseDate: isComingSoon ? "10 Jan 2025" : "20 Nov 2024",
    },
    {
      id: "3",
      title: "Love in Paris",
      poster: moviePoster3,
      rating: 7.8,
      genre: ["Romance", "Drama"],
      language: "English",
      format: ["2D"],
      releaseDate: isComingSoon ? "14 Feb 2025" : "22 Nov 2024",
    },
    {
      id: "4",
      title: "Comedy Central",
      poster: moviePoster4,
      rating: 8.2,
      genre: ["Comedy", "Family"],
      language: "Hindi",
      format: ["2D"],
      releaseDate: isComingSoon ? "5 Jan 2025" : "18 Nov 2024",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              isComingSoon={isComingSoon}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="text-primary hover:text-primary-light font-medium">
            View All {title} →
          </button>
        </div>
      </div>
    </section>
  );
};