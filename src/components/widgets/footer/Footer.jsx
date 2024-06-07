import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 md:mt-[40px] sm:mt-[30px] mt-[30px] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:gap-5 md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold mb-2">About Us</h4>
            <p className="text-sm">
              We are a team of passionate developers building web applications
              with modern technologies.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="/#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Admission
                </a>
              </li>
              <li className="mb-1">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+123456789" className="hover:underline">
                +1 234 567 89
              </a>
            </p>
            <p className="text-sm">
              Address: 1234 Street Name, City, State, 12345
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; All rights reserved by Faisal | {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
