import HomeSection from '../components/homesection';
import AboutSection from '../components/aboutsection';
import ServiceSection from '../components/servicesection';
export default function Home() {
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
