import React, { useEffect, useState } from "react";

const Post = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setTitle(res));
  }, []);
  console.log(title);

  return (
    <div>
      <h1>Displaying post title</h1>
      {title && title.length > 0 ? title.map((e, i) => {
        return(
            <p key={e.id}>{e.title}</p>
        )
      }):""}
    </div>
  );
};

export default Post;
