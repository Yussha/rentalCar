import styles from "./services.module.css";
export default function Services() {
  return (
    <section className={`${styles.customServices} pe-5 ps-5`} id="services">
      <p className={`${styles.customServicesSubTitle} text-center`}>
        WHAT WE DO
      </p>
      <h1 className={`${styles.customServicesTitle} text-center mb-5`}>
        Our Services
      </h1>

      <div
        className={`d-flex flex-column gap-4  justify-content-around  flex-sm-column row-gap-sm-4 flex-lg-row column-gap-lg-5`}
        style={{ height: "auto" }}
      >
        <div
          className={`${styles.customServicesCard} position-relative w-auto`}
        >
          <h1 className={`${styles.servicesCardTitle} fs-4 pt-5 ps-5 pe-5`}>
            Daily Car Rental
          </h1>
          <p className={`${styles.servicesCardDescription}  ps-5 pe-5`}>
            Explore convenience with our Daily Car Rental service, offering a
            wide range of vehicles to suit your short-term travel needs. Enjoy
            hassle-free bookings, competitive rates, and reliable transportation
            for your daily adventures.
          </p>
          <div
            className={`${styles.numCurve} position-absolute bottom-0d-none d-sm-none`}
          >
            <div className={`${styles.number}`}>01.</div>
          </div>
        </div>

        <div
          className={`${styles.customServicesCard} position-relative w-auto`}
        >
          <h1 className={`${styles.servicesCardTitle} fs-4 pt-5 ps-5 pe-5`}>
            Monthly Car Rental
          </h1>
          <p className={`${styles.servicesCardDescription}  ps-5 pe-5`}>
            Experience flexibility with our Monthly Car Rental service, offering
            convenient terms and a diverse selection of reliable vehicles. Enjoy
            competitive rates and hassle-free leasing for your short to mid-term
            transportation needs.
          </p>
          <div
            className={`${styles.numCurve} position-absolute bottom-0 d-none d-sm-none`}
          >
            <div className={`${styles.number}`}>02.</div>
          </div>
        </div>

        <div
          className={`${styles.customServicesCard} position-relative w-auto`}
        >
          <h1 className={`${styles.servicesCardTitle} fs-4 pt-5 ps-5 pe-5`}>
            Annual Car Rental
          </h1>
          <p className={`${styles.servicesCardDescription}  ps-5 pe-5`}>
            Elevate your travel experience with our Annual Car Rental, providing
            reliable vehicles and flexible leasing options tailored to your
            long-term mobility needs. Enjoy seamless service, competitive rates,
            and the convenience of year-round transportation.
          </p>
          <div
            className={`${styles.numCurve} position-absolute bottom-0 d-none d-sm-none`}
          >
            <div className={`${styles.number}`}>03.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
