import styles from "./hero.module.css";

import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section className={`${styles.customHero} position-relative  `} id="home">
      <div
        className={`${styles.customOverlay} position-absolute top-0 start-0 end-0 bottom-0  z-1`}
      ></div>

      <div
        className={`${styles.customHeroContent} position-absolute z-1 end-0 start-0 d-xl-flex flex-xl-column align-items-xl-center h-auto pt-xl-2 pb-xl-2  d-flex flex-column align-items-center `}
      >
        <h1 className={`${styles.customHeroTitle} display-1`}>Rental Car</h1>
        <p className={`${styles.customHeroSubTitle}`}>
          Easy car rentals for your next trip. Book now!
        </p>
        <button className={`${styles.customHeroBtn}`}>
          Rent Now <MdArrowOutward />
        </button>
      </div>
    </section>
  );
}
