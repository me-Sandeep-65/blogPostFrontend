import React from "react";
import { ProfilePreview } from "../components";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import userProfile from "../store/selectors/userProfile";

export default function Appbar(){
    return(
        <div className="flex items-center justify-between top-0 w-full py-2 bg-inherit">
            <Link to={"/"} >
                <img src="./src/assets/script.svg" className="w-1/12 min-w-[2rem] max-w-[3rem] max-h-[3rem] text-xs fill-white" alt="Logo" />
            </Link>
            <ProfilePreview />
        </div>
    );
}