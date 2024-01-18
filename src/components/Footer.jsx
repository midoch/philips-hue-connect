import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 p-6 px-8 flex justify-around items-center text-white">
      <Link to="/" className="flex items-center">
        <FaLightbulb className="w-8 h-8 mr-2" />
      </Link>

      <Link to="/" className="flex items-center">
        <FaHouse className="w-8 h-8 mx-2" />
      </Link>

      <Link to="/" className="flex items-center">
        <IoSettingsOutline className="w-8 h-8 ml-2" />
      </Link>
    </footer>
  );
}
