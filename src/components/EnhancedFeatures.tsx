import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Eye, MapPin, Users, TreePine, Crosshair, Anchor, Gem, Shield } from "lucide-react";

const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const features = [
    {
      category: "Visual Enhancements",
      icon: Eye,
      color: "text-amethyst",
      items: [
        {
          name: "Chunk Finder",
          description: "Easily locate and visualize chunk boundaries for optimal building and mining",
          icon: MapPin
        },
        {
          name: "Storage Visuals",
          description: "See chest contents and storage systems through walls for better organization",
          icon: Shield
        },
        {
          name: "Player Visuals", 
          description: "Enhanced player indicators showing health, armor, and status at a glance",
          icon: Users
        },
        {
          name: "Villager Visuals",
          description: "Display villager trades and professions without opening trading interfaces",
          icon: Users
        },
        {
          name: "Vine Visuals",
          description: "Highlight climbable vines and vegetation for better navigation",
          icon: TreePine
        }
      ]
    },
    {
      category: "PVP Tools",
      icon: Crosshair,
      color: "text-amethyst-light",
      items: [
        {
          name: "Anchor Macro",
          description: "Automated respawn anchor placement and activation for strategic PVP advantage",
          icon: Anchor
        },
        {
          name: "Crystal Macro",
          description: "Precise end crystal combat automation with customizable timing and placement",
          icon: Gem
        },
        {
          name: "Auto Totem",
          description: "Automatic totem of undying management keeping you alive in intense combat",
          icon: Shield
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gaming-bg to-gaming-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amethyst-light to-amethyst-dark bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dominate Minecraft with our advanced client featuring cutting-edge visual enhancements and PVP automation tools
          </p>
        </div>

        <div className="grid gap-12">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-gaming-card border border-amethyst/30">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((feature, featureIndex) => {
                  const cardIndex = categoryIndex * 10 + featureIndex;
                  return (
                    <div
                      key={featureIndex}
                      className="relative overflow-hidden"
                      onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                      onMouseEnter={() => setHoveredCard(cardIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Mouse Following Glow Effect */}
                      {hoveredCard === cardIndex && (
                        <div
                          className="absolute pointer-events-none z-10 w-32 h-32 rounded-full opacity-30 transition-all duration-300 ease-out"
                          style={{
                            background: 'radial-gradient(circle, hsl(271 91% 65% / 0.6) 0%, hsl(316 73% 69% / 0.4) 30%, transparent 70%)',
                            left: mousePosition.x - 64,
                            top: mousePosition.y - 64,
                            filter: 'blur(20px)',
                          }}
                        />
                      )}
                      
                      <Card className="relative p-6 bg-gradient-card border border-amethyst/20 hover:border-amethyst/40 transition-all duration-300 group hover:shadow-lg hover:shadow-amethyst/10 hover:scale-105 transform">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-amethyst/10 group-hover:bg-amethyst/20 transition-colors group-hover:shadow-lg group-hover:shadow-amethyst/30">
                            <feature.icon className="w-5 h-5 text-amethyst group-hover:text-amethyst-light transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-amethyst transition-colors">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Card Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amethyst/5 via-pink-glow/5 to-amethyst/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;