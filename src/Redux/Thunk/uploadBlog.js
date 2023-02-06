import { uploadBlogData } from "../ActionCreator/blogActions";

export const uploadBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://wordweaver-server.vercel.app/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(uploadBlogData({ _id: data.insertedId, ...blog }));
    }
  };
};
