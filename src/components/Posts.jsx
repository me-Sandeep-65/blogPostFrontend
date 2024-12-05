import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import axios from "axios";
import PostCard from "../components/PostCard";
import DropdownButton from "./DropDownButton";
import NoPost from "./NoPost";


function Posts() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseurl = import.meta.env.VITE_BASE_URL;
    const defaultImage = import.meta.env.VITE_DEFAULT_IMAGE;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/posts`, {withCredentials: true})
        .then(response => {
            setPosts(response.data);
            setLoading(false)
        })
        .catch(error => {
            console.error(error);
            setLoading(false)
        })

    }, [setPosts])

    return(<>
        <div className="w-full px-8 flex justify-between items-center bg-gray-100 dark:bg-zinc-800">
            <CreatePost />
            <div className="my-3 text-xl font-bold">Explore</div>
            <a href="/"><i className="las la-redo-alt rounded-md px-1 text-indigo-600 font-extrabold text-3xl hover:bg-gray-100 dark:hover:bg-gray-700"></i></a>
        </div>
        <div className="w-full h-full p-2 flex flex-wrap items-start justify-center overflow-auto">
        {loading ? <div>Loading...</div> : posts && posts.length !== 0 ? posts.map(post => {
            return (<PostCard key={post._id} Post={post} PostActionButton={[DropdownButton]} />)})
        : <NoPost />}
            {/* <CardContainer tailwindClasses="rounded-md border py-3 m-3 w-80 h-80 bg-white dark:bg-gray-800 flex flex-col items-center justify-between">
                <div className="h-1/5 w-full px-4 flex justify-start items-center border-b">
                    <img className="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile" />
                    <h1 className="text-xl w-full px-3 overflow-hidden whitespace-nowrap text-ellipsis">Name</h1>
                    <DropdownButton />
                </div>
                <div className="h-3/5 w-full px-4">
                    <h1 className="text-xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap">Lorem ipsum dolor sit kgjfuyfjbkjg jgjg jhgjg jhjhgjh </h1>
                    <p className="line-clamp-6 text-ellipsis overflow-hidden text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua ,mnkknkjknknkjbkjbknkj k kjh h kjhke a, tenetur doloribus perferendis facere, possimus modi enim animi aliquid non excepturi deleniti porro odio pariatur dignissimos vel beatae quidem ipsum?
                    </p>
                </div>
            </CardContainer> */}
        </div>
    </>);
}

export default Posts;
