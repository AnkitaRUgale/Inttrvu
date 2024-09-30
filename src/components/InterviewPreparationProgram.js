import React from "react";
import { InterviewPreparation_Img } from "../utils/constants";

const InterviewPreparationProgram = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-800">Interview Preparation Program</h2>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mt-2"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
         
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Interview Preparation Program
            </h3>
            <p className="text-gray-700">
              Interview Preparation Program is tailored for those who have learned Data Science or are working as Data Scientists or interns. This 2-month intensive program, led by top Data Science experts, offers comprehensive interview coaching to boost your confidence and effectiveness in Data Science job interviews.
            </p>
            <p className="text-gray-700 mt-4">
              You will work on four industry-relevant projects, receive expert CV creation guidance, and participate in mock interviews. The program includes 300+ FAQs, access to class recordings for self-paced learning, detailed feedback with a plan to crack interviews, salary negotiation guidelines, and a course completion certificate.
            </p>
            <p className="text-gray-700 mt-4">
              Join us to secure your dream job in Data Science.
            </p>

            <div className="mt-6">
              <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4">
            <img
              src={InterviewPreparation_Img}
              alt="Interview Preparation"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparationProgram;
