import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  Blog: [],
};

const blog = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleEntryOfData: function (state, action) {
      const copyData = { ...state.formData, ...action.payload };
      state.formData = copyData;
    },
    addToBlogList: function (state) {
      state.Blog.push({
        ...state.formData,
      });
      state.formData = {
        title: "",
        description: "",
      };
      localStorage.setItem("blogData", JSON.stringify(state.Blog));
    },
    setBlogList: function (state, action) {
      if (action.payload.data !== null) {
        state.Blog = action.payload.data;
      }
      console.log(state.Blog);
    },
  },
});
export const { handleEntryOfData, addToBlogList, setBlogList } = blog.actions;
export default blog.reducer;
