import React from "react";
import { CardContainer } from "../components";
import { Outlet } from "react-router-dom";

export default function MainContainer(){
    return(    
        <CardContainer tailwindClasses="w-full h-full rounded-md border-2 dark:border-gray-700 shadow-md dark:shadow-gray-700/30 flex flex-1 flex-col justify-around items-center overflow-hidden">
            <Outlet />
        </CardContainer>
    );
}