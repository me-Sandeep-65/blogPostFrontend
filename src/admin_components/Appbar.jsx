import React, { useEffect, useRef } from "react";
import ProfilePreview  from "./ProfilePreview";
import { Link } from "react-router-dom";



export default function Appbar(){
    const homeRef = useRef(null);
    const reportsRef = useRef(null);
    const blockedRef = useRef(null);

    const selectHome = () => {
        homeRef.current.classList.remove("border-transparent");
        homeRef.current.classList.add("border-indigo-600");
        reportsRef.current.classList.add("border-transparent");
        reportsRef.current.classList.remove("border-indigo-600");
        blockedRef.current.classList.add("border-transparent");
        blockedRef.current.classList.remove("border-indigo-600");
    }
    const selectReports = () => {
        reportsRef.current.classList.remove("border-transparent");
        reportsRef.current.classList.add("border-indigo-600");
        homeRef.current.classList.add("border-transparent");
        homeRef.current.classList.remove("border-indigo-600");
        blockedRef.current.classList.add("border-transparent");
        blockedRef.current.classList.remove("border-indigo-600");
    }
    const selectBlocked = () => {
        blockedRef.current.classList.remove("border-transparent");
        blockedRef.current.classList.add("border-indigo-600");
        homeRef.current.classList.add("border-transparent");
        homeRef.current.classList.remove("border-indigo-600");
        reportsRef.current.classList.add("border-transparent");
        reportsRef.current.classList.remove("border-indigo-600");
    }

    console.log('appbar render')

    useEffect(() => {
        //get the current location
        const currentLocation = window.location.pathname
        console.log(currentLocation)
        if(currentLocation === "/"){
            selectHome()
        }
        else if(currentLocation === "/reports"){
            selectReports()
        }
        else if(currentLocation === "/blocklist"){
            selectBlocked()
        }
    },[])


    return(
        <div className="flex items-center justify-between top-0 w-full py-2 bg-inherit">
            <Link className="flex items-center" to={"/"} >
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                    fill="#4f46e5"
                    className="my-custom-icon"
                >
                    <path d="M 15.5 5 C 11.916 5 9 7.916 9 11.5 L 9 33 L 26.5 33 C 28.981 33 31 35.019 31 37.5 L 31 40 C 31 41.65 32.338328 42.990047 33.986328 42.998047 L 34.013672 42.998047 C 35.654672 42.990047 36.987047 41.659531 36.998047 40.019531 C 36.999047 39.489531 37 8 37 8 C 37 6.87 37.390391 5.838 38.025391 5 L 15.5 5 z M 42 5 C 40.346 5 39 6.346 39 8 L 39 14 L 42.5 14 C 43.879 14 45 12.879 45 11.5 L 45 8 C 45 6.346 43.654 5 42 5 z M 16.5 12 L 29.5 12 C 30.328 12 31 12.672 31 13.5 C 31 14.328 30.328 15 29.5 15 L 16.5 15 C 15.672 15 15 14.328 15 13.5 C 15 12.672 15.672 12 16.5 12 z M 16.5 19 L 29.5 19 C 30.328 19 31 19.672 31 20.5 C 31 21.328 30.328 22 29.5 22 L 16.5 22 C 15.672 22 15 21.328 15 20.5 C 15 19.672 15.672 19 16.5 19 z M 16.5 26 L 27.5 26 C 28.328 26 29 26.672 29 27.5 C 29 28.328 28.328 29 27.5 29 L 16.5 29 C 15.672 29 15 28.328 15 27.5 C 15 26.672 15.672 26 16.5 26 z M 5.5 35 C 4.121 35 3 36.121 3 37.5 L 3 38.5 C 3 40.981 5.019 43 7.5 43 L 30.025391 43 C 29.390391 42.162 29 41.13 29 40 L 29 37.5 C 29 36.121 27.879 35 26.5 35 L 5.5 35 z"></path>
                </svg>
                <p className="text-3xl p-1 font-semibold text-indigo-600 hidden sm:flex">blogPost</p>            
            </Link>
            <div className="flex flex-row items-center">
                <Link ref={homeRef} to={"/"} onClick={selectHome} className="p-2 md:px-5 sm:mx-2 border-b-4 border-transparent" >
                    <div className="px-auto w-full items-center flex justify-center">
                        Home
                    </div>
                </Link>
                <Link ref={reportsRef} to={"/reports"} onClick={selectReports} className="p-2 md:px-5 sm:mx-2 border-b-4 border-transparent" >
                    <div className="px-auto w-full items-center flex justify-center whitespace-nowrap">
                        Reports
                    </div>
                </Link>
                <Link ref={blockedRef} to={"/blocklist"} onClick={selectBlocked} className="p-2 md:px-5 sm:mx-2 border-b-4 border-transparent" >
                    <div className="px-auto w-full items-center flex justify-center whitespace-nowrap">
                        Block List
                    </div>
                </Link>
                <ProfilePreview MainButtonRefs={[homeRef, reportsRef, blockedRef]} />
            </div>
        </div>
    );
}