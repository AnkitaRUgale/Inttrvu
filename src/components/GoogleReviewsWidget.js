import React, { useEffect } from 'react';

const GoogleReviewsWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      
        script.onload = () => {
          const reviews = document.querySelectorAll('.sk-ww-google-reviews .review-class'); // Adjust selector to actual review class
          if (reviews.length > 5) {
            for (let i = 5; i < reviews.length; i++) {
              reviews[i].style.display = 'none'; // Hides reviews beyond the 5th
            }
          }
        };
      
        return () => {
          document.body.removeChild(script); // Clean up the script when component unmounts
        };
      }, []);
      
  return (
    <div >
      <div className='sk-ww-google-reviews h-20 w-auto flex flex-wrap' data-embed-id='25469082'></div>
    </div>
  );
};

export default GoogleReviewsWidget;
