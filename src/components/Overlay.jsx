import styles from "./overlay.module.css";
export default function Overlay() {
  return (
    <div
      className={`${styles.overlay} position-absolute z-2 top-0 bottom-0 start-0 end-0`}
    ></div>
  );
}
