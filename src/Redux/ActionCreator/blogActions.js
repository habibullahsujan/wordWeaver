import { BLOG_DETAILS, DELETE_BLOG, LOAD_BLOGS, READING_HISTORY, UPDATE_BLOG, UPLOAD_BLOG } from "../ActionTypes/actionTypes";

export const loadBlogData = (data) => {
    return {
      type: LOAD_BLOGS,
      payload: data,
    };
  };

  export const blogDetails=(id)=>{
    return {
      type:BLOG_DETAILS,
      payload:id,
    }
  }

  export const uploadBlogData=(data)=>{
    return{
      type:UPLOAD_BLOG,
      payload:data
    }
  }

  export const deleteBlogData=(id)=>{
    return {
      type:DELETE_BLOG,
      payload:id
    }
  }
  export const updateBlogData=(id)=>{
    return {
      type:UPDATE_BLOG,
      payload:id
    }
  }

  export const readingHistoryAction=(id)=>{
    return{
      type:READING_HISTORY,
      payload:id
    }
  }