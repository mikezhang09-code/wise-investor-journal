import { ArrowRight, Clock, TrendingUp, BookMarked, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const posts = [
  {
    id: 1,
    category: "Investment Thoughts",
    title: "Why Patience is the Ultimate Edge in Markets",
    excerpt: "In a world of algorithmic trading and instant gratification, the ability to wait remains the most undervalued skill...",
    readTime: "8 min read",
    date: "Dec 28, 2025",
    icon: TrendingUp,
    featured: true,
  },
  {
    id: 2,
    category: "Notes",
    title: "Lessons from Berkshire's 2024 Annual Letter",
    excerpt: "Key takeaways from Warren Buffett's latest letter to shareholders and what it means for individual investors...",
    readTime: "12 min read",
    date: "Dec 25, 2025",
    icon: BookMarked,
    featured: false,
  },
  {
    id: 3,
    category: "Wisdom",
    title: "Howard Marks on Second-Level Thinking",
    excerpt: "Exploring the concept of second-level thinking and why consensus views rarely lead to exceptional returns...",
    readTime: "6 min read",
    date: "Dec 22, 2025",
    icon: Lightbulb,
    featured: false,
  },
];

const FeaturedPosts = () => {
  return (
    <section id="thoughts" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Latest</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Articles
            </h2>
          </div>
          <a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={post.id}
              className={`group cursor-pointer border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card overflow-hidden ${
                post.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <post.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent font-medium"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
