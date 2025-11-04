import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const { Blog } = useSelector((state) => state.blog);
  const navigate = useNavigate();
  console.log(Blog);
  return (
    <div>
      {Blog.length === 0 && <h2>No Blogs Available</h2>}
      {Blog.length !== 0 &&
        Blog.map((value) => (
          <div
            key={crypto.randomUUID()}
            style={{
              borderRadius: "10px",
              border: "1px solid black",
              padding: "0.2rem 2rem",
              marginBottom: "1rem",
            }}
          >
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      <button onClick={() => navigate("/add-blog")}>Add Blog</button>
    </div>
  );
}

export default BlogList;
