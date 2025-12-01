import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NutritionSection from "@/components/NutritionSection";
import BestSellers from "@/components/BestSellers";
import BrandTrust from "@/components/BrandTrust";
import NaturalComponents from "@/components/NaturalComponents";
import ResearchBacked from "@/components/ResearchBacked";
import EcoConscious from "@/components/EcoConscious";
import CharitableInitiatives from "@/components/CharitableInitiatives";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NutritionSection />
      <BestSellers />
      <BrandTrust />
      <NaturalComponents />
      <ResearchBacked />
      <EcoConscious />
      <CharitableInitiatives />
      <Testimonials />
      <Footer />
    </main>
  );
}
