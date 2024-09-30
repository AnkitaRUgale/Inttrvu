import React, { useState } from 'react'; 
import { LOGO_URL } from '../utils/constants';
import { Google_Logo } from '../utils/constants';

const reviews = [
  {
    name: "Vijeta Wasnik",
    date: "23 May, 2024",
    rating: 5,
    review: "The course was exceptionally effective in preparing me for data science interviews. The content was well-curated and focused on real-world interview scenarios. Overall, the course was immensely helpful and provided me with the confidence and skills needed for data science interviews.",
    googleLogo: true
  },
  {
    name: "Anshuman Pathak",
    date: "18 May, 2024",
    rating: 5,
    review: "I am glad I came across this course at the right time when I was trying to internally switch into Data Science role from  Prod role. The material with Interview questions especially for the stats and ML part were really helpful and a few were even directly starting points in my interview which I was able to crack. Thank you Team !",
    googleLogo: true
  },
  {
    name: "Shivam Agrawal",
    date: "16 May, 2024",
    rating: 5,
    review: "I attended a data science course with Mr. Rohit M. as the instructor and had an excellent experience. Content: The course content is very streamlined and focuses only on the most relevant topics for today’s job market and advancements. It’s not designed to make you a statistician or a data engineer, but it effectively prepares you for a career as a data scientist. Pace of Teaching: The pace of teaching is excellent. Mr. Rohit frequently takes feedback from students to ensure everyone is keeping up. Doubt Solving: There are separate sessions each week dedicated to solving doubts. Mr. Rohit also offers sound advice for career transition queries and is happy to engage in discussions about the journey of a data science project and the unique challenges each problem statement can bring. Support for Placements: Through Mr. Rohit’s support, I received a 50% hike in my first offer from an MNC. Highly recommended for those looking to transition into the data science space. The course is great value for money and time well spent.",
    googleLogo: true
  },
  {
    name: "Anshuman Pathak",
    date: "18 May, 2024",
    rating: 5,
    review: "I am glad I came across this course at the right time when I was trying to internally switch into Data Science role from  Prod role. The material with Interview questions especially for the stats and ML part were really helpful and a few were even directly starting points in my interview which I was able to crack. Thank you Team !",
    googleLogo: true
  },
  {
    name: "Shivam Agrawal",
    date: "16 May, 2024",
    rating: 5,
    review: "I attended a data science course with Mr. Rohit M. as the instructor and had an excellent experience. Content: The course content is very streamlined and focuses only on the most relevant topics for today’s job market and advancements. It’s not designed to make you a statistician or a data engineer, but it effectively prepares you for a career as a data scientist. Pace of Teaching: The pace of teaching is excellent. Mr. Rohit frequently takes feedback from students to ensure everyone is keeping up. Doubt Solving: There are separate sessions each week dedicated to solving doubts. Mr. Rohit also offers sound advice for career transition queries and is happy to engage in discussions about the journey of a data science project and the unique challenges each problem statement can bring. Support for Placements: Through Mr. Rohit’s support, I received a 50% hike in my first offer from an MNC. Highly recommended for those looking to transition into the data science space. The course is great value for money and time well spent.",
    googleLogo: true
  },
 
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState(new Array(reviews.length).fill(false)); // Track expanded state for each review

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reviews.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < reviews.length - 3 ? prevIndex + 1 : 0));
  };

  const toggleExpand = (index) => {
    setExpandedReviews((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the specific review's expanded state
      return newState;
    });
  };

  return (
    <div className="bg-white py-10">
      <div className="h-48 text-center mt-1 mb-10 pt-10 bg-blue-400">
        <h2 className="text-3xl font-bold text-white mb-4">Up-skill Yourself And Land Your Dream Job</h2>
        <p className="text-white ml-2 mr-2">
          Creating a great candidate experience which starts with setting clear expectations from the beginning. Our application process is simple and we provide a detailed step-by-step guide to help you every step of the way.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex items-start space-x-4">
        <div className="flex items-center space-x-2 mb-6">
          <img src={LOGO_URL} alt="Logo" className="w-10 h-s" />
          <div className="text-left">
            <h3 className="text-xl font-semibold">Inttrvu.ai</h3>
            <p className="text-yellow-500">★★★★★</p>
            <p className="text-gray-500">64 Google reviews</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Write a review
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                  {review.googleLogo && (
                    <img src={Google_Logo} alt="Google Logo" className="ml-auto w-6 h-6" />
                  )}
                </div>
                <p className="text-yellow-500 mb-2">{"★".repeat(review.rating)}</p>
                <p className="text-gray-700 mb-4">
                  {expandedReviews[currentIndex + index] ? review.review : `${review.review.slice(0, 100)}...`}
                  {review.review.length > 100 && (
                    <button onClick={() => toggleExpand(currentIndex + index)} className="text-blue-500 ml-2">
                      {expandedReviews[currentIndex + index] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={handlePrev}>
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={handleNext} >
               &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
