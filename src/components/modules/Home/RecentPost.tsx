import React from "react";
import ProductCard from "./Cards";
import { getRecentPost } from "@/src/services/RecentPost";
import { TPost } from "@/src/types";

const RecentPost = async () => {
  const { data: posts } = await getRecentPost();

  return (
    <div className="pb-10">
      <h3 className="text-center text-3xl font-semibold py-10">
        Recently Found Items
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        {posts.map((post: TPost) => (
          <ProductCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
