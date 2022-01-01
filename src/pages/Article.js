import Nav from "../components/Nav";
import Custom from "../components/customHero";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import { useStatevalue } from "../Redux/context";
import axios from "./../axios";
import request from "./../request";

const Redirect = () => {
  window.location.href = "/";
};

const FetchId = () => {
  let data = localStorage.getItem("Id");

  if (data) {
    const res = localStorage.getItem("Id");
    return res.slice(1, 2); // coverting ls string data to number
  } else {
    return "";
  }
};
const FetchData = () => {
  let data = localStorage.getItem("data");

  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const Article = () => {
  const { id } = useParams();

  const [ls, setLs] = useState(FetchId()); // ls - localstorage data
  const [singleData, setSingleData] = useState({});

 

  useEffect(() => {
    localStorage.setItem("Id", JSON.stringify(id));
  }, [id]);

  console.log(singleData);

  useEffect(() => {
    const fetchNews = async () => {
      await axios.get(request?.general)
        .then(({data}) => setSingleData(data?.articles[id]));
    };

    fetchNews();
  }, [ls]);

  return (
    <section className="article">
      <Nav />
      <Custom />
      <Post data={singleData} />
    </section>
  );
};

export default Article;
