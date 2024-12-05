import React from 'react'
import { CardContainer } from '../components'
import axios from 'axios';

function ModeratorCard({user}) {
  const baseurl = import.meta.env.VITE_BASE_URL;

  const removeModerator = () => {
    axios.post(`${baseurl}/api/v1/admin/remove-moderator`, {userId: user._id}, {withCredentials:true})
    .then(response => {
      if(response.data.status) alert("Moderator removed.")
      else alert("Failed to Remove Moderator.");
    })
    .catch(error => {
      alert("Failed to remove moderator.");
    })
  }
  return (
    <CardContainer tailwindClasses=" py-3 w-full bg-white dark:bg-gray-800 flex flex-col items-center justify-between border-b">
        <div className="h-1/5 w-full px-4 flex justify-between items-center">
            <img className="inline-block size-10 rounded-full ring-2 ring-white" src={user.image ? user.image : import.meta.env.VITE_DEFAULT_IMAGE} alt="profile" />
            <h1 className="text-base sm:text-lg text-center px-3 overflow-hidden whitespace-nowrap text-ellipsis">Name: {user.name}</h1>
            <button onClick={removeModerator} data= {user.userId} ><i className="las la-trash rounded-md p-1 text-red-600 font-extrabold text-3xl dark:hover:bg-gray-700 hover:bg-gray-100"></i></button>

        </div>
        <div className="h-1/5 w-full px-4 flex justify-around items-center flex-col sm:flex-row">
            <h1 className="text-base sm:text-lg text-center px-3 overflow-hidden whitespace-nowrap text-ellipsis">Email: {user.mail.email}</h1>
            <h1 className="text-base sm:text-lg text-center px-3 overflow-hidden whitespace-nowrap text-ellipsis">Mobile: {user.mobile ? user.mobile : "N/A"}</h1>
        </div>
    </CardContainer>
  )
}

export default ModeratorCard