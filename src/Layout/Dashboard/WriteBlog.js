import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogs } from "../../Redux/Thunk/loadBlogs";
import { uploadBlog } from "../../Redux/Thunk/uploadBlog";

const WriteBlog = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBlogs());
  }, []);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const blog = {
      title: data.title,
      content: data.blogContent,
      picture: data.pictureLink,
      category: data.blogCategory,
      blog_no: blogs.length + 1,
      author_name: "",
      author_img: "",
      author_email: "",
      created_date:new Date(),
    };
    dispatch(uploadBlog(blog));
  };

  return (
    <div>
      <form action="" className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="blog-title"
            className="block text-sm text-gray-500 dark:text-gray-300 my-3"
          >
            Blog Title
          </label>
          <input
            {...register("title")}
            placeholder="Write your blog title?"
            type="text"
            name="title"
            id=""
            className="border border-gray-300 w-full rounded-sm px-4 py-1"
          />
        </div>
        <div>
          <label
            htmlFor="blog-content"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Blog Content
          </label>

          <textarea
            {...register("blogContent")}
            placeholder="Write what is on your mind...."
            className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="blog-img"
            className="block text-sm text-gray-500 dark:text-gray-300 my-3"
          >
            Blog Picture
          </label>
          <input
            {...register("pictureLink")}
            placeholder="Write your blog picture link."
            type="text"
            name="pictureLink"
            id=""
            className="border border-gray-300 w-full rounded-sm px-4 py-1"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-sm text-gray-500 dark:text-gray-300 my-3"
          >
            Blog Category
          </label>
          <input
            {...register("blogCategory")}
            placeholder="Write your blog category."
            type="text"
            name="blogCategory"
            id=""
            className="border border-gray-300 w-full rounded-sm px-4 py-1"
          />
        </div>
        <button
          type="submit"
          className=" mt-10 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
