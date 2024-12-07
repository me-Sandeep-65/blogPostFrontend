import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonOutlined, ButtonContained, UserLoading } from "../components";
import userProfile from "../store/selectors/userProfile";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";

export default function ProfilePreview({MainButtonRefs}, ...otherProps){
    const userState = useRecoilValue(userProfile);
    const setUserProfile = useSetRecoilState(userProfile);
    const navigate = useNavigate();
    const baseurl = import.meta.env.VITE_BASE_URL;

    
    useEffect(() => {
        if(!userState.userProfile){
            axios.get(`${baseurl}/api/v1/getuserdata`, {withCredentials: true})
            .then((response) => {
                console.log('userdata is loading..')
                console.log(response.data);
                setUserProfile({
                    loading: false,
                    userProfile:response.data
                });
            })
            .catch((error) => {
                setUserProfile({
                    loading: false,
                    userProfile:error.response?.data | null
                });
            });
        }
    },[setUserProfile]);

    console.log('from profile preview')
    console.log(userState);


    const handleLoginBtnClick = ()=>{
        MainButtonRefs.forEach(element => {
            element.current.classList.add('border-transparent')
            element.current.classList.remove('border-indigo-600')
        });
        navigate("/login");
    }
    const handleSignupBtnClick = ()=>{
        MainButtonRefs.forEach(element => {
            element.current.classList.add('border-transparent')
            element.current.classList.remove('border-indigo-600')
        });
        navigate("/signup");
    }
    const handleLogoutBtnClick = () => {
        //delete authorization cookie
        axios.get(`${baseurl}/api/v1/login/logout`, {withCredentials: true})
        .then((response) => {
            setUserProfile({
                loading: false,
                userProfile: null,
            });
    
    
            navigate('/');
        })
        .catch((error) => {
            alert("Unable to logout.")
        })
    }
    const handleMypostsBtnClick = () => {
        MainButtonRefs.forEach(element => {
            element.current.classList.add('border-transparent')
            element.current.classList.remove('border-indigo-600')
        });
        navigate('/my-posts');
        
    }

    const handleModeratorsBtnClick = () => {
        MainButtonRefs.forEach(element => {
            element.current.classList.add('border-transparent')
            element.current.classList.remove('border-indigo-600')
        });
        navigate('/moderators');
        
    }

    if(userState.loading){
        return(<UserLoading />)
    }
    else{
        const user = userState.userProfile;

        return(!user ? 
        (<div className="w-2/3 flex items-center justify-center">
            <ButtonOutlined tailwindClasses="mx-1" text="Log In" onClick={handleLoginBtnClick} />
            <ButtonOutlined tailwindClasses="mx-1" text="Sign Up"  onClick={handleSignupBtnClick} />
        </div>) :
        (<div className="dropdown pl-2 w-2/12 min-w-[2rem] max-w-[3rem] relative">
            <img
                id="outerImage"
                src={user.image ? `${user.image}` : `${import.meta.env.VITE_DEFAULT_IMAGE}`}
                className="rounded-full w-full h-full filter max-h-[4rem] text-xs"
                alt="profile image"
            />
            <div id="innerDiv" className="dropdown-menu hidden rounded-md backdrop-blur-sm flex-col items-center z-10 justify-center p-4 shadow-md absolute border border-gray-400 w-[20vw] h-[70vh] min-w-[250px] min-h-[450px] bg-gray-200 dark:bg-gray-800 top-full left-full md:left-0 transform md:-translate-x-1/2 -translate-x-full">
                <div className="h-full px-4 text-sm 2xl:text-lg flex flex-col items-left justify-between">
                    <img
                        src={user.image ? `${user.image}` : `${import.meta.env.VITE_DEFAULT_IMAGE}`}
                        className="rounded-full self-center w-1/3 m-4 bg-zinc-800 dark:bg-zinc-300  aspect-square filter"
                        alt="Profile Image"
                    />
                    <div className="w-full items-center justify-center text-center">{user.role.toUpperCase()}</div>
                    <h2 className="font-bold py-2">Name: <span className="font-normal">{user.name}</span></h2>
                    <h2 className="font-bold py-2">Email: <span className="font-normal">{user.email}</span></h2>
                    <h2 className="font-bold py-2">Mobile: <span className="font-normal">{user.mobile ? user.mobile : "N/A"}</span></h2>
                    <div className="h-1/4"></div>
                </div>
                <ButtonContained onClick={handleMypostsBtnClick} tailwindClasses="w-full my-2" text="My Posts" />
                <ButtonContained onClick={handleModeratorsBtnClick} tailwindClasses="w-full my-2" text="Moderators" />
                <ButtonContained onClick={handleLogoutBtnClick} tailwindClasses="w-full" text="Log Out" />
            </div>
        </div>)
    )}
}