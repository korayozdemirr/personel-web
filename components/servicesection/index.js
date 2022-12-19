import Link from "next/link";
import Project from "../project";
const Index = ({...props}) => {
  return (
    <div className="container" style={{ paddingBottom: 90, paddingTop: 90 }}>
      <div className="text-center pb-4">
        <h2 className="text-secondary">My Projects</h2>
      </div>
      <div className="row">
        {props?.data?.data.slice(0,3).map((item) => (
          <Project
            imageUrl={item.attributes.imageUri}
            demoUrl={item.attributes.liveDemo}
            gitUrl={item.attributes.githubRepo}
            title={item.attributes.title}
            description={item.attributes.label}
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
