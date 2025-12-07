import Header from "../components/header.component";
import HomeHeroSection from "../components/page-home/home-hero-section";
import HomeProductSection from "../components/page-home/home-product-section";
import HomeVantagensSection from "../components/page-home/home-vantagens-section";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <HomeHeroSection />

      {/* PRODUTOS */}
      <HomeProductSection />

      {/* VANTAGENS */}
      <HomeVantagensSection />
    </>
  );
}
