import HomeSection from "../components/homesection";
import AboutSection from "../components/aboutsection";
import ServiceSection from "../components/servicesection";
import { useSelector } from "react-redux";
export default function Home({json}) {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <section
        id="home"
        className={"bg-" + theme[0] + " " + "text-" + theme[1]}
      >
        <HomeSection />
      </section>
      <section
        id="about"
        className={"bg-" + theme[0] + " " + "text-" + theme[1]}
      >
        <AboutSection />
      </section>
      <section
        id="service"
        className={"bg-" + theme[0] + " " + "text-" + theme[1]}
      >
        <ServiceSection data={json} />
      </section>
    </>
  );//todo body background change
}
// export async function getServerSideProps() {
//   Fetch data from external API
//   const uri = "http://localhost:1337/api/projects";
 
//   try {
//     const data = await fetch(uri);
//     const json = await data.json();
//      return { props: { json } };
//   } catch (error) {

//   }

//   Pass data to the page via props
  
// }