
import "./components/style.css";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import AOS from "aos";
import notFound from "./pages/NotFound";
import Article from "./pages/Article";
import Politics from "./pages/Politics";
import Addnews from "./components/Addnews";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";


function App() {

  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
       
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/article/:id" element={<Article/>} />
        <Route path="/politics" element={<Politics/>} />
        <Route path="/submitArticle" path="/submitArticle" element={<Addnews/>} />
        <Route path="*" element={notFound} />
       
  </Routes> 
    </BrowserRouter>
  );
}

export default App;
