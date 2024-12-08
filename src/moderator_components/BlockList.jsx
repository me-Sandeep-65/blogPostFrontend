import React, { useEffect, useState } from "react";
import { CardContainer } from "../components";
import axios from "axios";
import BlockedUserCard from "./BlockedUserCard";
import NothingToShow from "../components/NothingToShow";
import { useRecoilValue, useSetRecoilState } from "recoil";
import UserListSelector from "../store/selectors/userListSelector";

function BlockList() {
    const listState = useRecoilValue(UserListSelector);
    const setListState = useSetRecoilState(UserListSelector);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/moderator/blocked-users`, {withCredentials: true})
        .then(response => {
            setListState({
                loading: false,
                users:response.data || [],
            });
        })
        .catch(error => {
            console.error(error);
            setListState({
                loading: false,
                users: [],
            })
        })


    }, [setListState])


    return(<>
        <div className="w-full px-8 flex justify-center items-center bg-gray-100 dark:bg-zinc-800">
            <div className="my-3 text-xl font-bold">Block List</div>
        </div>
        <div className="w-full h-full items-start overflow-auto">
            {listState.loading ? <div>Loading...</div> : listState.users.length !== 0 ? listState.users.map((user, index) => (
                <BlockedUserCard key={user._id} user={user} />
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

export default BlockList;
