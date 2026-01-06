import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import LoungeSection from '@/components/LoungeSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <LoungeSection />
        <GallerySection />
        <ReviewsSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
