import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: "1",
    title:
      "Israeli PM Benjamin Netanyahu Reveals Recent Treatment for Early-Stage Prostate Cancer",
  },
  {
    id: "2",
    title:
      "Iran Foreign Minister Arrives in Pakistan for High-Stakes Peace Talks with US Envoys",
  },
  {
    id: "3",
    title:
      "Indonesia Offers 116 New Oil and Gas Blocks to Global Investors to Boost Production",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex items-center gap-2 container mx-auto px-2 bg-gray-200 rounded-lg py-2 mt-2">
      <button className="btn bg-pink-700 hover:bg-pink-800 text-white border-none">
        Latest
      </button>

      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n) => (
          <div key={n.id} className="flex items-center">
            <p className="mr-10 font-medium text-gray-800">{n.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
