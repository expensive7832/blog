import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Outlist from "../components/Outlist";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useStatevalue } from "../Redux/context";

const Home = () => {
  const [{ user }, dispatch] = useStatevalue();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <Nav />
          <Hero />
          
          <Outlist />
          <Footer />
      
        </>
      )}
    </>
  );
};

export default Home;
