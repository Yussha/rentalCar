import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

import styles from "./contact.module.css";
export default function Contact() {
  return (
    <section className={`${styles.customContact} pe-5 ps-5`} id="contact">
      <div
        className={`${styles.customContactContents} d-flex flex-column gap-4 justify-content-between p-3 flex-sm-column gap-sm-4 flex-lg-row`}
      >
        <div
          className={`${styles.customContactContent} d-flex align-items-center gap-3`}
        >
          <div
            className={`${styles.customContactIconContainer} d-flex align-items-center p-4`}
          >
            <FaPhoneAlt className={`${styles.customContactIcon} fs-5`} />
          </div>
          <div>
            <h1 className={`${styles.customContactTitle} fs-6 m-0`}>Call us</h1>
            <span className="fs-6" style={{ color: "#999" }}>
              +63 123456789
            </span>
          </div>
        </div>

        <div
          className={`${styles.customContactContent} d-flex align-items-center gap-3`}
        >
          <div
            className={`${styles.customContactIconContainer} d-flex align-items-center p-4`}
          >
            <FaRegMessage className={`${styles.customContactIcon} fs-5`} />
          </div>
          <div>
            <h1 className={`${styles.customContactTitle} fs-6 m-0`}>
              Write to us
            </h1>
            <span className="fs-6" style={{ color: "#999" }}>
              mamaMo123.com
            </span>
          </div>
        </div>

        <div
          className={`${styles.customContactContent} d-flex align-items-center gap-3`}
        >
          <div
            className={`${styles.customContactIconContainer} d-flex align-items-center p-4`}
          >
            <CiLocationOn className={`${styles.customContactIcon} fs-5`} />
          </div>
          <div>
            <h1 className={`${styles.customContactTitle} fs-6 m-0`}>Address</h1>
            <span className="fs-6" style={{ color: "#999" }}>
              Dito lang sa Caloocan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
