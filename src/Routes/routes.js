import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../Components/BlogDetails";
import Home from "../Components/Home";
import ReadingHistory from "../Components/ReadingHistory";
import BlogList from "../Layout/Dashboard/BlogList";
import Dashboard from "../Layout/Dashboard/Dashboard";
import EditBlog from "../Layout/Dashboard/EditBlog";
import WriteBlog from "../Layout/Dashboard/WriteBlog";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/reading-history", element: <ReadingHistory /> },
      { path: "/blog/:id", element: <BlogDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard", element: <BlogList /> },
      { path: "/dashboard/write-blog", element: <WriteBlog /> },
      {path:'/dashboard/edit-blog', element:<EditBlog/>}
    ],
  },
]);
