import React, { useState } from 'react';

const Contact = () => {
  
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptchaInput, setUserCaptchaInput] = useState('');


  function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (parseInt(userCaptchaInput) === captcha) {
      alert('Captcha Verified! Form submitted successfully.');
    } else {
      alert('Captcha does not match. Please try again.');
    }

    setCaptcha(generateCaptcha());
    setUserCaptchaInput('');
  };

  return (
    <section className="bg-gray-900 text-gray-300 py-12 mt-3">
      <div className="container mx-auto px-6 md:flex md:space-x-6">
        
        
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="space-y-4">
           
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-cyan-400">📞</span>
              <p className="text-lg">+91 7756043707</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-cyan-400">✉️</span>
              <p className="text-lg">info@inttrvu.ai</p>
            </div>
          </div>

         
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="rounded overflow-hidden shadow-lg">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4084867184344!2d73.84126071547495!3d18.5119869741078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc45ff53a4f%3A0x35fd72ab38513fd2!2sInttrvu.ai!5e0!3m2!1sen!2sin!4v1671549596071!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      
        <div className="md:w-1/2 bg-cyan-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
          <p className="mb-6">Please fill up the enquiry form and our team will get back to you as early as possible.</p>

        
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name *" className="w-full px-4 py-2 rounded-lg focus:outline-none" required />
            <input type="email" placeholder="Enter Email Address *" className="w-full px-4 py-2 rounded-lg focus:outline-none" required />
            <div className="flex space-x-2">
              <input type="text" placeholder="+91" className="w-1/5 px-4 py-2 rounded-lg focus:outline-none" defaultValue="+91" disabled />
              <input type="tel" placeholder="Enter Mobile Number *" className="w-4/5 px-4 py-2 rounded-lg focus:outline-none" required />
            </div>

            <div className="flex items-center space-x-2">
              <span className="bg-white text-gray-900 text-lg font-bold py-2 px-4 rounded-lg">{captcha}</span>
              <input
                type="text"
                placeholder="Enter text as shown"
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                value={userCaptchaInput}
                onChange={(e) => setUserCaptchaInput(e.target.value)}
                required
              />
            </div>

            
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="form-checkbox text-cyan-500" required />
              <p>I agree to give my consent to receive updates through SMS/Email & WhatsApp*</p>
            </div>

          
            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
