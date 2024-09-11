import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
            type="text"
            placeholder="Search..."
            labelPlacement="outside"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0" />
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
