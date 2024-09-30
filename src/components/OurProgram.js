import React from "react";
import { DataScience_Img } from "../utils/constants";
import InterviewPreparationProgram from "./InterviewPreparationProgram";
import ISDPCard from "./ISDP";

const OurProgram = () => {
  return ( <div className="bg-gray-100 py-10">
  <div className="container mx-auto px-4">
    {/* Title Section */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-semibold text-gray-800">Our Programs</h2>
      <div className="h-1 w-32 bg-cyan-500 mx-auto mt-2"></div>
    </div>

    {/* Program Content Section */}
    <div className="flex flex-wrap justify-center items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={DataScience_Img}
          alt="Data Science and AI"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-3xl font-semibold text-gray-800">
          Data Science & AI Program
        </h3>
        <p className="text-gray-700 mt-4">
          Our Data Science & AI Certification Program is ideal for students and IT professionals with a technical background. Over six months, you will master Data Science from basics to advanced concepts through live interactive classes by top experts.
        </p>
        <p className="text-gray-700 mt-4">
          You will work on 20+ projects, including 4 capstone projects with Generative AI. Get 1-1 guidance, class recordings for self-paced learning, and a 300+ FAQ document. We also provide placement assistance, mock interviews, and detailed feedback.
        </p>
        <p className="text-gray-700 mt-4">
          Complete the course and earn a certificate to advance your career in the ever-growing field of Data Science.
        </p>

        {/* Learn More Button */}
        <div className="mt-6">
          <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  </div>
  <InterviewPreparationProgram/>
  <ISDPCard/>
</div>
);
};

export default OurProgram;
