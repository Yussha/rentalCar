import styles from "./displaycars.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import { BsFillLuggageFill } from "react-icons/bs";

import { Link } from "react-router-dom";
export default function DisplayCars({
  dataCars,
  setShowCarDetails,
  setActiveLink,
}) {
  return (
    <section
      className={`${styles.customDisplayCars} pe-5 ps-5 d-none d-sm-none d-lg-block`}
      id="cars"
    >
      <p className={`${styles.customDisplayCarsSubTitle} text-center`}>
        SELECT YOUR CAR
      </p>
      <h1 className={`${styles.customDisplayCarsTitle} text-center mb-5`}>
        Luxury <span style={{ color: "#f5b754" }}>Car</span>
      </h1>

      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          modules={[Navigation]}
          className={`${styles.customDisplayProductSwiper} mySwiper`}
        >
          {dataCars.map((dataCar) => {
            return (
              <SwiperSlide
                key={dataCar.id}
                className={` ${styles.customSwiperSlide}  w-50`}
              >
                <div
                  className={`${styles.customSwiperSlideContent} bg-danger h-75 position-relative`}
                >
                  <img
                    className={`${styles.customDPimg}`}
                    src={dataCar.image}
                    alt=""
                  />
                  <div
                    className={`${styles.customDisplayProductInfo}  position-absolute p-3 d-flex align-items-center justify-content-between`}
                  >
                    <div>
                      <h1 className={`${styles.customDPname} fs-4`}>
                        {dataCar.name}
                      </h1>
                      <div
                        className={`${styles.customDetailsContainer} d-flex gap-2`}
                      >
                        <span
                          className={`${styles.customDetail} d-flex align-items-center gap-1`}
                        >
                          <MdAirlineSeatReclineNormal
                            style={{ color: "#f5b754" }}
                          />{" "}
                          {dataCar.passengers} Seats
                        </span>
                        <span
                          className={`${styles.customDetail} d-flex align-items-center gap-1`}
                        >
                          {" "}
                          <TbAutomaticGearbox
                            style={{ color: "#f5b754" }}
                          />{" "}
                          {dataCar.transmission}
                        </span>
                        <span
                          className={`${styles.customDetail} d-flex align-items-center gap-1`}
                        >
                          <BsFillLuggageFill style={{ color: "#f5b754" }} />
                          {dataCar.luggage} Bags
                        </span>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <Link to="detailspage">
                        <button
                          className={`${styles.customDPbtn}`}
                          onClick={() => {
                            setShowCarDetails(dataCar);
                            setActiveLink("");
                          }}
                        >
                          Details
                        </button>
                      </Link>

                      <div className="d-flex flex-column align-items-end">
                        <span className={`${styles.customDPprice}`}>
                          ₱{dataCar.pricePerDay}{" "}
                        </span>
                        <span style={{ color: "#999", fontSize: "0.9rem" }}>
                          /day
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
