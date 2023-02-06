import { loadBlogData } from "../ActionCreator/blogActions";

export const loadBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://wordweaver-server.vercel.app/blogs");
    const data = await res.json()

    if (data.data.length) {
      dispatch(loadBlogData(data.data));
    }
  };
};
