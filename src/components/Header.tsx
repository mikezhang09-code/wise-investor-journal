import { TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-navy" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Investor's Mind
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#thoughts" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
              Thoughts
            </a>
            <a href="#wisdom" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
              Wisdom
            </a>
            <a href="#notes" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
              Notes
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
              About
            </a>
          </div>

          {/* CTA */}
          <Button variant="gold" size="sm">
            Subscribe
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
