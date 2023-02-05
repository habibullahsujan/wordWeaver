import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBlogs } from "../Redux/Thunk/loadBlogs";

import BlogCard from "./BlogCard";
import Filter from "./Filter";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const { sort_type } = useSelector((state) => state.sort);

  function sortByFirstUpload(a, b) {
    let dateA = new Date(a.created_date).getTime();
    let dateB = new Date(b.created_date).getTime();
    return dateA > dateB ? 1 : -1;
  }
  function sortByLastUpload(a, b) {
    let dateA = new Date(a.created_date).getTime();
    let dateB = new Date(b.created_date).getTime();
    return dateA > dateB ? -1 : 1;
  }
  let content;
  useEffect(() => {
    dispatch(loadBlogs());
  }, []);
  if (sort_type === "sortByFirstUpload") {
    content = blogs
      .sort(sortByFirstUpload)
      .map((blog) => <BlogCard blog={blog} key={blog._id} />);
  }
  if (sort_type === "sortByLastUpload") {
    content = blogs
      .sort(sortByLastUpload)
      .map((blog) => <BlogCard blog={blog} key={blog._id} />);
  }
  if (blogs && blogs.length) {
    content = blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />);
  }

  return (
    <div>
      <Filter />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {content}
      </div>
    </div>
  );
};

export default Home;
