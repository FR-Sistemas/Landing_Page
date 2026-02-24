import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Arquitetura escalável e performática",
  "Segurança de ponta a ponta",
  "Interface intuitiva e moderna",
  "Suporte técnico especializado 24/7",
  "Integração com sistemas existentes",
  "Documentação completa e treinamento"
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
                <span className="text-sm text-secondary font-medium uppercase tracking-wider">• Soluções •</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-foreground">Tecnologia que</span>
                <br />
                <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                  Eleva Resultados
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvemos soluções personalizadas que atendem perfeitamente às necessidades específicas 
                do seu negócio, garantindo eficiência, segurança e inovação.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="relative mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    <div className="absolute inset-0 blur-md bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-primary-foreground shadow-lg shadow-secondary/30"
            >
              <span className="flex items-center gap-2">
                Conhecer Soluções
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[80px]" />
            
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 overflow-hidden">
                {/* Placeholder for tech illustration */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                    alt="Digital Technology"
                    className="w-full h-full object-cover rounded-xl opacity-80"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md rounded-lg px-4 py-2 border border-primary/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-primary font-medium">Sistema Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
