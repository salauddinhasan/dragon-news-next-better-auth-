import Link from "next/link";
import React from "react";

const LeftSide = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4 text-gray-800">
        All Categories
      </h2>

      <div className="flex flex-col gap-2">
        {categories.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`btn text-left justify-start px-8 py-4 border-none transition-all ${
              activeId === category.category_id
                ? "bg-gray-300 text-gray-900 font-bold"
                : "bg-transparent text-gray-500 font-medium hover:bg-gray-100"
            }`}
          >
            <Link
             href={`/category/${category.category_id}`}
             className="block p-2">
              {category.category_name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
