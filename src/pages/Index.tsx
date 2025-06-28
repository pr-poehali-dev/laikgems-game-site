import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameFeatures from "@/components/GameFeatures";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main>
        <Hero />
        <GameFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
