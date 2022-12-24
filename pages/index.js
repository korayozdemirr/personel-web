import HomeSection from "../components/homesection";
import AboutSection from "../components/aboutsection";
import ServiceSection from "../components/servicesection";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import {collection, getDocs, limit, orderBy, query} from "firebase/firestore"
import { cloneElement, useState } from "react";
export default function Home({ json }) {
  console.log(json)
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
  ); //todo body background change
}
export async function getServerSideProps() {
  let json;
  try {
    const projects = collection(db, "projects");
    const q = query(projects, limit(3))
    const querySnapshot = await getDocs(q);
     json = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createAt: doc.data().createAt?.toDate().getTime(),
    }));
    console.log(json)
    
  } catch (error) {
    console.log(error.message)
  } 
 
  return { props: {
    json
  } };
}
