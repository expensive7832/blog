import Axios from "../axios";
import request from "../request";
import { useEffect } from "react/cjs/react.development";
import { useStatevalue } from "../Redux/context";
import { Link } from "react-router-dom";

const Posts = () => {
  const [{ blogData }, dispatch] = useStatevalue();

const gen = request?.general

  useEffect(() => {
    const FetchNews = async () => {
      await Axios.get(gen).then(({ data }) =>
      (
        dispatch({
        type: "SET_BLOGDATA",
        payload: data?.articles,
      })
      ) 
      );
    };

    FetchNews();
  }, [gen]);
  
  return (
    <div className="post_list text-center">
      {blogData?.map((post, index) => (
          <p key={index}><Link to={`/article/${index}`}>{post.title}</Link></p>
      ))}
    </div>
  );
};

export default Posts;
