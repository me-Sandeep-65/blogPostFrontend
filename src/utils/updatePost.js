
export const updatePost = (prevState, postId, content) => {
    return{
      ...prevState,
      posts: prevState.posts.map(post => post.id === postId ? { ...post, content:content, title:"" } : post )
    }
  };
  