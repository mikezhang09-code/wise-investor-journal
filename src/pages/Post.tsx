import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="animate-pulse max-w-3xl mx-auto">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Investor's Mind</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="py-24">
          <article className="container mx-auto px-4 max-w-3xl">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>

            {/* Category */}
            <span className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-muted-foreground text-sm mb-8 pb-8 border-b border-border">
              {post.published_at && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.published_at), "MMMM d, yyyy")}
                </div>
              )}
              {post.read_time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.read_time} min read
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-lg mb-8 object-cover max-h-96"
              />
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Post;
