import { selector } from "recoil";
import PostListState from "../atoms/posts";
import { addPost } from '../../utils/addPost';
import  {replaceUserList}  from '../../utils/replaceUserList';
import { removePost } from '../../utils/removePost';
import { updatePost } from "../../utils/updatePost";

const PostListSelector = selector({
    key: 'PostListStateSelector',
    get: ({get}) => {
        const listAtom = get(PostListState);

        return listAtom;
    },

    set: ({ set, get }, update) => {
        const currentState = get(PostListState); // Get current state
    
        if (update && update.post) {
          // Use addPost function to add a new post
          set(PostListState, addPost(currentState, update.post));
        } else if (update && update.list) {
          // Use replacePostList function to replace the entire list
          set(PostListState, replaceUserList(currentState, update.list));
        } else if (update && update.removeId) {
            // Use removePost function to remove a remove by id
            set(PostListState, removePost(currentState, update.removeId));
        } else if(update && update.content){
            //use updatePost fuction to update the content of a post by id
            set(PostListSelector, updatePost(currentState, update.content.postId, update.content.content));
        } else {
          // Other cases where you set the full state
          set(PostListState, update);
        }
      },
});

export default PostListSelector;