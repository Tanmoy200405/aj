import React from "react";
import Hero from "../components/Hero";
import Careers from "../components/Careers";
import DecisionTree from "../components/DecisionTree";
import Quiz from "../components/Quiz";
import Footer from "../components/Footer";

const Explore = () => {
  return (
    <div className="bg-[var(--ivory)] min-h-screen text-[var(--ink)] selection:bg-[var(--coral)] selection:text-white overflow-x-hidden">
      <Hero />
      <Careers />
      <DecisionTree />
      <Quiz />
      <Footer />
    </div>
  );
};

export default Explore;
