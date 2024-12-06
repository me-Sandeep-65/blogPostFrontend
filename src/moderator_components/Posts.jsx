import React, { useEffect } from "react";
import CreatePost from "../components/CreatePost";
import NoPost from "../components/NoPost";
import { useRecoilValue, useSetRecoilState } from "recoil";
import DeletePost from "./DeletePost";
import axios from "axios";
import PostCard from "../components/PostCard";
import BlockUser from "./BlockUser";
import PostListSelector from "../store/selectors/postListSelector";


function Posts() {
    const listState = useRecoilValue(PostListSelector);
    const setListState = useSetRecoilState(PostListSelector);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/posts`, {withCredentials: true})
        .then(response => {
            setListState({
                loading: false,
                posts: response.data,
            });
        })
        .catch(error => {
            setListState({
                loading: false,
                posts: [],
            })
        })
    }, [setListState])

    return(<>
        <div className="w-full px-8 flex justify-between items-center bg-gray-100 dark:bg-zinc-800">
            <CreatePost />
            <div className="my-3 text-xl font-bold">Explore</div>
            <a href="/"><i className="las la-redo-alt rounded-md p-1 text-indigo-600 font-extrabold text-3xl hover:bg-gray-100 dark:hover:bg-gray-700"></i></a>
        </div>
        <div className="w-full h-full p-2 flex flex-wrap items-start justify-center overflow-auto">
            {listState.loading ? <div>Loading...</div> : listState.posts.length !== 0 ? listState.posts.map(post => {
            return (<PostCard key={post._id} Post={post} PostActionButton={[BlockUser, DeletePost]} />)})
            : <NoPost />}

        </div>
    </>);
}

export default Posts;