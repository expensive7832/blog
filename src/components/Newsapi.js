import { useEffect, useState } from "react";
import axios from "../axios";
import request from "../request";

const Newsapi = () => {
const [fetchNews, setfetchNews] = useState([]);
   useEffect(() =>{
    const fetchNews = async() =>{
        const res = await axios.get(request.general);
        const data = res.data.articles;
        setfetchNews(data.map((post) =>(
            post
        )))
    }

    fetchNews();

   },[request.general])

   console.log(fetchNews);

  

    return (
        <div className="newsfetch"> 
           
        </div>
    )
}

export default Newsapi
