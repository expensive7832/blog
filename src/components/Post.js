import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useStatevalue } from "../Redux/context";


const Redirect = () =>{
    window.location.href = "/";
}

const FetchData = () =>{
   let data = localStorage.getItem("Data");

   if(data){
     return JSON.parse(localStorage.getItem("Data"));
   }else{
     return {}
   }
}



const Post = ({data}) => {

  const [article, setarticle] = useState(FetchData());
 
  useEffect(() =>{
  
    localStorage.setItem("Data", JSON.stringify(data))
  }, [article]);

console.log(article);


  return (
    <article className="post">
      {article !== null  ? (
        <div>
          <div className="d-flex justify-content-between my-1">
            <p className="lead bg-primary p-2 text-light fw-bold">
              By&nbsp;{article?.author ? article?.author : "Anonymous"}
            </p>
            <p className="lead">{new Date(article?.publishedAt).toUTCString()}</p>
          </div>
          <div className="d-flex justify-content-between">
            <img src={article?.urlToImage} alt={article?.title} />
            <h6 className="text-justify px-1 mt-2">{article?.description}</h6>
          </div>
        </div>
      ) : (
        <Redirect/>
      )}
    </article>
  );
};

export default Post;
