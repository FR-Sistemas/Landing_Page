import { Card } from "@/components/ui/card";
import { Zap, Shield, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Inovação",
    description: "Sempre à frente com as tecnologias mais modernas e práticas inovadoras."
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção de dados e sistemas com os mais altos padrões de segurança."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Soluções otimizadas para máxima velocidade e eficiência operacional."
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Comprometidos com o sucesso e crescimento dos nossos clientes."
  }
];

const About = () => {
  return (
    <section id="about" className="relative md:py-24 py-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">• Sobre Nós •</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold titulo
          ">
            <span className="text-foreground">Excelência em </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Desenvolvimento
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A FR Sistemas é uma empresa especializada em desenvolvimento de software de alta qualidade, 
            com foco em inovação, performance e satisfação do cliente. Nossa equipe de especialistas 
            transforma desafios complexos em soluções elegantes e eficientes.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="group relative p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/30">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-xl" />
          <Card className="relative bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border-primary/30 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Suporte Ativo</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Uptime Garantido</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  ISO
                </div>
                <div className="text-sm text-muted-foreground">Certificações</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
