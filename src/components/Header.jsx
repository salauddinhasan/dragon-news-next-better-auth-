import { format } from "date-fns";
import React from "react";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <nav className="w-full border-b bg-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center py-4 space-y-2">
          {/* Logo */}
          <Image src={Logo} alt="Logo" width={300} style={{ height: 'auto', width: 'auto' }} priority />

          {/* Tagline */}
          <p className="text-sm text-gray-600">
            Journalism Without Fear or Favour
          </p>

          {/* Date */}
          <p className="text-xs text-gray-500">
            {format(new Date(), "EEEE, MMM dd, yyyy")}
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
