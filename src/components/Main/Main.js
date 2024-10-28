import React from "react";
import About from "../About/About";
import Order from "../Order/Order";
import "./Main.css";

export default function Main({handleKeys}) {
  return (
    <main className="Main">
      <About></About>
      <Order></Order>
    </main>
  );
}