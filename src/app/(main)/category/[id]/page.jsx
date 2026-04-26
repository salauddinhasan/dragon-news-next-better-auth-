import LeftSide from "@/components/homepages/LeftSide";
import NewsCard from "@/components/homepages/NewsCard";
import RightSide from "@/components/homepages/RightSide";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();

  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 w-full">
          <LeftSide categories={categories} activeId={id} />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 w-full min-w-0">
          <NewsCard news={news} />
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 w-full">
          <RightSide />
        </aside>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
