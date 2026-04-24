import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className=" h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>

      <p className="mt-2 text-lg text-gray-600">This Page not found</p>

      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-black text-white rounded-md text-sm"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
