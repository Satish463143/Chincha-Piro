import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

import { teaSpotData } from '@/data/venueData';

const TeaSpot = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection
                    titleLine1={teaSpotData.hero.titleLine1}
                    titleLine2={teaSpotData.hero.titleLine2}
                    titleLine3={teaSpotData.hero.titleLine3}
                    subtitle={teaSpotData.hero.subtitle}
                    backgroundImage={teaSpotData.hero.backgroundImage}
                    showReservation={teaSpotData.hero.showReservation}
                />
                <AboutSection data={teaSpotData.about} />
                <MenuSection data={teaSpotData.menu} />
                <GallerySection images={teaSpotData.gallery} />
                <ReviewsSection reviews={teaSpotData.reviews} />
                {/* Tea Spot does not have reservation as per request */}
                <ContactSection data={teaSpotData.contact} />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default TeaSpot;
