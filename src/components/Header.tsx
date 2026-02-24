import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Code2 className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              FR Sistemas
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Serviços
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Soluções
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Sobre
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contato
            </a>
          </nav>

          <Button className="relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50">
            <span className="relative z-10">Fale Conosco</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
