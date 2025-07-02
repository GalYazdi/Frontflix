import React from "react";
import { Navbar } from "../../components/Navbar";
import { TopMovie } from "./TopMovie";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "1px" }} />

      <TopMovie />
    </>
  );
};
