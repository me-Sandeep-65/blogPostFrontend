import React from 'react'
import { useSetRecoilState } from 'recoil';
import PostListSelector from '../store/selectors/postListSelector';
import axios from 'axios';

function Unreport({userId, postId}) {
    const setListState = useSetRecoilState(PostListSelector);
    const baseurl = import.meta.env.VITE_BASE_URL;
    const handleUnreport = () => {
        axios.post(`${baseurl}/api/v1/moderator/unreport-post`, {postId}, {withCredentials:true})
        .then(response => {
            if(response.data !== null){
                setListState({removeId:response.data});
                alert("Post unreported.");
            }
            else alert("Failed to unreport post.");
        })
        .catch(error => {
            console.log(error);
            alert("Failed to unreport post.");
        })
    }

  return (
    <button onClick={handleUnreport} className="rounded-full"><i className="lar la-check-circle rounded-full py-1 px-2 text-green-600 font-extrabold text-3xl dark:hover:bg-gray-700 hover:bg-gray-100"></i></button>
  )
}

export default Unreport