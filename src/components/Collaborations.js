import React from 'react';

const Collaborations = () => {
  // Replace these with actual logo URLs
  const logos = [
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/1.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/2.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/3.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/4.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/5.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/6.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/8.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/9.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/10.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/11.png' },
    {  url: 'https://inttrvu.ai/wp-content/uploads/2024/07/12.png' },
    { url: 'https://inttrvu.ai/wp-content/uploads/2024/07/13.png' }
  ];

  return (
    <div className="py-8">
      
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Collaborations
      </h2>
      
      <div className="overflow-hidden relative m-4 ">
        <div className=" flex items-center animate-scroll space-x-10">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                className="h-16  object-contain"
                src={logo.url}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
