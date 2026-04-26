import { getNewsDetailsId } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const [news ]= await getNewsDetailsId(id);
  return {
    title: news?.title,
    description: news?.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const [news] = await getNewsDetailsId(id);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="font-semibold text-2xl text-gray-800">Dragon News</h2>

      <div className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <figure>
            <Image
              src={news.author?.img}
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </figure>
          <div>
            <h3 className="font-semibold text-sm">
              {news.author?.name || "Unknown"}
            </h3>
            <p className="text-xs text-gray-500">
              {news.author?.published_date}
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
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <div className="w-full aspect-[16/9] relative">
        <Image
          src={news.image_url}
          alt="news"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-600">{news.details}</p>

        <Link
          href={`/category/${news.category_id}`}
          className="btn bg-pink-600 text-white font-medium hover:underline"
        >
          All news in this category →
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
