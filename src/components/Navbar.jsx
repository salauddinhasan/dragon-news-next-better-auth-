import React from "react";
import userImages from "@/app/assets/user.png";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between mt-2">
      {/* Left side spacer - Useful for logo later */}
      <div className="w-10 md:block hidden"></div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-6 text-gray-600 font-medium">
          <li>
            <NavLink href="/" className="hover:text-pink-700 transition-colors">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/about"
              className="hover:text-pink-700 transition-colors"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/career"
              className="hover:text-pink-700 transition-colors"
            >
              Career
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Profile & Auth */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
          <Image
            src={userImages}
            alt="User Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <Link
          href="/login"
          className="btn bg-gray-800 text-white hover:bg-gray-900 border-none px-6 rounded-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
