import HomeSection from '../components/homesection';
import AboutSection from '../components/aboutsection';
import ServiceSection from '../components/servicesection';
import { useEffect } from 'react';
import { analytics } from '../firebase/firebase';
export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics.logEvent('home page');
    }
  });
  return (
    <>
      <section id='home' className='bg-light'>
        <HomeSection />
      </section>
      <section id='about' style={{ marginBottom: 90 }}>
        <AboutSection />
      </section>
      <section id='service' className='bg-light'>
        <ServiceSection />
      </section>
    </>
  );
}
