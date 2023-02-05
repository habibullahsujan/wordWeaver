import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readingHistoryAction } from "../Redux/ActionCreator/blogActions";

const BlogDetails = () => {
  const blogDetails=useSelector(state=>state.blogs.blogDetails)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(readingHistoryAction(blogDetails._id))
  },[])
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={blogDetails.picture}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <p
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600"
             
            >
              {blogDetails.title}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {blogDetails.content}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabindex="0"
                  role="link"
                >
                  {blogDetails.author_name}
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {blogDetails.created_date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
