import { ArrowLeft, Clock, TrendingUp, BookMarked, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";

const categoryIcons: Record<string, typeof TrendingUp> = {
  thoughts: TrendingUp,
  notes: BookMarked,
  wisdom: Lightbulb,
};

const Blog = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["all-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Blog | All Articles</title>
        <meta name="description" content="Browse all published articles on thoughts, notes, and wisdom." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 lg:px-8 py-12">
          <div className="mb-12">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Blog</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
              All Articles
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Explore all published articles covering thoughts, analysis, and insights.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              No articles published yet. Check back soon!
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const Icon = categoryIcons[post.category] || TrendingUp;
                return (
                  <Link to={`/post/${post.slug}`} key={post.id}>
                    <Card className="group cursor-pointer border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card overflow-hidden h-full">
                      <CardContent className="p-6">
                        {/* Category */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground capitalize">{post.category}</span>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>

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
          )}
        </main>
      </div>
    </>
  );
};

export default Blog;
