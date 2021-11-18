import { useState } from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Addnews = () => {
  const newssubmit = (e) => {
    e.preventDefault();

    if (Title === "") {
      alert("Enter Title");
    } else if (Article === "") {
      alert("Enter Article");
    } else {
      const collectionRef = collection(db, "Articles");
      const payload = {
        article: Article,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        title: Title
      };
      addDoc(collectionRef, payload);

      setTitle("");
      setArticle("");

    }
  };

  const [Title, setTitle] = useState("");
  const [Article, setArticle] = useState("");

  return (
    <div className="container w-75 position-absolute translate-middle top-50 start-50">
      <fieldset>
        <legend> Submit Post</legend>
        <form onSubmit={newssubmit}>
          <div class="mb-3">
            <label Htmlfor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div class="form-floating">
            <textarea
              className="form-control"
              placeholder="Enter Post"
              id="floatingTextarea2"
              value={Article}
              onChange={(e) => setArticle(e.target.value)}
            ></textarea>
            <label Htmlfor="floatingTextarea2">Article</label>
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Submit Post
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Addnews;
