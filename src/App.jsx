import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AddBlog from "./Component/BlogApp/AddBlog";
import BlogList from "./Component/BlogApp/BlogList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBlogList } from "./store/slices/Blog";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(function () {
    const dataInstance = localStorage.getItem("blogData");
    const data = JSON.parse(dataInstance);
    dispatch(setBlogList({ data }));
    navigate("/blogs");
  }, []);

  return (
    <div>
      <h1>Welcome to Blog app</h1>
      <Routes>
        <Route path="/blogs" element={<BlogList />}></Route>
        <Route path="/add-blog" element={<AddBlog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
