export const updateBlog = (blog, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if(data.matchedCount>0){
        
    }
  };
};
