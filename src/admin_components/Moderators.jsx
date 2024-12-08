import React, { useEffect, useState } from "react";
import axios from "axios";
import NothingToShow from "../components/NothingToShow";
import ModeratorCard from "./ModeratorCard";
import AddModerator from "./AddModerator"
import { useRecoilValue, useSetRecoilState } from "recoil";
import UserListSelector from "../store/selectors/userListSelector";


function Moderators() {
    const listState = useRecoilValue(UserListSelector);
    const setListState = useSetRecoilState(UserListSelector);
    const baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/admin/moderators`, {withCredentials: true})
        .then(response => {
            setListState({
                loading: false,
                users:response.data || [],
            });
        })
        .catch(error => {
            console.error(error);
            setListState({
                loading:false,
                users:[],
            })
        })


    }, [setListState])


    return(<>
        <div className="w-full px-8 flex justify-between items-center bg-gray-100 dark:bg-zinc-800">
            <AddModerator />
            <div className="my-3 text-xl font-bold">Moderators List</div>
            <a href="/moderators"><i className="las la-redo-alt rounded-md px-1 text-indigo-600 font-extrabold text-3xl hover:bg-gray-100 dark:hover:bg-gray-700"></i></a>

        </div>
        <div className="w-full h-full items-start overflow-auto">
            {listState.loading ? <div>Loading...</div> : listState.users.length !== 0  ? listState.users.map((user, index) => (
                <ModeratorCard key={user._id} user={user} />
            )) : <NothingToShow />}
        </div>
    </>);
}

export default Moderators;
