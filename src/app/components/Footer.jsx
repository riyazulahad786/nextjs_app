import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className="container-fluid mx-auto bg-[#1E293B] text-white py-8">
    <div className="container px-4 mx-auto">
        <img src="/footerlogo.png" alt="logo"/>
  
      <div className=" mt-4 mx-auto  grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Us */}
        <div>
          <p className="font-bold mb-4 text-[#14B8A6]">Contact Us</p>
          <ul className="space-y-2">
            <li>Logo@gmail.com</li>
            <li>+91 12345 67890</li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Nulla tempus elit nec.
            </li>
            <li className="flex items-center gap-3">
                <CiFacebook />
                <CiLinkedin/>
                <CiTwitter/>
                <CiInstagram/>
            </li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <p className="font-bold mb-4 text-[#14B8A6]">Product Links</p>
          <ul className="space-y-2">
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-bold mb-4 text-[#14B8A6]">Quick Links</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <p className="font-bold mb-4 text-[#14B8A6]">Legal Links</p>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Get the App */}
        <div>
          <p className="font-bold mb-4 text-[#14B8A6]">Get the App</p>
          <ul className="space-y-2">
            <li><img src="/appstore.png"/></li>
            <li><img src="/googleplay.png"/></li>
            
          </ul>
        </div>
      </div>
      <div className="flex justify-center  mt-3">
      Copyright © 2020. All rights reserved.
      </div>
      </div>
    </div>
  );
}

export default Footer;
