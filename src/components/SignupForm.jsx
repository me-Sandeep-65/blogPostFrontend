import React from 'react'
import { useSetRecoilState } from "recoil";
import userProfile from "../store/selectors/userProfile";
import ButtonContained from './ButtonContained';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm({ nameField, mobileField, emailField, passwordField }) {
    const navigate = useNavigate();
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
            const token = Cookies.get('Authorization');
            if(token) localStorage.setItem('Authorization', token);  //  needed to overcome the statelessness of the vercel

            setUserProfile({
                loading: false,
                userProfile:response.data
            });

            emailField.current.value = '';  // Clear email input
            passwordField.current.value = '';
            nameField.current.value = '';
            mobileField.current.value = '';

            alert("Signup successful.");
            navigate("/");
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