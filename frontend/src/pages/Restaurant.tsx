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

import { restaurantData } from '@/data/venueData';

const Restaurant = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection
                    titleLine1={restaurantData.hero.titleLine1}
                    titleLine2={restaurantData.hero.titleLine2}
                    titleLine3={restaurantData.hero.titleLine3}
                    subtitle={restaurantData.hero.subtitle}
                    backgroundImage={restaurantData.hero.backgroundImage}
                    showReservation={restaurantData.hero.showReservation}
                />
                <AboutSection data={restaurantData.about} />
                <MenuSection data={restaurantData.menu} />
                <LoungeSection />
                <GallerySection images={restaurantData.gallery} />
                <ReviewsSection reviews={restaurantData.reviews} />
                <ReservationSection backgroundImage={restaurantData.hero.backgroundImage} />
                <ContactSection data={restaurantData.contact} />
            </main>
            <Footer />
            {/* FloatingButtons can be kept or removed if redundant with footer, keeping for consistency with old index */}
            <FloatingButtons />
        </div>
    );
};

export default Restaurant;
