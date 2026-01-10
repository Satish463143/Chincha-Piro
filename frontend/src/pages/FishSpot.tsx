import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

import { fishSpotData } from '@/data/venueData';

const FishSpot = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection
                    titleLine1={fishSpotData.hero.titleLine1}
                    titleLine2={fishSpotData.hero.titleLine2}
                    titleLine3={fishSpotData.hero.titleLine3}
                    subtitle={fishSpotData.hero.subtitle}
                    backgroundImage={fishSpotData.hero.backgroundImage}
                    showReservation={fishSpotData.hero.showReservation}
                />
                <AboutSection data={fishSpotData.about} />
                <MenuSection data={fishSpotData.menu} />
                <GallerySection images={fishSpotData.gallery} />
                <ReviewsSection reviews={fishSpotData.reviews} />
                <ReservationSection backgroundImage={fishSpotData.hero.backgroundImage} />
                <ContactSection data={fishSpotData.contact} />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default FishSpot;
