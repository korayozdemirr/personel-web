import HomeSection from '../components/homesection';
import AboutSection from '../components/aboutsection';
import ServiceSection from '../components/servicesection';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function Home() {
  const theme = useSelector((state)=>state.theme.value)
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics.logEvent('home page');
    }
  });
  return (
    <>
      <section id='home' className={"bg-"+theme[0]+" "+ "text-"+theme[1]}>
        <HomeSection />
      </section>
      <section id='about' className={"bg-"+theme[0]+" "+ "text-"+theme[1]} >
        <AboutSection  />
      </section>
      <section id='service' className={"bg-"+theme[0]+" "+ "text-"+theme[1]} >
        <ServiceSection />
      </section>
    </>
  );
}
