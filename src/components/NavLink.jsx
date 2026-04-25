"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  console.log("pathname", pathName);

  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`${isActive ? "bg-gray-800 text-white p-2 rounded-lg" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
