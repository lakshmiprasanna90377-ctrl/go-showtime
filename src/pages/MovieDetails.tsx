import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Heart, 
  Share2, 
  Play, 
  Calendar, 
  Clock, 
  MapPin,
  ChevronDown 
} from "lucide-react";
import moviePoster1 from "@/assets/movie-poster-1.jpg";

export default function MovieDetails() {
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedCinema, setSelectedCinema] = useState("");

  const movie = {
    title: "Thunder Strike: Rise of Heroes",
    poster: moviePoster1,
    rating: 8.5,
    votes: "45.2K",
    genre: ["Action", "Thriller", "Adventure"],
    language: ["English", "Hindi"],
    format: ["2D", "3D", "IMAX"],
    duration: "2h 35m",
    releaseDate: "15 Nov 2024",
    certification: "UA",
    synopsis: "An epic action-adventure that follows a group of unlikely heroes as they band together to save the world from an ancient threat. With spectacular visual effects and heart-stopping action sequences, this film takes audiences on an unforgettable journey through stunning landscapes and intense battles.",
  };

  const cast = [
    { name: "John Anderson", role: "Hero", image: "/placeholder-actor.jpg" },
    { name: "Emma Wilson", role: "Heroine", image: "/placeholder-actor.jpg" },
    { name: "Michael Chen", role: "Villain", image: "/placeholder-actor.jpg" },
    { name: "Sarah Johnson", role: "Supporting", image: "/placeholder-actor.jpg" },
  ];

  const cinemas = [
    {
      name: "PVR Phoenix",
      location: "Lower Parel",
      distance: "2.5 km",
      showtimes: [
        { time: "10:30 AM", format: "2D", price: "₹200", filling: "fast" },
        { time: "1:45 PM", format: "3D", price: "₹350", filling: "medium" },
        { time: "5:00 PM", format: "IMAX", price: "₹450", filling: "slow" },
        { time: "8:30 PM", format: "2D", price: "₹250", filling: "fast" },
      ],
    },
    {
      name: "INOX Megaplex",
      location: "Andheri",
      distance: "5.2 km",
      showtimes: [
        { time: "11:00 AM", format: "2D", price: "₹180", filling: "medium" },
        { time: "2:30 PM", format: "3D", price: "₹320", filling: "slow" },
        { time: "6:15 PM", format: "2D", price: "₹220", filling: "fast" },
        { time: "9:45 PM", format: "3D", price: "₹380", filling: "medium" },
      ],
    },
  ];

  const reviews = [
    {
      author: "MovieBuff2024",
      rating: 9,
      comment: "Absolutely fantastic! The action sequences are mind-blowing and the story keeps you engaged throughout.",
      date: "2 days ago",
    },
    {
      author: "CinemaLover",
      rating: 8,
      comment: "Great visuals and solid performances. A must-watch for action movie fans.",
      date: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Movie Hero Section */}
      <section className="hero-gradient py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Movie Poster */}
            <div className="lg:w-1/4">
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full rounded-lg shadow-cinema"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Movie Info */}
            <div className="lg:w-3/4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-accent-gold text-accent-foreground">
                  {movie.certification}
                </Badge>
                {movie.genre.map((g) => (
                  <Badge key={g} variant="secondary">
                    {g}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{movie.title}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-accent-gold text-accent-gold" />
                  <span className="text-lg font-semibold">{movie.rating}/10</span>
                  <span className="text-muted-foreground">({movie.votes} votes)</span>
                </div>
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4 mr-1" />
                  Rate Now
                </Button>
              </div>

              {/* Movie Details */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{movie.duration}</span>
                </div>
                <span>•</span>
                <span>{movie.language.join(", ")}</span>
                <span>•</span>
                <span>{movie.format.join(", ")}</span>
                <span>•</span>
                <span>Released {movie.releaseDate}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Button className="btn-cinema-primary text-lg px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Tickets
                </Button>
                <Button variant="outline" className="text-lg px-6">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Trailer
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Synopsis */}
              <p className="text-lg leading-relaxed">{movie.synopsis}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="showtimes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="showtimes">Showtimes</TabsTrigger>
            <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Showtimes Tab */}
          <TabsContent value="showtimes">
            <div className="space-y-6">
              {/* Date Selection */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {["Today", "Tomorrow", "Day After"].map((date, index) => (
                  <Button
                    key={date}
                    variant={selectedDate === date.toLowerCase() ? "default" : "outline"}
                    onClick={() => setSelectedDate(date.toLowerCase())}
                    className="whitespace-nowrap"
                  >
                    {date}
                  </Button>
                ))}
              </div>

              {/* Cinema Listings */}
              <div className="space-y-6">
                {cinemas.map((cinema) => (
                  <Card key={cinema.name} className="movie-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{cinema.name}</h3>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{cinema.location} • {cinema.distance}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {cinema.showtimes.map((show, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="flex flex-col p-4 h-auto"
                          >
                            <span className="font-semibold">{show.time}</span>
                            <span className="text-xs text-muted-foreground">
                              {show.format} • {show.price}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Cast & Crew Tab */}
          <TabsContent value="cast">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Cast</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {cast.map((person) => (
                  <div key={person.name} className="text-center">
                    <div className="w-32 h-32 bg-surface rounded-full mx-auto mb-3"></div>
                    <h4 className="font-semibold">{person.name}</h4>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Reviews & Ratings</h3>
                <Button className="btn-cinema-primary">Write Review</Button>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                            {review.author[0]}
                          </div>
                          <span className="font-semibold">{review.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
                          <span>{review.rating}/10</span>
                        </div>
                      </div>
                      <p className="mb-2">{review.comment}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}