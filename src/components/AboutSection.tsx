import { Bookmark, PenLine, Users } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Investment Thoughts",
    description: "Personal reflections on market dynamics, valuations, and the psychology of investing.",
  },
  {
    icon: Bookmark,
    title: "Research Notes",
    description: "Detailed notes from annual reports, investor letters, and financial literature.",
  },
  {
    icon: Users,
    title: "Investor Profiles",
    description: "Deep dives into the philosophies and methods of legendary investors.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase">About This Journal</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              A Personal Quest for
              <span className="text-gradient-gold block">Investment Wisdom</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This blog is my personal investment journal—a place to document thoughts, 
              capture lessons from the masters, and reflect on the ever-evolving art of 
              capital allocation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a seasoned investor or just starting your journey, I hope 
              you'll find something valuable here. Investing isn't just about numbers—it's 
              about patience, discipline, and continuous learning.
            </p>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
