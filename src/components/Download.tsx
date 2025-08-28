import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, CheckCircle, Shield, Zap, Users } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-24 px-4 bg-gradient-to-b from-gaming-card/20 to-gaming-bg">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amethyst-light to-amethyst-dark bg-clip-text text-transparent">
            Download Amethyst Client
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant access to the most advanced Minecraft client with premium features and regular updates
          </p>
        </div>

        {/* Download Card */}
        <Card className="p-8 bg-gradient-card border border-amethyst/30 hover:border-amethyst/50 transition-all duration-300 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 animate-glow">
              <DownloadIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-foreground">Amethyst Client v1.21</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Compatible with Minecraft 1.21 - Includes all premium features and lifetime updates
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="download" size="lg" className="text-lg px-8 py-6">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download for Windows
              </Button>
              <Button variant="gaming" size="lg" className="text-lg px-8 py-6">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download for Mac
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amethyst" />
                <span>Virus-free download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amethyst" />
                <span>Instant installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amethyst" />
                <span>Auto-updates included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amethyst" />
                <span>24/7 support access</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amethyst/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-amethyst" />
            </div>
            <h4 className="font-semibold mb-2 text-foreground">Secure & Safe</h4>
            <p className="text-sm text-muted-foreground">
              Thoroughly tested and verified. No malware, no hidden processes.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amethyst/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-amethyst" />
            </div>
            <h4 className="font-semibold mb-2 text-foreground">Lightning Fast</h4>
            <p className="text-sm text-muted-foreground">
              Optimized performance with minimal impact on game FPS.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amethyst/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amethyst" />
            </div>
            <h4 className="font-semibold mb-2 text-foreground">Community Driven</h4>
            <p className="text-sm text-muted-foreground">
              Join thousands of satisfied users and active community support.
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold mb-4 text-foreground">System Requirements</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Windows 10/11 or macOS 10.15+, Minecraft Java Edition 1.21, 4GB RAM recommended, 
            Java 17+ required for optimal performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;