import { Navbar } from "@/src/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;

/* 

*** Group route korte hole first bracket use korte hoi ()
*** GRoup route routing er khetre kaj kore na mane (testing) jodi dei then kaj korbe na /testing
even er vitore thaka kono route er age /testing add o kora lagbe na... Shuvidha hishebe vinno akta layout
create kore shekhane proyojoniyo routes and navbar footer rakha jai

*/
