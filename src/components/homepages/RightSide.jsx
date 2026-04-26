import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import Swimming from "@/app/assets/swimming.png";
import Class from "@/app/assets/class.png";
import Play from "@/app/assets/playground.png";
import Image from "next/image";

const RightSide = () => {
  return (
    <div className="space-y-4 px-10">
      <h2 className="font-bold text-lg text-gray-800 mb-4">Login With</h2>

      <div className="flex flex-col gap-2">
        {/* Google Login Button */}
        <button className="btn btn-outline  text-blue-500 text-sm  w-full flex items-center gap-2 flex-nowrap">
          <IoLogoGoogle className="text-xl" />
          Login with Google
        </button>

        {/* Github Login Button */}
        <button className="btn btn-outline text-sm  w-full flex items-center gap-2 flex-nowrap">
          <IoLogoGithub className="text-xl" />
          Login with Github
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-gray-800">Find Us On</h2>

      <div className="flex flex-col gap-3">
        <button className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-blue-50 transition">
          <FaFacebook className="text-blue-600 text-xl" />
          <p className="font-medium text-gray-700">Facebook</p>
        </button>

        <button className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-sky-50 transition">
          <BsTwitter className="text-sky-500 text-xl" />
          <p className="font-medium text-gray-700">Twitter</p>
        </button>

        <button className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-pink-50 transition">
          <BsInstagram className="text-pink-500 text-xl" />
          <p className="font-medium text-gray-700">Instagram</p>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Q-Zone</h2>

        <div className="space-y-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={Swimming}
              alt="swimming"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={Class}
              alt="class"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={Play}
              alt="play"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
