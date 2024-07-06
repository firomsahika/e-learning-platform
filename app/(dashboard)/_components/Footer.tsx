import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-primary py-10 border-t  px-10">
      <div className="container  px-4 sm:px-6 lg:px-8">
        <div className="flex  flex-wrap gap-0">
          {/* Company Info */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
           
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Our mission is to provide high-quality educational resources to learners worldwide. Join us in making learning accessible and engaging for everyone.
            </p>
          </div>
          {/* Quick Links */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          {/* Subscribe */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers.</p>
            <form>
              <input type="email" placeholder="Your email" className="p-2 w-full mb-4 bg-gray-700 text-white border border-gray-600 rounded" />
              <button type="submit" className="p-2 w-full bg-primary hover:bg-blue-700 rounded text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t  pt-4 flex justify-between items-center">
          <p className="text-gray-400">&copy; 2024 SkillsHorizon. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-primary hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-primary hover:text-white"><FaLinkedin /></a>
            <a href="#" className="text-primary hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
