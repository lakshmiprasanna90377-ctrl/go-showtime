import { useState } from "react";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, SortAsc } from "lucide-react";
import moviePoster1 from "@/assets/movie-poster-1.jpg";
import moviePoster2 from "@/assets/movie-poster-2.jpg";
import moviePoster3 from "@/assets/movie-poster-3.jpg";
import moviePoster4 from "@/assets/movie-poster-4.jpg";

export default function Movies() {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const movies = [
    {
      id: "1",
      title: "Thunder Strike: Rise of Heroes",
      poster: moviePoster1,
      rating: 8.5,
      genre: ["Action", "Thriller", "Adventure"],
      language: "English",
      format: ["2D", "3D", "IMAX"],
      releaseDate: "15 Nov 2024",
    },
    {
      id: "2",
      title: "Cosmic Adventure: Beyond the Stars",
      poster: moviePoster2,
      rating: 9.1,
      genre: ["Sci-Fi", "Adventure", "Drama"],
      language: "English",
      format: ["2D", "3D", "IMAX"],
      releaseDate: "20 Nov 2024",
    },
    {
      id: "3",
      title: "Love in Paris: A Romantic Journey",
      poster: moviePoster3,
      rating: 7.8,
      genre: ["Romance", "Drama", "Comedy"],
      language: "English",
      format: ["2D"],
      releaseDate: "22 Nov 2024",
    },
    {
      id: "4",
      title: "Comedy Central: Family Fun",
      poster: moviePoster4,
      rating: 8.2,
      genre: ["Comedy", "Family", "Animation"],
      language: "Hindi",
      format: ["2D"],
      releaseDate: "18 Nov 2024",
    },
    // Duplicate movies for demonstration
    {
      id: "5",
      title: "Action Hero Returns",
      poster: moviePoster1,
      rating: 7.9,
      genre: ["Action", "Drama"],
      language: "Hindi",
      format: ["2D", "3D"],
      releaseDate: "25 Nov 2024",
    },
    {
      id: "6",
      title: "Space Odyssey 2024",
      poster: moviePoster2,
      rating: 8.7,
      genre: ["Sci-Fi", "Thriller"],
      language: "English",
      format: ["2D", "IMAX"],
      releaseDate: "28 Nov 2024",
    },
  ];

  const genres = ["All", "Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Thriller"];
  const languages = ["All", "English", "Hindi", "Tamil", "Telugu"];
  const formats = ["All", "2D", "3D", "IMAX"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Movie Tickets
          </h1>
          <p className="text-xl text-muted-foreground">
            Book tickets for the latest movies playing near you
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-surface-elevated border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre.toLowerCase()}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language.toLowerCase()}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  {formats.map((format) => (
                    <SelectItem key={format} value={format.toLowerCase()}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                Clear Filters
              </Button>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <SortAsc className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedGenre !== "all" && (
              <Badge variant="secondary" className="cursor-pointer hover:bg-destructive">
                Genre: {selectedGenre} ×
              </Badge>
            )}
            {selectedLanguage !== "all" && (
              <Badge variant="secondary" className="cursor-pointer hover:bg-destructive">
                Language: {selectedLanguage} ×
              </Badge>
            )}
            {selectedFormat !== "all" && (
              <Badge variant="secondary" className="cursor-pointer hover:bg-destructive">
                Format: {selectedFormat} ×
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Movies in Mumbai ({movies.length} Movies)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Movies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}