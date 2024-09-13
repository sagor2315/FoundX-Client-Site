import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { format } from "date-fns";
import { TPost } from "@/src/types";

export default function ProductCard({ post }: { post: TPost }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-row justify-between">
        <div className="">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">{post?.title}</h4>
        </div>
        <div className="py-2 px-3.5 rounded-full bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <h4 className="font-bold text-large">
            {post?.category?.name || "Others"}
          </h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={post?.images[0]}
          width={270}
          height={270}
        />
      </CardBody>
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <h3>{format(new Date(post?.dateFound), "dd, mm, yyyy")}</h3>
      </CardFooter>
    </Card>
  );
}
