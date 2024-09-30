import React from 'react';
import { ISDPCard_Img } from '../utils/constants';

const ISDPCard = () => {
  return (
    
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-800">Interview Preparation Program</h2>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mt-2"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
         
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Institutional Skill Development Program (ISDP)
            </h3>
            <p className="text-gray-700">
             The Institutional Skill Development Program is crafted to help students and faculty excel both academically and professionally. With a focus on hands-on learning, ISDP offers extensive training in Data Science, AI, ML, DevOps, and many more.
      
            </p>
            <p className="text-gray-700 mt-4">
              Beyond technical skills, we cover essential non-technical areas like communication, leadership, and emotional intelligence. Our Campus Recruitment Training (CRT) prepares you for job market challenges with resume building, interview skills, and more.
      
            </p>
            <p className="text-gray-700 mt-4">
             
          Join ISDP to elevate your skills and boost your career
            </p>

            <div className="mt-6">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 focus:outline-none">
                LEARN MORE
              </button>
            </div>
          </div>
          
          {/* <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={ISDPCard_Img}
          alt="Classroom"
          className="rounded-lg shadow-lg"
        />
      </div> */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={ISDPCard_Img}
          alt="Classroom"
          className="rounded-lg shadow-lg"
        />
      </div>
        </div>
      </div>
    </div>
  );
};

export default ISDPCard;
