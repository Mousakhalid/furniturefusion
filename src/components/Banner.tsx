import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div
        className="bg-[url('/banner1.jpg')]  object-contain  bg-cover bg-center bg-no-repeat h-full sm:rounded rounded md:p-48 p-4"
        style={{ boxShadow: "inset 0 0 0 2000px rgba(173, 216, 230, 0.5)" }}
      >
        <div className="space-y-5 md:w-[50%] w-[75%] leading-7">
          <h1 className="font-bold md:text-5xl text-3xl text-gray-50">
            Designed For Sweet Dreams & Comfort
          </h1>
          <button
            className="inline-flex bg-stone-700 rounded px-4 py-3 text-white 
        hover:bg-neutral-900 duration-300"
          >
            Shop Now <AiOutlineArrowRight className="mt-1 ml-1" />
          </button>
        </div>
      </div>
      <div className="bg-blue-200 py-8">
        <h2 className="text-gray-100 font-medium md:text-3xl text-xl text-center">Modern Designs - Made For Luxury Feel</h2>
      </div>
    </>
  );
};

export default Banner;
