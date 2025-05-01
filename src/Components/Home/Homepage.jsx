import React from "react";
import Header from "../Header/Header";
import {Outlet} from "react-router";
import NavBar from "../NavBar/NavBar";
import LeftASide from "../Aside/LeftASide";
import RightAside from "../Aside/RightAside";

const Homepage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="mx-[5%]">
      <header className="">
        <Header></Header>
      </header>
      <nav className="mb-10 sticky top-0 bg-white">
        <NavBar></NavBar>
      </nav>
      <main className=" grid grid-cols-4 gap-5 ">
        <aside className="border-2 mt-4 h-fit">
          <LeftASide></LeftASide>
        </aside>
        <section className="col-span-2 mx-auto ">
          <Outlet></Outlet>
        </section>
        <aside className="">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Homepage;
