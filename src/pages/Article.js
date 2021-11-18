import Nav from "../components/Nav";
import Custom from "../components/customHero";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import { useStatevalue } from "../Redux/context";


const Redirect = () =>{
  window.location.href = "/";
}

const FetchData = () =>{
  let data = localStorage.getItem("dataById");

  if(data){
    return JSON.parse(localStorage.getItem("dataById"));
  }else{
    return {}
  }
}


const Article = () => {
  const [{ blogData }, dispatch] = useStatevalue();
 
    const {id } = useParams();

    const [singleData, setSingleData] = useState(FetchData());
 
  useEffect(() =>{
  
    localStorage.setItem("dataById", JSON.stringify(blogData[id]))
  }, [singleData]);

    
 
  return(
    <section className="article">
     
          {
            blogData[id] !== null && 
            <div>
              <Nav />
          <Custom />
          <Post data={singleData}/>
            </div>
          }
      
    </section>
  );
};

export default Article;
