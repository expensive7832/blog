import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useStatevalue } from "../Redux/context";


const Redirect = () =>{
    window.location.href = "/";
}


const Post = ({data}) => {

 console.log(data)

  return (
    <article className="post">
     
          <div className="d-flex justify-content-between my-1">
            <p className="lead bg-primary p-2 text-light fw-bold">
              By&nbsp;{data?.creator ? data?.creator : "Anonymous"}
            </p>
            <p className="lead">{new Date(data?.pubDate).toDateString()}</p>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <h6 className="text-justify px-1 mt-2">{data?.description} &nbsp; &nbsp; {data?.link && <a href={data?.link}>...read more</a>}</h6> 
            {data?.urlToImage &&
            <img src={data?.urlToImage} alt={data?.title} style={{width: "100%"}} />
          }
          </div>
       
    </article>
  );
};

export default Post;
