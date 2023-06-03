import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-violet-50 p-12">
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div>
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <div className="grid grid-rows-4 font-medium text-medium text-neutral-700 gap-1">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/our-story"}>Our Story</Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Categories</h1>
          <div className="grid grid-rows-4 font-medium text-medium text-neutral-700 gap-1">
            <Link href={"/categories/bed"}>Bed</Link>
            <Link href={"/categories/sofa"}>Sofa</Link>
            <Link href={"/categories/chairs"}>Chairs</Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Contact</h1>
          <div className="grid grid-rows-4 font-medium text-medium text-neutral-700 gap-1">
            <Link href="tel:097 0559323200">097 0559323200</Link>
            <Link href="email:">furniturefusion.co</Link>
          </div>
        </div>
        <div>
        <h1 className="text-xl font-bold mb-4">Newsletter</h1>
          <div className="md:flex grid grid-rows-1">
            <input
              type="email"
              className="px-6 py-3 border border-1px-solid"
              placeholder="Enter Email Address"
            />
            <button
              type="submit"
              className="bg-stone-700 text-gray-50 px-4 text-medium py-3"
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm font-md text-gray-800 py-2">
            Receive exclusive access to new arrivals and updates on our
            design-driven, handcrafted collection.
          </p>
          <div className="flex text-xl space-x-3">
            <FaFacebookF className="hover:text-gray-500 hover:text-2xl cursor-pointer " />
            <FaInstagram className="hover:text-gray-500 hover:text-2xl cursor-pointer" />
            <FaTwitter className="hover:text-gray-500 hover:text-2xl cursor-pointer" />
            <FaPinterestP className="hover:text-gray-500 hover:text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
