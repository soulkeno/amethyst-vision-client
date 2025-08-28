import { Button } from "@/components/ui/button";
import { Download, Star, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Purple-Pink Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-deep via-gaming-bg to-pink-glow/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-gaming-bg/90 via-gaming-bg/40 to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amethyst/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-glow/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-deep/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating Amethyst Crystals - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-amethyst/40 rotate-45 animate-float-slow shadow-lg shadow-amethyst/50" />
        <div className="absolute top-40 right-20 w-4 h-4 bg-pink-glow/50 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-8 h-8 bg-amethyst/30 rotate-45 animate-float-slow shadow-lg shadow-amethyst/40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-pink-glow/40 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-purple-deep/60 rotate-45 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-7 h-7 bg-amethyst/20 rotate-12 animate-float-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Version Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaming-card/50 border border-amethyst/30 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-amethyst rounded-full animate-pulse" />
            <span className="text-sm font-medium text-amethyst">Version 1.21</span>
          </div>

          {/* Main Title - Enhanced with Glow and Animations */}
          <div className="relative group">
            {/* Shine Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h1 className="relative text-6xl md:text-8xl font-bold mb-6 text-white animate-glow-intense hover:animate-pulse-glow transition-all duration-500 cursor-default select-none"
                style={{
                  textShadow: '0 0 20px hsl(271 91% 65% / 0.8), 0 0 40px hsl(316 73% 69% / 0.6), 0 0 60px hsl(271 91% 65% / 0.4)',
                  background: 'linear-gradient(135deg, hsl(271 91% 75%), hsl(316 73% 69%), hsl(271 91% 65%), hsl(260 100% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
              <span className="inline-block animate-float-slow">Amethyst</span>{" "}
              <span className="inline-block animate-float-slow" style={{ animationDelay: '0.5s' }}>Client</span>
            </h1>
          </div>
          
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