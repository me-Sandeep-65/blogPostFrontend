import { atom } from "recoil";

const PostListState = atom({
    key: 'PostListState',
    default: {
        loading: true,
        posts: null
    },
});

export default PostListState;
