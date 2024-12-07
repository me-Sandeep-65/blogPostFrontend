import React, { useRef } from "react";
import { CardContainer, Label, InputBox, SignupForm, GoogleLoginButton } from "../components";
import { useRecoilValue } from "recoil";
import userProfile from "../store/selectors/userProfile";
import { useNavigate } from "react-router-dom";


export default function Signup(){
    const navigate = useNavigate();
    const userState = useRecoilValue(userProfile);
    if(userState.userProfile) navigate('/');


    const nameField = useRef(null);
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const mobileField = useRef(null);

    return(
        <CardContainer tailwindClasses ="max-w-md min-h-[41rem] sm:w-2/3 bg-inherit px-8 flex flex-1 flex-col items-center justify-center font-bold">
            <div className="my-3 text-xl">Welcome to Type Faster</div>
            <CardContainer tailwindClasses="rounded-md border py-2 w-full h-full max-h-[40rem] bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                    fill="#4f46e5"
                    className="my-custom-icon"
                >
                    <path d="M 15.5 5 C 11.916 5 9 7.916 9 11.5 L 9 33 L 26.5 33 C 28.981 33 31 35.019 31 37.5 L 31 40 C 31 41.65 32.338328 42.990047 33.986328 42.998047 L 34.013672 42.998047 C 35.654672 42.990047 36.987047 41.659531 36.998047 40.019531 C 36.999047 39.489531 37 8 37 8 C 37 6.87 37.390391 5.838 38.025391 5 L 15.5 5 z M 42 5 C 40.346 5 39 6.346 39 8 L 39 14 L 42.5 14 C 43.879 14 45 12.879 45 11.5 L 45 8 C 45 6.346 43.654 5 42 5 z M 16.5 12 L 29.5 12 C 30.328 12 31 12.672 31 13.5 C 31 14.328 30.328 15 29.5 15 L 16.5 15 C 15.672 15 15 14.328 15 13.5 C 15 12.672 15.672 12 16.5 12 z M 16.5 19 L 29.5 19 C 30.328 19 31 19.672 31 20.5 C 31 21.328 30.328 22 29.5 22 L 16.5 22 C 15.672 22 15 21.328 15 20.5 C 15 19.672 15.672 19 16.5 19 z M 16.5 26 L 27.5 26 C 28.328 26 29 26.672 29 27.5 C 29 28.328 28.328 29 27.5 29 L 16.5 29 C 15.672 29 15 28.328 15 27.5 C 15 26.672 15.672 26 16.5 26 z M 5.5 35 C 4.121 35 3 36.121 3 37.5 L 3 38.5 C 3 40.981 5.019 43 7.5 43 L 30.025391 43 C 29.390391 42.162 29 41.13 29 40 L 29 37.5 C 29 36.121 27.879 35 26.5 35 L 5.5 35 z"></path>
                </svg>
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