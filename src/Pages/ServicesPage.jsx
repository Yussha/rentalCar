import styles from "./pagelayout.module.css";

import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <section className={`${styles.customPageLayout} position-relative`}>
      <div
        className={`${styles.customPageLayoutBanner} ${styles.customPageLayoutBanner2} position-relative`}
      >
        <h1
          className={`${styles.customPageLayoutTitle} position-absolute z-1 display-6`}
        >
          Our <span style={{ color: "#f5b754" }}>Services</span>
        </h1>
        <div
          className={`${styles.customOverlay} position-absolute top-0 start-0 end-0 bottom-0 z-0`}
        ></div>
      </div>
      <Services />
    </section>
  );
}
