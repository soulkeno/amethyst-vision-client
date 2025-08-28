import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EnhancedFeatures from "@/components/EnhancedFeatures";
import Download from "@/components/Download";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-bg">
      <Navigation />
      <main>
        <Hero />
        <EnhancedFeatures />
        <Download />
      </main>
    </div>
  );
};

export default Index;
