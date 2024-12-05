import React, { useEffect, useState } from "react";
import axios from "axios";
import NothingToShow from "../components/NothingToShow";
import ModeratorCard from "./ModeratorCard";
import AddModerator from "./AddModerator"


function Moderators() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/admin/moderators`, {withCredentials: true})
        .then(response => {
            setUsers(response.data);
            console.log(response.data)
            setLoading(false);

        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })


    }, [setUsers])


    return(<>
        <div className="w-full px-8 flex justify-between items-center bg-gray-100 dark:bg-zinc-800">
            <AddModerator />
            <div className="my-3 text-xl font-bold">Moderators List</div>
            <a href="/moderators"><i className="las la-redo-alt rounded-md px-1 text-indigo-600 font-extrabold text-3xl hover:bg-gray-100 dark:hover:bg-gray-700"></i></a>

        </div>
        <div className="w-full h-full items-start overflow-auto">
            {loading ? <div>Loading...</div> : users && users.length !== 0 ? users.map((user, index) => (
                <ModeratorCard key={user._id} user={user} />
            )) : <NothingToShow />}
            {/* <CardContainer tailwindClasses=" py-3 w-full bg-white dark:bg-gray-800 flex flex-col justify-center items-center justify-between border-b">
                <div className="h-1/5 w-full px-4 flex justify-between items-center">
                    <img className="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile" />
                    <h1 className="text-base sm:text-lg text-center px-3 overflow-hidden whitespace-nowrap text-ellipsis">Name: Jon Doe</h1>
                    <i className="las la-user-check rounded-md p-1 text-green-600 font-extrabold text-3xl dark:hover:bg-gray-700 hover:bg-gray-100"></i>

                </div>
                <div className="h-1/5 w-full px-4 flex justify-around items-center flex-col sm:flex-row">
                    <h1 className="text-base sm:text-lg text-center px-3 overflow-hidden whitespace-nowrap text-ellipsis">Email: John@Doe.com</h1>
                    <h1 className="text-base sm:text-lg text-center px-3 overflow-hidden whitespace-nowrap text-ellipsis">Mobile: 12312312312</h1>
                </div>
            </CardContainer> */}
        </div>
    </>);
}

export default Moderators;
