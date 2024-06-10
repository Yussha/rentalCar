import Hero from "./Hero";
import About from "./About";
import VideoSection from "./VideoSection";
import Services from "./Services";
import DisplayCars from "./DisplayCars";

export default function Home({
  setModalVideo,
  dataCars,
  setShowCarDetails,
  setActiveLink,
  modalVideo
}) {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <VideoSection setModalVideo={setModalVideo} modalVideo={modalVideo}></VideoSection>
      <DisplayCars
        dataCars={dataCars}
        setShowCarDetails={setShowCarDetails}
        setActiveLink={setActiveLink}
      ></DisplayCars>
    </>
  );
}
