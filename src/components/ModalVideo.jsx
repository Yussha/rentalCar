import CarVideo from "../assets/carvideo.mp4";

import styles from "./modalvideo.module.css";

import { IoMdClose } from "react-icons/io";
export default function ModalVideo({  setModalVideo }) {
  return (
   
      <div
        className={`${styles.customModalVideo} position-absolute y z-3 d-flex flex-column `}
      >
        <div className=" d-flex justify-content-end">
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => setModalVideo(false)}
          >
            <IoMdClose style={{ color: "#fff" }} className="fs-4" />
          </button>
        </div>
        <video className={styles.videocustom} width="620" height="350" controls>
          <source src={CarVideo} type="video/mp4" />
        </video>
      </div>
    
  );
}
