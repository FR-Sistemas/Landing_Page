const projects = [
  {
    title: "Kom",
    image: "/img/kombi.png"
  },
  {
    title: "Cal",
    image: "/img/calcados.png"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative md:py-24 py-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[110px]" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.08),transparent_45%)]" />

      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-14 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
            <span className="text-sm text-secondary font-medium uppercase tracking-wider">• Projetos •</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight titulo">
            <span className="text-foreground">Soluções que </span>
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              Ganham Vida
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Confira alguns projetos recentes desenvolvidos pela FR Sistemas com foco em resultado,
            experiência e consistência visual.
          </p>
        </div>

        <div className="md:flex max-w-5xl mx-auto md:gap-10 lg:gap-0">
          {projects.map((project) => (
            <div
              key={project.title}
              className="mb-8 md:mb-0 group relative mx-auto lg:h-[460px] w-full max-w-[460px] overflow-hidden rounded-3xl bg-black/20 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-full w-full bg-black/30">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title}`}
                  className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
