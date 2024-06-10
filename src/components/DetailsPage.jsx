import styles from "./detailspage.module.css";

import { FaCheck } from "react-icons/fa6";
import { MdDoorSliding } from "react-icons/md";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import { BsFillLuggageFill } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";

import Form from "./Form";
import ConfirmationMessage from "../Modal/ConfirmationMessage";

import { useLocation } from "react-router-dom";

export default function DetailsPage({
  showCarDetails,
  dataCars,
  setShowForm,
  showForm,
  setBookingInputs,
  bookingInputs,
  setBookingData,
  setShowConfirmMessage,
  showConfirmMessage,
}) {
  function handleShowForm(carName, carPrice) {
    setShowForm(true);

    setBookingInputs((prevBookingInputs) => ({
      ...prevBookingInputs,
      car: carName,
      pricePerDay: carPrice,
    }));
  }

  return (
    <div className={`${styles.customdetailspage} position-relative`}>
      <div className={`${styles.customdetailspageBanner} position-relative`}>
        <h1
          className={`${styles.customdetailspageTitle} position-absolute z-1`}
        >
          {showCarDetails.name}
        </h1>
        <img
          className={`${styles.customdetailspageImg} `}
          src={showCarDetails.image}
          alt=""
        />
        <div
          className={`${styles.customOverlay} position-absolute top-0 start-0 end-0 bottom-0 z-0`}
        ></div>
      </div>

      <div
        className={`${styles.customdetailsInfo} me-5 ms-5 d-flex flex-column gap-3`}
      >
        <h1 className={`${styles.customTitle} fs-4`}>General Information</h1>
        <p className={`${styles.customDetails} `}>
          Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen
          morbi consesua the miss sustion consation porttitor orci sit amet
          iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante
          sollicitudin velen fermen morbinetion consesua the risus consequation
          the porttiton.
        </p>

        <ul className={`${styles.customtList} d-flex flex-column gap-3 p-0`}>
          <li className="d-flex align-items-center gap-2">
            <div
              className={`${styles.customListIcon} d-flex align-items-center justify-content-center p-1`}
            >
              <FaCheck />
            </div>
            24/7 Roadside Assistance
          </li>
          <li className="d-flex align-items-center gap-2">
            <div
              className={`${styles.customListIcon} d-flex align-items-center justify-content-center p-1`}
            >
              <FaCheck />
            </div>{" "}
            Free Cancellation & Return
          </li>
          <li className="d-flex align-items-center gap-2">
            <div
              className={`${styles.customListIcon} d-flex align-items-center justify-content-center p-1`}
            >
              <FaCheck />
            </div>{" "}
            Rent Now Pay When You Arrive
          </li>
        </ul>
      </div>

      <div className={`${styles.customInfoCard} me-4 ms-4 mt-4 ms-md-5`}>
        <div
          className={`${styles.customPrice} d-flex align-items-center justify-content-center`}
        >
          <h1>₱{showCarDetails.pricePerDay}</h1>
          <span>/ rent per day</span>
        </div>

        <div className={`${styles.customInfos} d-flex gap-4 flex-column `}>
          <div
            className={`${styles.customInfo} d-flex justify-content-between align-items-center flex-sm-column flex-lg-row`}
          >
            <div className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customInfoIcon} d-flex align-items-center justify-content-center`}
              >
                <MdDoorSliding className="fs-5" style={{ color: "#f5b754" }} />
              </div>
              <span style={{ fontSize: "0.9rem" }}>Doors</span>
            </div>
            <span
              style={{ fontSize: "0.9rem", color: "#fff" }}
              className="fw-bold"
            >
              {showCarDetails.doors}
            </span>
          </div>

          <div
            className={`${styles.customInfo} d-flex justify-content-between align-items-center  flex-sm-column flex-lg-row`}
          >
            <div className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customInfoIcon} d-flex align-items-center justify-content-center`}
              >
                <MdAirlineSeatReclineNormal
                  className="fs-5"
                  style={{ color: "#f5b754" }}
                />
              </div>
              <span style={{ fontSize: "0.9rem" }}>Passengers</span>
            </div>
            <span
              style={{ fontSize: "0.9rem", color: "#fff" }}
              className="fw-bold"
            >
              {showCarDetails.passengers}
            </span>
          </div>

          <div
            className={`${styles.customInfo} d-flex justify-content-between align-items-center flex-sm-column flex-lg-row`}
          >
            <div className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customInfoIcon} d-flex align-items-center justify-content-center`}
              >
                <TbAutomaticGearbox
                  className="fs-5"
                  style={{ color: "#f5b754" }}
                />
              </div>
              <span style={{ fontSize: "0.9rem" }}>Transmission</span>
            </div>
            <span
              style={{
                fontSize: "0.9rem",
                color: "#fff",
                textTransform: "capitalize",
              }}
              className="fw-bold"
            >
              {showCarDetails.transmission}
            </span>
          </div>

          <div
            className={`${styles.customInfo} d-flex justify-content-between align-items-center flex-sm-column flex-lg-row`}
          >
            <div className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customInfoIcon} d-flex align-items-center justify-content-center`}
              >
                <BsFillLuggageFill
                  className="fs-5"
                  style={{ color: "#f5b754" }}
                />
              </div>
              <span style={{ fontSize: "0.9rem" }}>Luggage</span>
            </div>
            <span
              style={{ fontSize: "0.9rem", color: "#fff" }}
              className="fw-bold"
            >
              {showCarDetails.luggage} Bags
            </span>
          </div>

          <div
            className={`${styles.customInfo} d-flex justify-content-between align-items-center flex-sm-column flex-lg-row`}
          >
            <div className="d-flex align-items-center gap-2">
              <div
                className={`${styles.customInfoIcon} d-flex align-items-center justify-content-center`}
              >
                <TbAirConditioning
                  className="fs-5"
                  style={{ color: "#f5b754" }}
                />
              </div>
              <span style={{ fontSize: "0.9rem" }}>Air Condition</span>
            </div>
            <span
              style={{ fontSize: "0.9rem", color: "#fff" }}
              className="fw-bold"
            >
              {showCarDetails.transmission ? "Yes" : "No"}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <button
              className={styles.customBtn}
              onClick={() =>
                handleShowForm(showCarDetails.name, showCarDetails.pricePerDay)
              }
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <Form
          dataCars={dataCars}
          setShowForm={setShowForm}
          setBookingInputs={setBookingInputs}
          bookingInputs={bookingInputs}
          setBookingData={setBookingData}
          setShowConfirmMessage={setShowConfirmMessage}
        />
      )}
      {showConfirmMessage && (
        <ConfirmationMessage setShowConfirmMessage={setShowConfirmMessage} />
      )}
    </div>
  );
}
