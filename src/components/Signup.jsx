import React, { useRef } from "react";
import { CardContainer, Label, InputBox, SignupForm, GoogleLoginButton } from "../components";
import { useRecoilValue } from "recoil";
import userProfile from "../store/selectors/userProfile";


export default function Signup(){
    const userState = useRecoilValue(userProfile);
    if(userState.userProfile) window.location.href = '/';


    const nameField = useRef(null);
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const mobileField = useRef(null);

    return(
        <CardContainer tailwindClasses ="max-w-md min-h-[41rem] sm:w-2/3 bg-inherit px-8 flex flex-1 flex-col items-center justify-center font-bold">
            <div className="my-3 text-xl">Welcome to Type Faster</div>
            <CardContainer tailwindClasses="rounded-md border py-2 w-full h-full max-h-[40rem] bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
                <img className="mx-auto my-1 h-10 w-auto" src="./src/assets/icons/google.png" alt="Your Company" />
                <CardContainer tailwindClasses="w-full h-full bg-white dark:bg-inherit flex flex-col justify-around items-center">
                    <div className=" text-lg">Create a new account</div>
                    <div className="w-4/5">
                        <Label tailwindClasses="w-full dark:text-white" content="Name"  htmlFor="name"/>
                        <InputBox ref={nameField} tailwindClasses="w-full dark:text-white"  required autoComplete="text" type="text" name="name" />
                    </div>
                    <div className="w-4/5">
                        <Label tailwindClasses="w-full dark:text-white" content="Mobile" htmlFor="mobile" />
                        <InputBox ref={mobileField} tailwindClasses="w-full dark:text-inherit" type="tel" name="mobile" />
                    </div>
                    <div className="w-4/5">
                        <Label tailwindClasses="w-full dark:text-white" content="Email Address"  htmlFor="email"/>
                        <InputBox ref={emailField} tailwindClasses="w-full dark:text-white"  required autoComplete="email" type="email" name="email" />
                    </div>
                    <div className="w-4/5">
                        <Label tailwindClasses="w-full dark:text-white" content="Password" htmlFor="password" />
                        <InputBox ref={passwordField} tailwindClasses="w-full dark:text-inherit" type="password"  required name="password" />
                    </div>

                    {/* Sign Up button and handler is inside this component. */}
                    <SignupForm nameField={nameField} mobileField={mobileField} emailField={emailField} passwordField={passwordField} />

                    <p className="font-normal text-sm text-gray-500 dark:text-inherit">Already have a account? <a href="/login" className="font-semibold text-sm leading-6 text-indigo-600 hover:text-indigo-400 active:text-indigo-600">Sign In here</a></p>
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