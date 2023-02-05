import React from "react";
import { useSelector } from "react-redux";
import ReadingHistoryCard from "./ReadingHistoryCard";

const ReadingHistory = () => {
  const readingHistory = useSelector((state) => state.blogs.readingHistory);
  return (
    <div className="grid grid-cols-2 w-[90%] mx-auto gap-5">
      {readingHistory.map((blog) => (
        <ReadingHistoryCard blog={blog} />
      ))}
    </div>
  );
};

export default ReadingHistory;
