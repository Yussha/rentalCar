import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "./Home";
import Navbar from "./Navbar";
import ModalVideo from "./ModalVideo";
import Overlay from "./Overlay";
import DetailsPage from "./DetailsPage";
import ScrollToTopOnNavigate from "./ScrollToTopOnNavigate";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import Cars from "../Pages/Cars";
export default function Website({
  scroll,
  activeLink,
  setActiveLink,
  setModalVideo,
  dataCars,
  setShowCarDetails,
  showCarDetails,
  modalVideo,

  setShowForm,
  showForm,
  setBookingInputs,
  bookingInputs,
  setBookingData,
  setShowLogin,
  showLogin,
}) {
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  return (
    <div className="position-relative">
      <Navbar
        scroll={scroll}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setShowLogin={setShowLogin}
        showLogin={showLogin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ScrollToTopOnNavigate>
              <Home
                setModalVideo={setModalVideo}
                modalVideo={modalVideo}
                dataCars={dataCars}
                setShowCarDetails={setShowCarDetails}
                setActiveLink={setActiveLink}
              />
            </ScrollToTopOnNavigate>
          }
        />
        <Route
          path="aboutpage"
          element={
            <ScrollToTopOnNavigate>
              <AboutPage />
            </ScrollToTopOnNavigate>
          }
        />
        <Route
          path="servicespage"
          element={
            <ScrollToTopOnNavigate>
              <ServicesPage />
            </ScrollToTopOnNavigate>
          }
        />
        <Route
          path="cars"
          element={
            <ScrollToTopOnNavigate>
              <Cars dataCars={dataCars} setShowCarDetails={setShowCarDetails} setActiveLink={setActiveLink} />
            </ScrollToTopOnNavigate>
          }
        />


        <Route
          path="detailspage"
          element={
            <ScrollToTopOnNavigate>
              <DetailsPage
                showCarDetails={showCarDetails}
                dataCars={dataCars}
                setShowForm={setShowForm}
                showForm={showForm}
                setBookingInputs={setBookingInputs}
                bookingInputs={bookingInputs}
                setBookingData={setBookingData}
                setShowConfirmMessage={setShowConfirmMessage}
                showConfirmMessage={showConfirmMessage}
              />
            </ScrollToTopOnNavigate>
          }
        />
      </Routes>
      <Contact></Contact>
      <Footer></Footer>
      {modalVideo && <Overlay />}
      {showForm && <Overlay />}
      {showConfirmMessage && <Overlay />}
    </div>
  );
}
