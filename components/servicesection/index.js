import Link from "next/link";
import Project from "../project";
const Index = ({...props}) => {
  return (
    <div className="container" style={{ paddingBottom: 90, paddingTop: 90 }}>
      <div className="text-center pb-4">
        <h2 className="text-secondary">My Projects</h2>
      </div>
      <div className="row">
        {props.data.map((item) => (
          <Project
            imageUrl={item.imageUrl}
            demoUrl={item.demoUrl}
            gitUrl={item.gitUrl}
            title={item.title}
            description={item.description}
            key={item.id}
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
export default Index;
