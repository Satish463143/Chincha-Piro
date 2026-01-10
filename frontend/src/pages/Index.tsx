import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VenuesSection from '@/components/VenuesSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
// Using Restaurant data for the main landing page to show the "Brand" vibe
import { restaurantData } from '@/data/venueData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Generic or Brand Hero */}
        <HeroSection
          titleLine1="Welcome"
          titleLine2="To"
          titleLine3="Chincha Piro"
          subtitle="A collection of unique culinary experiences in Kathmandu."
          showReservation={false}
        // Use existing bg or a new one
        />

        <AboutSection data={{ ...restaurantData.about, title: "Our Story", description: "Chincha Piro Group brings you three distinct venues, each with its own soul and flavor." }} />

        <VenuesSection />

        <GallerySection images={restaurantData.gallery} />

        <ContactSection data={restaurantData.contact} />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
