const InitialLoader = () => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <div className="text-xs uppercase tracking-[0.45em] text-muted-foreground">
          Carregando
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
