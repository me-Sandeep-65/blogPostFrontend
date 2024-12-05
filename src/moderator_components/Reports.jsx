import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import NoPost from "../components/NoPost";
import DeletePost from "./DeletePost";
import axios from "axios";
import PostCard from "../components/PostCard";
import BlockUser from "./BlockUser";


function Reports() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/moderator/reported-posts`, {withCredentials: true})
        .then(response => {
            setPosts(response.data);
            setLoading(false);

        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })


    }, [setPosts])

    return(<>
        <div className="w-full px-8 flex justify-between items-center bg-gray-100 dark:bg-zinc-800">
            <CreatePost />
            <div className="my-3 text-xl font-bold">Reported Posts</div>
            <a href="/reports"><i className="las la-redo-alt rounded-md p-1 text-indigo-600 font-extrabold text-3xl hover:bg-gray-100 dark:hover:bg-gray-700"></i></a>
        </div>
        <div className="w-full h-full p-2 flex flex-wrap items-start justify-center overflow-auto">
            {loading ? <div>Loading...</div> : posts && posts.length !== 0 ? posts.map(post => {
            return (<PostCard key={post._id} Post={post} PostActionButton={[Unreport]} PostBottomButton={[BlockUser, DeletePost]} height={'h-96'} />)})
            : <NoPost />}


            {/* <CardContainer tailwindClasses="rounded-md border py-3 m-3 w-80 h-80 bg-white dark:bg-gray-800 flex flex-col items-center justify-between">
                <div className="h-1/5 w-full px-4 flex justify-start items-center border-b">
                    <img className="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile" />
                    <h1 className="text-xl w-full px-3 overflow-hidden whitespace-nowrap text-ellipsis">Name</h1>
                    <DeletePost />
                    <BlockUser />
                </div>
                <div className="h-3/5 w-full px-4">
                    <h1 className="text-xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap">Lorem ipsum dolor sit kgjfuyfjbkjg jgjg jhgjg jhjhgjh </h1>
                    <p className="line-clamp-6 text-ellipsis overflow-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua ,mnkknkjknknkjbkjbknkj k kjh h kjhke a, tenetur doloribus perferendis facere, possimus modi enim animi aliquid non excepturi deleniti porro odio pariatur dignissimos vel beatae quidem ipsum?
                    </p>
                </div>
            </CardContainer> */}
        </div>
    </>);
}

function Unreport({userId, postId}) {
    const baseurl = import.meta.env.VITE_BASE_URL;
    const handleUnreport = () => {
        axios.post(`${baseurl}/api/v1/moderator/unreport-post`, {postId}, {withCredentials:true})
        .then(response => {
            if(response.data.status) alert("Post unreported.");
            else alert("Failed to unreport post.");
        })
        .catch(error => {
            alert("Failed to unreport post.");
        })
    }

  return (
    <button onClick={handleUnreport} className="rounded-full"><i className="lar la-check-circle rounded-full py-1 px-2 text-green-600 font-extrabold text-3xl dark:hover:bg-gray-700 hover:bg-gray-100"></i></button>
  )
}
export default Reports;