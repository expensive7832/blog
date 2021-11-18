import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import AOS from "aos";
import notFound from "./pages/notFound";
import Article from "./pages/Article";
import Politics from "./pages/Politics";
import Posts from "./components/Posts";
import Addnews from "./components/Addnews";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStatevalue } from "./Redux/context";
import Login from "./components/Login";


function App() {
  const [{ user }, dispatch] = useStatevalue();

  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/article/:id" element={<Article/>} />
        <Route path="/politics" element={<Politics/>} />
        <Route path="/submitArticle" element={<Addnews/>} />
        <Route element={notFound} />
      </Routes>
    </Router>
  );
}

export default App;
