import { useDispatch } from "react-redux";
import { addToBlogList, handleEntryOfData } from "../../store/slices/Blog";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleChange(event) {
    dispatch(
      handleEntryOfData({
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addToBlogList());
    navigate("/blogs");
  }
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        rowGap: 12,
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <label>Enter Title</label>
      <input type="text" name="title" onChange={handleChange} />
      <label>Enter Description</label>
      <input type="text" name="description" onChange={handleChange} />
      <button type="text" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddBlog;
