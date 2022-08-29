import Link from "next/link";
import Project from "../project";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function project() {
      try {
        await db
          .collection("projects")
          .limit(3)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setData((state) => [doc.data(), ...state]);
            });
          });
      } catch (error) {
        console.log(error);
      }
    }
    project();
  }, []);
  return (
    <div className="container" style={{ paddingBottom: 90, paddingTop: 90 }}>
      <div className="text-center pb-4">
        <h2 className="text-secondary">My Projects</h2>

      </div>
      <div className="row">
        {data.map((item, index) => (
          <Project
            imageUrl={item.imageUrl}
            demoUrl={item.demoUrl}
            gitUrl={item.gitUrl}
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </div>
      <div className="text-center">
        <Link href="/services">
          <a title="Tüm servisleri Gör" className="btn btn-link">
            See all projects
            {"->"}
          </a>
        </Link>
      </div>
    </div>
  );
};
export default index;
