// utils/addPost.js

export const addPost = (prevState, newPost) => {
    return {
      ...prevState,
      posts: [...prevState.posts, newPost]
    };
  };
  