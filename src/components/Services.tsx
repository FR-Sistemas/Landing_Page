import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Cloud, Database, Cpu, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas utilizando as tecnologias mais recentes do mercado.",
    color: "from-primary to-primary/50"
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e multiplataforma para iOS e Android com performance excepcional.",
    color: "from-secondary to-secondary/50"
  },
  {
    icon: Cloud,
    title: "Soluções Cloud",
    description: "Infraestrutura escalável e segura na nuvem para seu negócio crescer sem limites.",
    color: "from-primary to-secondary"
  },
  {
    icon: Database,
    title: "Big Data & Analytics",
    description: "Transforme dados em insights valiosos com nossas soluções de análise avançada.",
    color: "from-secondary to-primary"
  },
  {
    icon: Cpu,
    title: "Inteligência Artificial",
    description: "Implemente IA e Machine Learning para automatizar processos e tomar decisões inteligentes.",
    color: "from-primary/80 to-secondary/80"
  },
  {
    icon: Globe,
    title: "Consultoria Tech",
    description: "Estratégias tecnológicas personalizadas para otimizar sua transformação digital.",
    color: "from-secondary/80 to-primary/80"
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">• Serviços •</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Soluções que </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformam
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para acelerar sua transformação digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="relative w-14 h-14">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg opacity-20 blur-md group-hover:opacity-40 transition-opacity`} />
                    <div className="relative w-full h-full bg-gradient-to-br from-card to-card/50 rounded-lg flex items-center justify-center border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <div className="w-4 h-0.5 bg-primary rounded-full group-hover:w-8 transition-all duration-300" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
