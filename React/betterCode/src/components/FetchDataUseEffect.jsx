import { useEffect, useState } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const post5 = posts.length > 5 ? posts.slice(0, 5) : posts;

  useEffect(() => {
    let isCancelled = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        if (!isCancelled) {
          setPosts(data);
          // console.log(data);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      <h3>Fetch data</h3>
      {post5 && post5.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default FetchData;
