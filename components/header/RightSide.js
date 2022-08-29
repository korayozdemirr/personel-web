import Link from "next/link";
import { useRouter } from "next/router";
import CustomizeSwitch from "../CustomizedSwitch";
import { useSelector } from "react-redux";
export default function RightSide() {
  const theme = useSelector((state)=> state.theme.value)
  const router = useRouter();
  return (
    <div
      className={"offcanvas offcanvas-start bg-"+theme[0]}
      style={{ maxWidth: "80%" }}
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header" style={{ height: "90px" }}>
        <p
          className={"offcanvas-title fs-2 text-"+theme[1]}
          id="offcanvasNavbarLabel"
        >
          Koray Özdemir
        </p>
        {/* <button
          type='button'
          className='btn-close  text-reset'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        /> */}
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5">
          <li className="nav-item">
            <Link href="/">
              <a
                className={
                  router.pathname == "/" ? "nav-link active" : "" + "nav-link"
                }
                aria-current="page"
                title="Home"
              >
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about" ? "nav-link active" : "nav-link"
                }
                title="About Me"
              >
                About Me
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a
                className={
                  router.pathname == "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
                title="Projects"
              >
                Projects
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a
                className={
                  router.pathname == "/contact" ? "nav-link active" : "nav-link"
                }
                title="Contact"
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      <CustomizeSwitch />
      </div>
    </div>
  );
}
