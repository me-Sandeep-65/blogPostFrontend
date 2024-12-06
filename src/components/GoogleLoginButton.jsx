import React from 'react'
import axios from "axios";
import ButtonOutlined from './ButtonOutlined'
import { useSetRecoilState } from "recoil";
import userProfile from "../store/selectors/userProfile";

function GoogleLoginButton() {
    const baseurl = import.meta.env.VITE_BASE_URL;
    const setUserProfile = useSetRecoilState(userProfile);

    const googleLoginHandler = () => {
        const newWindow = window.open(
            `${baseurl}/api/v1/login/auth/google`, 
            "_blank", 
            "width=vw/2, height=vh/2"
        );

        //keep checking periodically if the newWindow is closed and after closing make a axios request to the server
        if(newWindow){ 
            const intervalId = setInterval(() => {
                if (newWindow.closed) {
                    clearInterval(intervalId);
                    axios.get(`${baseurl}/api/v1/getuserdata`, {withCredentials: true})
                    .then((response) => {
                        console.log(response.data);
                        setUserProfile({
                            loading: false,
                            userProfile:response.data
                        });

                        window.location.href='/';
                    })
                    .catch((error) => {
                        alert("Failed to Login. Please try after sometime..")
                        setUserProfile({
                            loading: false,
                            userProfile:error.response.data
                        });
                    });
                }   
            }, 500);
        }

        // newWindow?.addEventListener("close", () => {
        //     console.log("window closed.");

        //     axios.get(`${baseurl}/api/v1/login`, {withCredentials: true})
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        // });
    }
  return (
    <ButtonOutlined tailwindClasses="w-4/5" text="Sign in with Google" icon="./src/assets/icons/google.svg" iconWidth="w-1/12" onClick={googleLoginHandler} ></ButtonOutlined>
  )
}

export default GoogleLoginButton