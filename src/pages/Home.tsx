import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MovieGrid } from "@/components/MovieGrid";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Music, Trophy, Gift } from "lucide-react";

export default function Home() {
  const featuredEvents = [
    {
      title: "Concert Night",
      date: "Dec 15, 2024",
      venue: "Stadium",
      icon: Music,
    },
    {
      title: "Comedy Show",
      date: "Dec 20, 2024",
      venue: "Theater",
      icon: Calendar,
    },
    {
      title: "Sports Event",
      date: "Dec 25, 2024",
      venue: "Arena",
      icon: Trophy,
    },
  ];

  const offers = [
    {
      title: "50% Off on Weekdays",
      description: "Book movie tickets for Monday to Thursday shows",
      code: "WEEKDAY50",
    },
    {
      title: "Buy 2 Get 1 Free",
      description: "On event tickets for selected shows",
      code: "EVENT321",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Now Showing Movies */}
      <MovieGrid 
        title="Now Showing" 
        subtitle="Latest movies playing in cinemas near you"
      />

      {/* Coming Soon Movies */}
      <div className="bg-surface">
        <MovieGrid 
          title="Coming Soon" 
          subtitle="Get ready for these upcoming blockbusters"
          isComingSoon={true}
        />
      </div>

      {/* Featured Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <p className="text-muted-foreground text-lg">Don't miss these exciting events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="movie-card group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.venue}</p>
                  <Button className="btn-cinema-primary w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Special Offers</h2>
            <p className="text-muted-foreground text-lg">Save more on your bookings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="movie-card group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent-gold/10 rounded-lg">
                      <Gift className="h-6 w-6 text-accent-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground mb-4">{offer.description}</p>
                      <div className="flex items-center justify-between">
                        <code className="bg-surface-elevated px-3 py-1 rounded text-sm font-mono">
                          {offer.code}
                        </code>
                        <Button variant="outline" size="sm">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}