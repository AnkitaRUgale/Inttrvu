import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between px-6 pb-3">
   
      <div className="flex flex-col items-start md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-cyan-400">INTTRVU</h2>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/people/inttrvuai/100092270186906/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/inttrvu.ai/?igshid=NTc4MTIwNjQ2YQ" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400">
              <FaInstagram />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@INTTRVUai/videos" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/rohit-mande-15a3a154/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold">Our Programs</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-cyan-400">Data Science & AI</a></li>
            <li><a href="#" className="hover:text-cyan-400">Interview Preparation</a></li>
            <li><a href="#" className="hover:text-cyan-400">ISDP (Institutional Skill Development Program)</a></li>
          </ul>
        </div>

     
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
            <li><a href="#" className="hover:text-cyan-400">Privacy & Refund Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400">Terms and Conditions</a></li>
          </ul>
        </div>

      
        <div className="md:w-1/4">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <p className="mt-4">Address: Navale Icon, Near Navale Bridge, Pune - 411041</p>
          <p>Phone: <a href="tel:+917756043707" className="hover:text-cyan-400">+91 7756043707</a></p>
          <p>Email: <a href="mailto:info@inttrvu.ai" className="hover:text-cyan-400">INFO@INTTRVU.AI</a></p>
        </div>
      </div>
      <hr/>

      <div className="text-center text-sm text-gray-500 mt-8">
        Copyright © 2024 Inttrvu | Developed By Ankita Ugale.
      </div>
    </footer>
  );
};

export default Footer;
