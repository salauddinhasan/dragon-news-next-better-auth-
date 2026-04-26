import React from "react";

import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-2xl text-gray-800">News by category</h2>

      {news.length > 0 ? (
        news.map((n, id) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-gray-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <div className="flex items-center gap-3">
                <figure>
                  <Image
                    src={n.author?.img}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </figure>
                <div>
                  <h3 className="font-semibold text-sm">
                    {n.author?.name || "Unknown"}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {n.author?.published_date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-500 text-lg">
                <FaRegBookmark className="cursor-pointer hover:text-black" />
                <IoShareSocialOutline className="cursor-pointer hover:text-black" />
              </div>
            </div>

            {/* Title */}
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold leading-snug">
                {n.title}
              </h2>
            </div>

            {/* Image */}
            <div className="w-full aspect-[16/9] relative">
              <Image
                src={n.image_url}
                alt="news"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <p className="text-sm text-gray-600 line-clamp-3">{n.details}</p>

              <Link
                href={`/news/${n._id}`}
                className="btn text-orange-500 font-medium hover:underline"
              >
                Read More →
              </Link>

              <hr />

              {/* Footer */}
              <div className="flex items-center justify-between text-sm pt-2">
                <div className="flex items-center gap-1 text-orange-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-600 font-medium ml-2">
                    {n.rating?.number}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                  <IoMdEye />
                  <span>{n.total_view}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-3xl text-center text-gray-500">No Data Found</h2>
      )}
    </div>
  );
};

export default NewsCard;
