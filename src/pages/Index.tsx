import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-bg">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
    </div>
  );
};

export default Index;
