import Sidebar from "@/src/components/user/profile/sidebar";
import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
