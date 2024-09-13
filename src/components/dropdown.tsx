"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DropsownItems() {
  const [Item, setitem] = useState<string>("");
  const router = useRouter();
  const handleDropdownItems = (props: string) => {
    setitem(props);
    router.push(props);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          className="cursor-pointer"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleDropdownItems("/profile")}
          key="Profile"
          className={`${Item === "/profile" ? "text-yellow-400" : " "}`}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDropdownItems("/profile/about")}
          key="About"
          className={`${Item === "/profile/about" ? "text-yellow-400" : " "}`}
        >
          About
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDropdownItems("/profile/claim-request")}
          key="Claim Request"
          className={`${
            Item === "/profile/claim-request" ? "text-yellow-400" : " "
          }`}
        >
          Claim Request
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDropdownItems("/profile/create-post")}
          key="Create Post"
          className={`${
            Item === "/profile/create-post" ? "text-yellow-400" : " "
          }`}
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          onClick={() => handleDropdownItems("/profile/setting")}
          key="Setting"
          className={`${Item === "/profile/setting" ? "text-yellow-400" : " "}`}
        >
          Setting
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
