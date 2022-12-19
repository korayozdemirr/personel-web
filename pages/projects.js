import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import Project from "../components/project";
export default function Services({json}) {
  console.log(json)
  const theme = useSelector((state) => state.theme.value);
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
            {json?.data?.map((item)=>(
              <Project  
                key={item.id}
                imageUrl={item.attributes.imageUri}
                title={item.attributes.title}
                description={item.attributes.labels}
                demoUrl={item.attributes.liveDemo}
                gitUrl={item.attributes.githubRepo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
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
