import React from 'react'
import { useSetRecoilState } from "recoil";
import userProfile from "../store/selectors/userProfile";
import ButtonContained from './ButtonContained';
import axios from 'axios';

function SignupForm({ nameField, mobileField, emailField, passwordField }) {
    const setUserProfile = useSetRecoilState(userProfile);

    const signupHandler = (e) => {
        e.preventDefault();

        // validate the data
        const data = {
            name: nameField.current.value,
            mobile: mobileField.current.value,
            email: emailField.current.value,
            password: passwordField.current.value,
        }
        if (!data || !data.email || !data.password || !data.name || !data.mobile) {
            alert("Please fill in all fields");
            return;
        }
        
        const baseurl = import.meta.env.VITE_BASE_URL;

        axios.post(`${baseurl}/api/v1/signup/`, data, { withCredentials: true })
        .then((response) => {
            console.log(response.data)
            setUserProfile({
                loading: false,
                userProfile:response.data
            });

            emailField.current.value = '';  // Clear email input
            passwordField.current.value = '';
            nameField.current.value = '';
            mobileField.current.value = '';

            alert("Signup successful.");
            // window.location.href = "/";
        })
        .catch((error) => {
            passwordField.current.value='';

            alert("Signup failed.");
        });
    }

  return (
    <form className='w-4/5' onSubmit={signupHandler}>
        <ButtonContained tailwindClasses="w-full" text="Sign Up" type="submit"></ButtonContained>
    </form>
  )
}

export default SignupForm