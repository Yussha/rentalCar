import styles from "./navbar.module.css";

// import NavbarScroll from "./NavbarScroll";
import LoginAsAdmin from "../Modal/LoginAsAdmin";

import { IoIosMenu } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";

import { Link } from "react-router-dom";

export default function Navbar({
  scroll,
  activeLink,
  setActiveLink,
  setShowLogin,
  showLogin,
}) {
  return (
    <>
      <nav
        className={`${styles.customNavbar} navbar navbar-expand-lg position-fixed top-0 end-0 start-0 z-2  p-sm-3  `}
      >
        <div className="container-fluid  pt-xl-2 pb-xl-2 ps-xl-5 pe-xl-5">
          <Link
            to="/"
            onClick={() => setActiveLink("home")}
            className={`${styles.customNavbarLogo}  navbar-brand fs-4`}
          >
            RENTAL<span style={{ color: "#f5b754" }}>CARS</span>
          </Link>
          <button
            className={`${styles.menuIcon} navbar-toggler`}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <span className={`${styles.menuIcon} `}>
              <IoIosMenu />
            </span>
          </button>
          <div
            className="collapse navbar-collapse d-xl-flex justify-content-xl-end gap-5 justify-content-sm-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-xl-flex gap-xl-3">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setActiveLink("home")}
                  className={`${styles.customNavbarink} ${activeLink === "home" ? styles.active : ""
                    }  nav-link fw-bold`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="aboutpage"
                  onClick={() => setActiveLink("about")}
                  className={`${styles.customNavbarink} ${activeLink === "about" ? styles.active : ""
                    } nav-link fw-bold`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="cars"
                  onClick={() => setActiveLink("cars")}
                  className={`${styles.customNavbarink} ${activeLink === "cars" ? styles.active : ""
                    } nav-link fw-bold`}
                >
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="servicespage"
                  onClick={() => setActiveLink("services")}
                  className={`${styles.customNavbarink} ${activeLink === "services" ? styles.active : ""
                    } nav-link fw-bold`}
                >
                  Services
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
