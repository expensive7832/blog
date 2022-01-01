import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useStatevalue } from "../Redux/context";
import "./post.css";


const Redirect = () =>{
    window.location.href = "/";
}


const Post = ({data}) => {

 console.log(data)

  return (
    <article className="post">
     
          <div className="d-flex justify-content-between my-1">
            <p className="lead bg-primary p-2 text-light fw-bold">
              By&nbsp;{data?.author ? data?.author : "Anonymous"}
            </p>
            <p className="ps-2 lead">{new Date(data?.publishedAt).toDateString()}</p>
          </div>
          <div className="content"> 
          <>
            {data?.urlToImage &&
            <img src={data?.urlToImage} alt={data?.title} className="img" />
          }
            </>
          <h6 className="text-justify px-1 mt-2">{data?.description} &nbsp; &nbsp; {data?.url && <a href={data?.url}>...read more</a>}</h6>
          </div>
       
    </article>
  );
};

export default Post;
