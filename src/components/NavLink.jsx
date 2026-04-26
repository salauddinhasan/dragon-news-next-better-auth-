"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`${isActive ? "bg-gray-800 text-white p-2 rounded-lg" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
