import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Gem } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-bg/80 backdrop-blur-md border-b border-amethyst/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Gem className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amethyst-light to-amethyst bg-clip-text text-transparent">
              Amethyst Client
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-amethyst transition-colors">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-amethyst transition-colors">
              Features
            </a>
            <a href="#download" className="text-foreground hover:text-amethyst transition-colors">
              Download
            </a>
            <a href="#support" className="text-foreground hover:text-amethyst transition-colors">
              Support
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="gaming" size="sm">
              Documentation
            </Button>
            <Button variant="download" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-amethyst transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amethyst/20">
            <div className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-amethyst transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-foreground hover:text-amethyst transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#download" 
                className="text-foreground hover:text-amethyst transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Download
              </a>
              <a 
                href="#support" 
                className="text-foreground hover:text-amethyst transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Support
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-amethyst/20">
                <Button variant="gaming" size="sm">
                  Documentation
                </Button>
                <Button variant="download" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;