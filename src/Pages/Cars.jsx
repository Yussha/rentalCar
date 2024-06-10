import styles from "./pagelayout.module.css";
import Carlist from "./Carlist";


export default function Cars({ dataCars, setShowCarDetails, setActiveLink }) {
    return (
        <section className={`${styles.customPageLayout} position-relative`}>
            <div
                className={`${styles.customPageLayoutBanner} ${styles.customPageLayoutBanner1} position-relative`}
            >
                <h1
                    className={`${styles.customPageLayoutTitle} position-absolute z-1 display-6`}
                >
                    Luxury <span style={{ color: "#f5b754" }}>Cars</span>
                </h1>
                <div
                    className={`${styles.customOverlay} position-absolute top-0 start-0 end-0 bottom-0 z-0`}
                ></div>
            </div>
            <Carlist dataCars={dataCars} setShowCarDetails={setShowCarDetails} setActiveLink={setActiveLink} />
        </section>
    )

}