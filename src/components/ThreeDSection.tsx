import { SplineScene } from "@/components/SplineScene";

const ThreeDSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary">Experiência Interativa</h2>
          <p className="text-muted-foreground">Explore nossa tecnologia em 3D</p>
        </div>
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <SplineScene className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDSection;