import { useEffect, useRef } from 'react';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import MostPicked from '@/components/organisms/MostPicked';
import Categories from '@/components/organisms/Categories';
import Testimony from '@/components/organisms/Testimony';
import Footer from '@/components/organisms/Footer';
import landingPageData from '@/json/landingPage.json';
export default function LandingPage() {
  const refMostPicked = useRef();
  useEffect(() => {
    document.title = 'Staycation | Home';
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Hero refMostPicked={refMostPicked} data={landingPageData.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={landingPageData.mostPicked}
      />
      <Categories data={landingPageData.category} />
      <Testimony data={landingPageData.testimonial} />
      <Footer />
    </>
  );
}