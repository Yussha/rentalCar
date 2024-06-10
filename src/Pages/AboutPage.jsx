import styles from "./pagelayout.module.css";

import About from "../components/About";
export default function AboutPage() {
  return (
    <section className={`${styles.customPageLayout} position-relative`}>
      <div
        className={`${styles.customPageLayoutBanner} ${styles.customPageLayoutBanner1} position-relative`}
      >
        <h1
          className={`${styles.customPageLayoutTitle} position-absolute z-1 display-6`}
        >
          About <span style={{ color: "#f5b754" }}>Us</span>
        </h1>
        <div
          className={`${styles.customOverlay} position-absolute top-0 start-0 end-0 bottom-0 z-0`}
        ></div>
      </div>
      <About />
    </section>
  );
}
