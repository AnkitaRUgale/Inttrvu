import React from "react";
import Header from "./Header";
import SimpleSlideshow from "./SimpleSlideShow";
import OurProgram from "./OurProgram";
import ReviewsSection from "./ReviewsSection";
import Collaborations from "./Collaborations";
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="bg-red-50">
        <Header />
        <SimpleSlideshow />
      </div>
      <div className="absolute bottom-52 left-44 w-1/2">
        <h1 className=" text-3xl text-white bg-gradient-to-b from-black">
          Transform Your Career with Expert-Led Upskilling Programs
        </h1>
        <h3 className=" text-1xl text-white bg-gradient-to-t from-black">
          Start Your Journey to Career Success with Our Expert Programs,
          Personalized Guidance and Comprehensive Support for a Seamless Career
          Transition.
        </h3>
        <button
          className="bg-blue-700 p-3 m-4  left-3 right-3 rounded-full text-white"
          type="text"
        >
          View all programs
        </button>
      </div>
      <OurProgram />
      <ReviewsSection />
      <Collaborations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
