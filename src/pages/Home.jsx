import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import FeaturedMenu from '../components/FeaturedMenu/FeaturedMenu';
import Menu from '../components/Menu/Menu';
import Offers from '../components/Offers/Offers';
import Gallery from '../components/Gallery/Gallery';
import Reviews from '../components/Reviews/Reviews';
import Location from '../components/Location/Location';
import VisitCTA from '../components/VisitCTA/VisitCTA';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedMenu />
        <Menu />
        <Offers />
        <Gallery />
        <Reviews />
        <Location />
        <VisitCTA />
      </main>
      <Footer />
    </div>
  );
}
