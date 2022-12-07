// components
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection';
import ProfileSection from './components/ProfileSection';
import PhotosSectionMansonry from './components/PhotoSectionMansonry';
import React from 'react';

function Home({isLoggedIn}) {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            
            <HeroSection loading="lazy" isLoggedIn={isLoggedIn} />
            <CardsSection />
            <ProfileSection />
            <PhotosSectionMansonry />
        </React.Suspense>
    );
}

export default Home;