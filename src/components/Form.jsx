import styles from "./form.module.css";

import { locations } from "../data/locations";

import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react";

export default function Form({
  dataCars,
  setShowForm,
  setBookingInputs,
  bookingInputs,
  setBookingData,
  setShowConfirmMessage,
}) {
  const [showInputError, setShowInputError] = useState(false);
  /** For totalPayment */
  useEffect(() => {
    const pickUpDate = new Date(bookingInputs.dateAndTimePickUp);
    const dropOffDate = new Date(bookingInputs.dateAndTimeDropOff);

    if (
      pickUpDate &&
      dropOffDate &&
      !isNaN(pickUpDate) &&
      !isNaN(dropOffDate)
    ) {
      /** Math.abs = returns a distance of a given number from the 0 it always returns a positive */
      const timeDiff = Math.abs(pickUpDate.getTime() - dropOffDate.getTime());
      /**
       * 1000 ms is equal to 1 second,
       * 60sec(every 1 minute it has a 60 seconds) x 60min(1 hr) = 3600, So meaning we have a 3600 in an hour
       * 24 hrs in a day
       * Math.ceil = used to round up a number to the nearest whole number for example 3.7 days will become 4 days
       */
      const numOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      const cleanedPrice = bookingInputs.pricePerDay.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      const pricePerDay = parseInt(cleanedPrice); // Parse the cleaned string
      const totalPayment = numOfDays * pricePerDay;
      const formattedTotalPayment = totalPayment.toLocaleString(); // Format with commas

      setBookingInputs((prevBookingInputs) => ({
        ...prevBookingInputs,
        totalPayment: formattedTotalPayment,
      }));
    }
  }, [bookingInputs.dateAndTimePickUp, bookingInputs.dateAndTimeDropOff]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setBookingInputs((prevBookingInputs) => ({
      ...prevBookingInputs,
      [name]: value,
    }));
  }

  function handleInputImg(event) {
    const { name, files } = event.target;
    setBookingInputs((prevBookingInputs) => ({
      ...prevBookingInputs,
      [name]: URL.createObjectURL(files[0]),
    }));
  }

  function handleDropDownChange(name, value) {
    setBookingInputs((prevBookingInputs) => ({
      ...prevBookingInputs,
      [name]: value.place,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      fullName,
      phone,
      pickUpLocation,
      dropOffLocation,
      email,
      dateAndTimeDropOff,
      dateAndTimePickUp,
      driverLicense,
    } = bookingInputs;

    if (
      fullName === "" ||
      phone === "" ||
      pickUpLocation === "" ||
      dropOffLocation === "" ||
      email === "" ||
      dateAndTimeDropOff === "" ||
      dateAndTimePickUp === "" ||
      driverLicense === ""
    ) {
      setShowInputError(true);
    } else {
      const newData = bookingInputs;
      setBookingData((prevData) => [...prevData, newData]);

      setBookingInputs({
        fullName: "",
        phone: "",
        pickUpLocation: "",
        dropOffLocation: "",
        email: "",
        car: "",
        dateAndTimePickUp: "",
        dateAndTimeDropOff: "",
        additionalNote: "",
        totalPayment: "",
        driverLicense: "",
      });
      setShowConfirmMessage(true);
      setShowForm(false);
    }
  }

  return (
    <div className={`${styles.customForm}  position-fixed z-3`}>
      <div
        className={`${styles.customHeader} d-flex align-items-center justify-content-between`}
      >
        <h1 className="fs-4 fw-bold" style={{ color: "#1b1b1b" }}>
          Booking Form
        </h1>
        <IoMdClose
          className="fs-4"
          style={{ color: "#000", cursor: "pointer" }}
          onClick={() => setShowForm(false)}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        action=""
        className={`${styles.customFormContent} d-flex flex-column gap-3`}
      >
        <div className="d-flex gap-5">
          <div className="d-flex flex-column w-50">
            <label className={`${styles.customLabel}`} htmlFor="fullname">
              Full Name*
            </label>
            <input
              id="userInput"
              className={`${styles.customInput}`}
              type="text"
              name="fullName"
              value={bookingInputs.fullName}
              onChange={(e) => handleInputChange(e)}
            />
            {showInputError && bookingInputs.fullName === "" && (
              <div className={`${styles.errorMessage}`}>
                This field is required
              </div>
            )}

            <label className={`${styles.customLabel}`} htmlFor="phone">
              Phone*
            </label>
            <input
              id="userInput"
              className={`${styles.customInput}`}
              type="text"
              name="phone"
              value={bookingInputs.phone}
              onChange={(e) => handleInputChange(e)}
            />
            {showInputError && bookingInputs.phone === "" && (
              <div className={`${styles.errorMessage}`}>
                This field is required
              </div>
            )}
            <div className="dropdown">
              <button
                className={`${styles.customDropdownBtn} dropdown-toggle d-flex align-items-center justify-content-between`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {bookingInputs.pickUpLocation === ""
                  ? "Pick Up Location"
                  : bookingInputs.pickUpLocation}
              </button>
              <ul className={`${styles.customDropdownMenu} dropdown-menu`}>
                {locations.map((location) => {
                  return (
                    <li
                      key={location.id}
                      onClick={() =>
                        handleDropDownChange("pickUpLocation", location)
                      }
                    >
                      <a
                        className="dropdown-item"
                        style={{ color: "#999" }}
                        href="#"
                      >
                        {location.place}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {showInputError && bookingInputs.pickUpLocation === "" && (
                <div className={`${styles.errorMessage}`}>
                  This field is required
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className={`${styles.customDropdownBtn} dropdown-toggle d-flex align-items-center justify-content-between`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {bookingInputs.dropOffLocation === ""
                  ? "Drop Off Location"
                  : bookingInputs.dropOffLocation}
              </button>
              <ul className={`${styles.customDropdownMenu} dropdown-menu`}>
                {locations.map((location) => {
                  return (
                    <li
                      key={location.id}
                      onClick={() =>
                        handleDropDownChange("dropOffLocation", location)
                      }
                    >
                      <a
                        className="dropdown-item"
                        style={{ color: "#999" }}
                        href="#"
                      >
                        {location.place}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {showInputError && bookingInputs.dropOffLocation === "" && (
                <div className={`${styles.errorMessage}`}>
                  This field is required
                </div>
              )}
            </div>

            <div>
              <label htmlFor="upload-img" className={`${styles.customLabel}`}>
                Upload Driver's License
              </label>
              <input
                type="file"
                name="driverLicense"
                accept="image/*"
                id="upload-img"
                onChange={(e) => handleInputImg(e)}
                className={`${styles.customInput}`}
              />
              {showInputError && bookingInputs.driverLicense === "" && (
                <div className={`${styles.errorMessage}`}>
                  This field is required
                </div>
              )}
            </div>
          </div>

          <div className="d-flex flex-column  w-50">
            <label className={`${styles.customLabel}`} htmlFor="email">
              Email*
            </label>
            <input
              id="userInput"
              className={`${styles.customInput}`}
              type="email"
              name="email"
              value={bookingInputs.email}
              onChange={(e) => handleInputChange(e)}
            />
            {showInputError && bookingInputs.email === "" && (
              <div className={`${styles.errorMessage}`}>
                This field is required
              </div>
            )}

            <label className={`${styles.customLabel}`} htmlFor="email">
              Car
            </label>
            <input
              className={`${styles.customInput}`}
              type="text"
              name="car"
              defaultValue={bookingInputs.car}
              readOnly
            />

            <label
              className={`${styles.customLabel}`}
              htmlFor="dateAndTimeForPickUp"
            >
              Date and Time for Pick Up
            </label>
            <input
              id="userInput"
              className={`${styles.customInput}`}
              type="datetime-local"
              name="dateAndTimePickUp"
              value={bookingInputs.dateAndTimePickUp}
              onChange={handleInputChange}
            ></input>
            {showInputError && bookingInputs.dateAndTimePickUp === "" && (
              <div className={`${styles.errorMessage}`}>
                This field is required
              </div>
            )}

            <label
              className={`${styles.customLabel}`}
              htmlFor="dateAndTimeDropOff"
            >
              Date and Time for Drop off
            </label>
            <input
              id="userInput"
              className={`${styles.customInput}`}
              type="datetime-local"
              name="dateAndTimeDropOff"
              value={bookingInputs.dateAndTimeDropOff}
              onChange={handleInputChange}
            ></input>
            {showInputError && bookingInputs.dateAndTimeDropOff === "" && (
              <div className={`${styles.errorMessage}`}>
                This field is required
              </div>
            )}
          </div>
        </div>

        <div className="d-flex flex-column">
          <label className={`${styles.customLabel}`} htmlFor="additionalnote">
            Additional Note
          </label>
          <textarea
            className={styles.customTextArea}
            name="additionalNote"
            value={bookingInputs.additionalNote}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <button className={styles.customBtn} type="submit">
            Rent Now
          </button>
        </div>
      </form>
    </div>
  );
}
