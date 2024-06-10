import { IoMdClose } from "react-icons/io";

import styles from "./conmessage.module.css";
export default function ConfirmationMessage({ setShowConfirmMessage }) {
  return (
    <div className={`${styles.customConmessage}  position-fixed z-3 p-4`}>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h1 className={`${styles.customTitle} fs-4`}>
          Rental<span style={{ color: "#f5b754" }}>Cars</span>
        </h1>
        <IoMdClose
          onClick={() => setShowConfirmMessage(false)}
          className="fs-4"
          style={{ cursor: "pointer", color: "#999" }}
        />
      </div>
      <p className={styles.customParagraph}>
        Your booking has been received! Thanks for choosing us. We'll confirm it
        within 2 days. Looking forward to serving you!
      </p>
      <button
        className={`${styles.custombtn}`}
        onClick={() => setShowConfirmMessage(false)}
      >
        Okay
      </button>
    </div>
  );
}
