import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import WisdomSection from "@/components/WisdomSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Investor's Mind | Investment Thoughts, Notes & Wisdom</title>
        <meta 
          name="description" 
          content="A personal investment journal capturing reflections on markets, timeless wisdom from legendary investors, and the pursuit of rational investing." 
        />
        <meta name="keywords" content="investing, investment journal, value investing, Warren Buffett, market analysis, investment wisdom" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturedPosts />
          <WisdomSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
