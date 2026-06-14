import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCatalog from '@/components/FeaturedCatalog';
import HowItWorks from '@/components/HowItWorks';
import FounderSection from '@/components/FounderSection';
import CustomSection from '@/components/CustomSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedCatalog />
        <HowItWorks />
        <FounderSection />
        <CustomSection />
      </main>
      <Footer />
    </>
  );
}
