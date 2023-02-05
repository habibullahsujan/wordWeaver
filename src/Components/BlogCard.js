import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { blogDetails } from "../Redux/ActionCreator/blogActions";

const BlogCard = ({ blog }) => {
  const dispatch=useDispatch();
  return (
    <div className="my-10 bg-white">
      <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border border-sky-700">
        <img
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={blog.picture}
          alt=""
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold">{blog.title.slice(0,30)}....</h3>
          <span className="text-xs dark:text-gray-400">{blog.created_date}</span>
          <p>{blog.content.slice(0, 100)}....</p>
          <div className="mt-5">
            <Link
            onClick={()=>dispatch(blogDetails(blog._id))}
              to={`/blog/${blog._id}`}
              className="bg-sky-600 text-white px-2 py-1 cursor-pointer"
            >
              See Full Content...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
