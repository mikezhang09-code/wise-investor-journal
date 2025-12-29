import { Quote } from "lucide-react";

const quotes = [
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett",
    role: "Chairman, Berkshire Hathaway",
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott",
    role: "Founder, Research Affiliates",
  },
  {
    text: "The four most dangerous words in investing are: 'This time it's different.'",
    author: "Sir John Templeton",
    role: "Legendary Investor",
  },
];

const WisdomSection = () => {
  return (
    <section id="wisdom" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Timeless Wisdom</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mt-2">
            Words from the Greats
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
            Collected wisdom from legendary investors who shaped how we think about markets and value.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="relative bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Quote className="w-4 h-4 text-navy" />
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-lg text-cream/90 leading-relaxed mt-4 mb-6">
                "{quote.text}"
              </blockquote>

              {/* Author */}
              <div className="pt-6 border-t border-cream/10">
                <div className="font-semibold text-cream">{quote.author}</div>
                <div className="text-cream/50 text-sm">{quote.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Explore all quotes →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;
