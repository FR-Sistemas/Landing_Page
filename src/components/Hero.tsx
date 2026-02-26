import CountUp from "react-countup";
import { ArrowRight, Sparkles } from "lucide-react";
import { SplineScene } from "@/components/SplineScene";

type HeroProps = {
  animateCounts?: boolean;
};

type AnimatedLettersProps = {
  text: string;
  className?: string;
  letterClassName?: string;
  delay?: number;
  duration?: number; // Nova prop para duração
};

const LETTER_DELAY = 0.025;

const AnimatedLetters = ({
  text,
  className,
  letterClassName,
  delay = 3,
  duration = 0.8, // Valor padrão
}: AnimatedLettersProps) => {
  const wrapperClassName = ["whitespace-pre-wrap", className].filter(Boolean).join(" ");
  const letterClasses = ["letter-reveal", letterClassName].filter(Boolean).join(" ");
  const tokens = text.split(/(\s+)/);
  let letterIndex = 0;

  const nodes = tokens.map((token, tokenIndex) => {
    if (token.trim() === "") {
      letterIndex += token.length;
      return (
        <span key={`space-${tokenIndex}`} aria-hidden="true">
          {token}
        </span>
      );
    }

    const letters = Array.from(token).map((char, index) => {
      const delaySeconds = delay + letterIndex * LETTER_DELAY;
      letterIndex += 1;
      return (
        <span
          key={`letter-${tokenIndex}-${index}`}
          className={letterClasses}
          style={{
            animationDelay: `${delaySeconds}s`,
            animationDuration: `${duration}s`
          }}
          aria-hidden="true"
        >
          {char}
        </span>
      );
    });

    return (
      <span key={`word-${tokenIndex}`} className="inline-block whitespace-nowrap">
        {letters}
      </span>
    );
  });

  return (
    <span className={wrapperClassName} aria-label={text} role="text">
      {nodes}
    </span>
  );
};

const Hero = ({ animateCounts = true }: HeroProps) => {
  const headlinePrefix = "Transformamos ideias em ";
  const headlineHighlight = "soluções digitais";
  return (
    <section id='hero' className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center md:gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Tecnologia de Ponta</span>
            </div>

            {/* Main Heading */}
            <div className="container relative z-10 mx-auto pt-1 flex justify-center lg:block">
              <div className="max-w-2xl">
                <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-primary animate-pulse-glow">
                  <AnimatedLetters text="Desenvolvimento de Software" />
                </p>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl titulo">
                  <AnimatedLetters text={headlinePrefix} delay={3.2} />
                  <AnimatedLetters
                    text={headlineHighlight}
                    letterClassName="text-primary text-glow"
                    delay={3.9}
                    duration={3}
                  />
                </h1>
                <p className="mb-10 lg:max-w-lg text-lg leading-relaxed text-muted-foreground">
                  <AnimatedLetters text="Desenvolvemos sistemas sob medida, aplicativos e automações que impulsionam o crescimento do seu negócio com tecnologia de ponta." delay={4.3} duration={0} />
                </p>
                <div className="flex lg:flex-wrap gap-4 ">
                  <a
                    href="#services"
                    className="max-h-[58px] sm:h-full group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:scale-105 box-glow-strong"
                  >
                    Ver Serviços
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#sobre"
                    className="max-h-[58px] sm:h-full inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
                  >
                    Conheça a FR
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 smpt-10 max-w-3xl mx-auto lg:mx-0">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {animateCounts ? (
                    <CountUp end={100} duration={5} />
                  ) : (
                    <span>0</span>
                  )}
                  <span>+</span>
                </div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {animateCounts ? (
                    <CountUp end={50} duration={5} />
                  ) : (
                    <span>0</span>
                  )}
                  <span>+</span>
                </div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {animateCounts ? (
                    <CountUp end={5} duration={5} />
                  ) : (
                    <span>0</span>
                  )}
                  <span>+</span>
                </div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Spline 3D */}
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative h-[320px] sm:h-[320px] lg:h-[820px] lg:w-[800px]">
              <SplineScene className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
