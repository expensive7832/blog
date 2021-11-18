import axios from "../axios";
import request from "../request";
import { useEffect } from "react/cjs/react.development";
import { useStatevalue } from "../Redux/context";
import { Link } from "react-router-dom";

const Posts = () => {
  const [{ blogData }, dispatch] = useStatevalue();

  useEffect(() => {
    const fetchNews = async () => {
      await axios.get(request.general).then((response) =>
        dispatch({
          type: "SET_BLOGDATA",
          payload: response.data.articles,
        })
      );
    };

    fetchNews();
  }, []);

  return (
    <div className="post_list text-center">
      {blogData?.map((post, index) => (
          <p key={index}><Link to={`/article/${index}`}>{post.title}</Link></p>
      ))}
    </div>
  );
};

export default Posts;
