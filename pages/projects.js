import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";
import Project from "../components/project";
export default function Services({data}) {
  const theme = useSelector((state) => state.theme.value);
  console.log(data)
  return (
    <>
      <section className={"bg-" + theme[0]}>
        <div className="container py-d9">
          <h2 className="text-secondary text-center">My Projects</h2>
        </div>
      </section>
      <section className={"bg-" + theme[0]}>
        <div className="container py-d9">
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
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps(context) {
  const data = [];
  await db
  .collection("projects")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    });
  });
  return {
    props: {
      data
    },
  }
}