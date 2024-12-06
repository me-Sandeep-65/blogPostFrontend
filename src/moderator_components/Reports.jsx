import React, { useEffect, useState } from "react";
import NoPost from "../components/NoPost";
import DeletePost from "./DeletePost";
import axios from "axios";
import PostCard from "../components/PostCard";
import BlockUser from "./BlockUser";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PostListSelector from "../store/selectors/postListSelector";
import Unreport from "./Unreport";


function Reports() {
    const listState = useRecoilValue(PostListSelector);
    const setListState = useSetRecoilState(PostListSelector);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/moderator/reported-posts`, {withCredentials: true})
        .then(response => {
            setListState({
                loading:false,
                posts: response.data,
            })

        })
        .catch(error => {
            setListState({
                loading: false,
                posts: [],
            })
        })


    }, [setListState])

    return(<>
        <div className="w-full px-8 flex justify-center items-center bg-gray-100 dark:bg-zinc-800">
            <div className="my-3 text-xl font-bold">Reported Posts</div>
        </div>
        <div className="w-full h-full p-2 flex flex-wrap items-start justify-center overflow-auto">
            {listState.loading ? <div>Loading...</div> : listState.posts.length !== 0 ? listState.posts.map(post => {
            return (<PostCard key={post._id} Post={post} PostActionButton={[Unreport]} PostBottomButton={[BlockUser, DeletePost]} height={'h-96'} />)})
            : <NoPost />}

        </div>
    </>);
}

export default Reports;