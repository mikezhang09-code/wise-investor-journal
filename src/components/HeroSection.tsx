import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 backdrop-blur-sm mb-8 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-cream/90 text-sm font-medium">Investment Journal</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Capturing the
            <span className="text-gradient-gold block mt-2">Art of Investing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Personal reflections on markets, timeless wisdom from the greats, 
            and the pursuit of rational investing in an irrational world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <Button variant="hero-primary" size="lg">
              <BookOpen className="w-5 h-5" />
              Start Reading
            </Button>
            <Button variant="hero" size="lg">
              Explore Wisdom
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cream/10 animate-fade-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">50+</div>
              <div className="text-cream/60 text-sm mt-1">Articles</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">12</div>
              <div className="text-cream/60 text-sm mt-1">Investor Profiles</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">100+</div>
              <div className="text-cream/60 text-sm mt-1">Quotes Collected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
