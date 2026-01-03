import { ArrowRight, Clock, TrendingUp, BookMarked, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "./ui/card";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const categoryIcons: Record<string, typeof TrendingUp> = {
  thoughts: TrendingUp,
  notes: BookMarked,
  wisdom: Lightbulb,
};

const FeaturedPosts = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["featured-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section id="thoughts" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Latest</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Featured Articles
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-1/3 mb-4"></div>
                  <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section id="thoughts" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Latest</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Featured Articles
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground text-center py-12">
            No articles published yet. Check back soon!
          </p>
        </div>
      </section>
    );
  }

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
          <Link 
            to="/blog"
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const Icon = categoryIcons[post.category] || TrendingUp;
            return (
              <Link to={`/post/${post.slug}`} key={post.id}>
                <Card 
                  className={`group cursor-pointer border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card overflow-hidden h-full ${
                    index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground capitalize">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + "..."}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {post.published_at ? format(new Date(post.published_at), "MMM d, yyyy") : ""}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.read_time || 5} min read
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-accent font-medium"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
