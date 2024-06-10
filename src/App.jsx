import { useState, useEffect, useMemo } from "react";
import "./App.css";

/* For client side*/
import Website from "./components/Website";

/** For admin side */

/* import CarData */
import { carData } from "./data/carData";

/*React Router */
import { Routes, Route, Router } from "react-router-dom";

function App() {
  const [dataCars, setDataCars] = useState(carData);
  const [scroll, setScroll] = useState();
  const [modalVideo, setModalVideo] = useState(false);
  const [showCarDetails, setShowCarDetails] = useState({});

  const [activeLink, setActiveLink] = useState("home");
  const [showForm, setShowForm] = useState(false);
  const [bookingInputs, setBookingInputs] = useState({
    fullName: "",
    phone: "",
    pickUpLocation: "",
    dropOffLocation: "",
    email: "",
    car: "",
    pricePerDay: "",
    dateAndTimePickUp: "",
    dateAndTimeDropOff: "",
    additionalNote: "",
    totalPayment: "",
    driverLicense: "",
  });
  const [bookingData, setBookingData] = useState([]);
  const [showLogin, setShowLogin] = useState(false);


  useEffect(() => {
    const body = document.body;
    showForm
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "visible");
  }, [showForm]);


  return (
    <Router basename="/rentalCar">
      <main >
        <Routes>
          <Route
            path="*"
            element={
              <Website
                scroll={scroll}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                setModalVideo={setModalVideo}
                dataCars={dataCars}
                setShowCarDetails={setShowCarDetails}
                modalVideo={modalVideo}
                showCarDetails={showCarDetails}
                setShowForm={setShowForm}
                showForm={showForm}
                setBookingInputs={setBookingInputs}
                bookingInputs={bookingInputs}
                setBookingData={setBookingData}
                setShowLogin={setShowLogin}
                showLogin={showLogin}
              />
            }
          />

        </Routes>
      </main>

    </Router>

  );
}

export default App;
