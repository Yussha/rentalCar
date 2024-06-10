import styles from "./videosection.module.css";

import ModalVideo from "./ModalVideo";

import { IoPlayOutline } from "react-icons/io5";
export default function VideoSection({ setModalVideo, modalVideo }) {
  return (
    <div className={`${styles.customVideoSection} position-relative`}>
      <div
        className={`${styles.customOverlay} position-absolute top-0 start-0 end-0 bottom-0 z-1`}
      ></div>
      <div
        className={`position-absolute z-1 end-0 start-0 top-0 bottom-0 d-xl-flex flex-xl-column align-items-xl-center justify-content-xl-center h-auto gap-3 d-sm-flex justify-content-sm-center flex-sm-column align-items-sm-center d-flex align-items-center flex-column justify-content-center`}
      >
        <span className={`${styles.customVideoSubTitle} `}>EXPLORE</span>
        <h1 className={`${styles.customVideoTitle}`}>
          Car <span style={{ color: "#f5b754" }}>Video</span>
        </h1>
        <div className={`${styles.customPlayBtn} p-4`}>
          <IoPlayOutline
            className="fs-1"
            style={{ cursor: "pointer" }}
            onClick={() => setModalVideo(true)}
          />
        </div>
      </div>

      {modalVideo && <ModalVideo setModalVideo={setModalVideo} />}
    </div>
  );
}
