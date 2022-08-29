import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
const Project = ({...props}) => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="col-md-4 my-5">
      <div className={"card bg-" + theme[0]}>
        <Image
          src={props.imageUrl}
          height={200}
          width={300}
          className="card-img-top p-2 rounded"
          alt="website"
        />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <ul className="list-group list-group-flush ">
            <li
              className={
                "list-group-item bg-" + theme[0] + " " + "text-" + theme[1]
              }
            >
              {props.description}
            </li>
            <li
              className={
                "list-group-item bg-" + theme[0] + " " + "text-" + theme[1]
              }
            >
              <Link href={props.demoUrl}>
                <a
                  rel="nofollow"
                  className={
                    "d-flex align-items-center btn btn-outline-" + theme[1]
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                  </svg>{" "}
                  View Demo
                </a>
              </Link>
            </li>
            <li
              className={
                "list-group-item bg-" + theme[0] + " " + "text-" + theme[1]
              }
            >
              <Link href={props.gitUrl}>
                <a
                  rel="nofollow"
                  className={
                    "d-flex align-items-center btn btn-outline-" + theme[1]
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  Github Repo
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
