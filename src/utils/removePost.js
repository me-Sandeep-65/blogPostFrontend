// utils/removeUser.js

export const removePost = (prevState, postId) => {
    return {
      ...prevState,
      posts: prevState.posts.filter(post => post._id !== postId)
    };
  };
  