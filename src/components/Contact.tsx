import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contato@frsistemas.com.br"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "+55 (11) 9999-9999"
  },
  {
    icon: MapPin,
    title: "Localização",
    content: "São Paulo, SP - Brasil"
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.", {
      duration: 4000
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">• Contato •</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Vamos </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para discutir seu próximo projeto. Estamos prontos para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome Completo
                </label>
                <Input 
                  id="name"
                  placeholder="Seu nome"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea 
                  id="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg shadow-primary/30"
              >
                <span className="flex items-center gap-2">
                  Enviar Mensagem
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index}
                    className="group p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/40 transition-colors" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">{info.title}</div>
                        <div className="text-lg font-medium text-foreground">{info.content}</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pronto para inovar?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Agende uma reunião gratuita com nossos especialistas e descubra como podemos 
                  acelerar sua transformação digital.
                </p>
                <Button 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                >
                  Agendar Reunião
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
