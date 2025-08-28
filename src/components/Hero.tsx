import { Button } from "@/components/ui/button";
import { Download, Star, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-bg/40 via-gaming-bg/60 to-gaming-bg/90" />
      
      {/* Floating Amethyst Crystals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-amethyst/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-4 h-4 bg-amethyst-light/40 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-8 h-8 bg-amethyst/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-amethyst-light/30 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Version Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaming-card/50 border border-amethyst/30 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-amethyst rounded-full animate-pulse" />
            <span className="text-sm font-medium text-amethyst">Version 1.21</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amethyst-light via-amethyst to-amethyst-dark bg-clip-text text-transparent">
            Amethyst Client
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            The ultimate Minecraft launcher with advanced PVP features and visual enhancements
          </p>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amethyst/10 text-amethyst">
              <Star className="w-4 h-4" />
              <span>PVP Optimized</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amethyst/10 text-amethyst">
              <Shield className="w-4 h-4" />
              <span>Visual Enhancements</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amethyst/10 text-amethyst">
              <Zap className="w-4 h-4" />
              <span>Auto Features</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="download" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button variant="gaming" size="lg" className="text-lg px-8 py-6">
              View Features
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amethyst mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amethyst mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amethyst mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;