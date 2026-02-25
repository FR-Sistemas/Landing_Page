import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Code2, Menu } from "lucide-react";

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
              <a href="#hero">
                FR Sistemas
              </a>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Início
            </a>
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

          <div className="flex items-center gap-3">
            <Button className="relative group hidden md:inline-flex overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50">
              <span className="relative z-10">Fale Conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-background/60 text-primary shadow-lg shadow-primary/20 transition-colors hover:border-primary/60"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-primary/20 bg-background/95 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 px-4 pt-6">
                  <div className="relative">
                    <Code2 className="w-7 h-7 text-primary" />
                    <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    <a href="#hero">FR Sistemas</a>
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-2 px-4">
                  <SheetClose asChild>
                    <a
                      href="#hero"
                      className="rounded-lg px-3 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Inicio
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#services"
                      className="rounded-lg px-3 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Serviços
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#solutions"
                      className="rounded-lg px-3 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Soluções
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#about"
                      className="rounded-lg px-3 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Sobre
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      className="rounded-lg px-3 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Contato
                    </a>
                  </SheetClose>
                </div>

                <div className="mt-6 px-4">
                  <SheetClose asChild>
                    <Button className="relative group w-full overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50">
                      <span className="relative z-10">Fale Conosco</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
