import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import ThreeDSection from "@/components/ThreeDSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type IndexProps = {
  animateCounts?: boolean;
};

const Index = ({ animateCounts = true }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero animateCounts={animateCounts} />
        <Services />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
