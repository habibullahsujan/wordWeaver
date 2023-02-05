import {
  BLOG_DETAILS,
  DELETE_BLOG,
  LOAD_BLOGS,
  READING_HISTORY,
  UPDATE_BLOG,
  UPLOAD_BLOG,
} from "../ActionTypes/actionTypes";

const initialState = {
  blogs: [],
  readingHistory: [],
  blogDetails: {},
  editBlog: {},
};

export const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case BLOG_DETAILS:
      return {
        ...state,
        blogDetails: state.blogs.find((blog) => blog._id === action.payload),
      };
    case UPLOAD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_BLOG:
      return {
        ...state,
        editBlog: action.payload,
      };
    case READING_HISTORY:
      const checkExist = state.readingHistory.find(
        (blog) => blog._id === action.payload
      );
      if (checkExist) {
        return state;
      }
      return {
        ...state,
        readingHistory: [
          ...state.readingHistory,
          state.blogs.find((blog) => blog._id === action.payload),
        ],
      };

    default:
      return state;
  }
};
