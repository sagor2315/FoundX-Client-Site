import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="border-r-2 h-screen pr-2">
        <h2 className="text-xl font-semibold text-yellow-400 pb-5">Sidebar</h2>

        <Link href="/profile">
          <div key="Profile">Profile</div>
        </Link>

        <Link href="/profile/about">
          <div key="About">About</div>
        </Link>

        <Link href="/profile/claim-request">
          <div key="Claim Request">Claim Request</div>
        </Link>

        <Link href="/profile/create-post">
          <div key="Create Post">Create Post</div>
        </Link>

        <Link href="/profile/setting">
          <div key="Setting" className="">
            Setting
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
