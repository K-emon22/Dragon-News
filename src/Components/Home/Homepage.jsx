import React from "react";
import Header from "../Header/Header";
import {Outlet} from "react-router";
import NavBar from "../NavBar/NavBar";
import LeftASide from "../Aside/LeftASide";
import RightAside from "../Aside/RightAside";

const Homepage = () => {
  return (
    <div className="mx-[5%]">
      <header>
        <Header></Header>
      </header>
      <nav className="mb-10">
        <NavBar></NavBar>
      </nav>
      <main className=" grid grid-cols-4 gap-5 ">
        <aside className="border">
          <LeftASide></LeftASide>
        </aside>
        <section className="col-span-2 mx-auto border">
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
