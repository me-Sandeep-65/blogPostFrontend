import React, { useRef } from "react";
import { CardContainer, Label, InputBox, LoginForm, GoogleLoginButton } from "../components";
import { useRecoilValue } from "recoil";
import userProfile from "../store/selectors/userProfile";


function Login() {
    const userState = useRecoilValue(userProfile);
    if(userState.userProfile) window.location.href = '/';

    const setEmail = useRef(null); 
    const setPassword = useRef(null); 

    return(
        <CardContainer tailwindClasses ="max-w-md min-h-[35rem] sm:w-2/3 bg-inherit px-8 flex flex-col flex-1 items-center justify-center font-bold">
            <div className="my-3 text-xl">Welcome to Type Faster</div>
            <CardContainer tailwindClasses="rounded-md border py-6 w-full h-full max-h-[35rem] bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
                <img className="mx-auto my-2 h-10 w-auto" src="./src/assets/icons/google.png" alt="Your Company" />
                <CardContainer tailwindClasses="w-full h-full bg-inherit flex flex-col justify-around items-center">
                    <div className=" text-lg">Sign in to your account</div>
                    <br />
                    <div className="w-4/5">
                        <Label tailwindClasses="w-full dark:text-white" content="Email Address"  htmlFor="email"/>
                        <InputBox ref={setEmail} tailwindClasses="w-full dark:text-white"  required autoComplete="email" type="email" name="email" />
                    </div>
                    <div className="w-4/5">
                        <Label tailwindClasses="w-full dark:text-white" content="Password" htmlFor="password" />
                        <InputBox ref={setPassword} tailwindClasses="w-full dark:text-inherit"  required type="password" name="password" />
                    </div>

                    {/* Log In button and handler is inside this component. */}
                    <LoginForm setPassword={setPassword} setEmail={setEmail} />

                    <p className="font-normal text-sm text-gray-500 dark:text-inherit">Not a Registered User? <a href="/signup" className="font-semibold text-sm leading-6 text-indigo-600 hover:text-indigo-400 active:text-indigo-600">Sign Up here</a></p>
                    <br />
                    <div className="w-4/5 my-2 border-b border-gray-400 relative bg-inherit">
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-inherit">
                        <p className="font-semibold text-sm text-inherit px-6 bg-inherit">Or continue with</p>
                        </div>
                    </div>
                    <GoogleLoginButton />
                </CardContainer>
            </CardContainer>
            <p className="text-gray-500 text-xs font-normal">© All rights are reserved.</p>
        </CardContainer>
    );
}

export default Login;