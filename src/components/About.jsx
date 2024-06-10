import styles from "./about.module.css";

import { FaCheck } from "react-icons/fa6";

export default function About() {
  return (
    <section className={`${styles.customAbout} pe-5 ps-5 `} id="about">
      <div className="d-flex  flex-column gap-4 h-auto d-sm-flex flex-sm-column-reverse flex-lg-row">
        <div className="col ">
          <h1 className={`${styles.customAboutTitle} mb-xl-4`}>
            We Are{" "}
            <span style={{ color: "#f5b754" }}>A Car Rental Company</span>
          </h1>
          <p className={`${styles.customAboutDescription} mb-xl-5`}>
            Welcome to Car Rental Company, your trusted partner for convenient
            and reliable car rentals. With a commitment to exceptional service
            and a diverse fleet of vehicles, we make every journey memorable.
            Whether it's for business or leisure, we're here to ensure you
            travel in comfort and style. Explore our range of options and
            experience the freedom of the open road with us.
          </p>
          <ul className={`${styles.customAboutList} d-flex flex-column gap-2`}>
            <li className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customListIcon} d-flex align-items-center justify-content-center p-1`}
              >
                <FaCheck />
              </div>
              Sports and Luxury Cars
            </li>
            <li className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customListIcon} d-flex align-items-center justify-content-center p-1`}
              >
                <FaCheck />
              </div>{" "}
              Economy Cars
            </li>
          </ul>
        </div>
        <div
          className={`${styles.customAboutImg} col  d-flex justify-content-center`}
        >
          <img
            className="img-fluid object-fit-cover border rounded w-75"
            src="https://duruthemes.com/demo/html/renax/dark/img/about.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
