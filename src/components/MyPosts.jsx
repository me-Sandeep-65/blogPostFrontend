import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import NoPost from "./NoPost";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userProfile from "../store/selectors/userProfile";
import DeletePost from "../components/DeletePost";
import axios from "axios";
import PostCard from "./PostCard";
import PostListSelector from "../store/selectors/postListSelector";


function MyPosts() {
    const userState = useRecoilValue(userProfile);
    const listState = useRecoilValue(PostListSelector);
    const setListState = useSetRecoilState(PostListSelector);
    const baseurl = import.meta.env.VITE_BASE_URL;
    const defaultImage = import.meta.env.VITE_DEFAULT_IMAGE;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/my-posts`, {withCredentials: true})
        .then(response => {
            setListState({
                loading: false,
                posts: response.data || [],
            });
        })
        .catch(error => {
            setListState({
                loading: false,
                posts: [],
            });
        })

    }, [setListState])

    return(<>
        <div className="w-full px-8 flex justify-between items-center bg-gray-100 dark:bg-zinc-800">
            <CreatePost />
            <div className="my-3 text-xl font-bold">My Posts</div>
            <a href="/my-posts"><i className="las la-redo-alt rounded-md p-1 text-indigo-600 font-extrabold text-3xl hover:bg-gray-100 dark:hover:bg-gray-700"></i></a>
        </div>
        {!userState.userProfile ? <NoPost /> :
        (<div className="w-full h-full p-2 flex flex-wrap items-start justify-center overflow-auto">
            {listState.loading ? <div>Loading...</div> : listState.posts !== 0 ? listState.posts.map(post => {
            return (<PostCard key={post._id} Post={post} PostActionButton={[DeletePost]} />)})
            : <NoPost />}

        </div>)}
    </>);
}

export default MyPosts;