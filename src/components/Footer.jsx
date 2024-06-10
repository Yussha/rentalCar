import styles from "./footer.module.css";

import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      className={`${styles.customFooter} pe-5 ps-5 d-flex flex-column gap-4 justify-content-between flex-sm-column gap-sm-4 flex-lg-row`}
    >
      <div className={`${styles.customFooterContent}`}>
        <h1 className={`${styles.customLogoTitle} fs-4`}>
          RENTAL<span style={{ color: "#f5b754" }}>CARS</span>
        </h1>
        <p className={`${styles.customParagraphFooter} `}>
          Discover top-quality rental cars for your travels. Book now for
          unbeatable rates and reliable service.
        </p>
        <div className={`${styles.customFooterSocMed} d-flex gap-3`}>
          <div
            className={`${styles.customFooterSocMedIcon} d-flex align-items-center p-3`}
          >
            <FaTiktok />
          </div>
          <div
            className={`${styles.customFooterSocMedIcon} d-flex align-items-center p-3`}
          >
            <FaFacebookF />
          </div>
          <div
            className={`${styles.customFooterSocMedIcon} d-flex align-items-center p-3`}
          >
            <FaInstagram />
          </div>
        </div>
      </div>

      <div>
        <h1 className={`${styles.customLogoTitle} fs-4`}>Quick Links</h1>
        <ul className={`${styles.customUListFooter} d-flex flex-column gap-2`}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className={`${styles.customLogoTitle} fs-6`}>Developed by JsH</h1>
      </div>
    </footer>
  );
}
