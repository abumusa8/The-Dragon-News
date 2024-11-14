import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/Laout-components/LeftNavbar";
import RightNav from "../components/Laout-components/RightNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <section className="w-11/12 mx-auto ">
        <LatestNews></LatestNews>
      </section>
      <section className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </section>

{/* //this is main content here.... */}

      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-2">
     
       <aside className=" left col-span-3">
        <LeftNavbar></LeftNavbar>
       </aside>
       <section className="col-span-6"><Outlet></Outlet></section>
       <aside className=" right col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
