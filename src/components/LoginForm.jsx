import React from 'react'
import { useSetRecoilState } from "recoil";
import userProfile from '../store/selectors/userProfile';
import ButtonContained from './ButtonContained';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm({setEmail, setPassword}) {
    const navigate = useNavigate();
    const setUserProfile = useSetRecoilState(userProfile);

    const loginHandler = (e) => {
        e.preventDefault();
        
        // validate the data
        const data = {
            email: setEmail.current.value,
            password: setPassword.current.value,
        }
        if (!data || !data.email || !data.password) {
            alert("Please fill in all fields");
            return;
        }
        
        const baseurl = import.meta.env.VITE_BASE_URL;

        axios.post(`${baseurl}/api/v1/login/`, data, { withCredentials: true} )
        .then((response) => {
            console.log(response.data)
            setUserProfile({
                loading: false,
                userProfile:response.data
            });
            if (setEmail.current) {
                setEmail.current.value = '';  // Clear email input
            }
            if (setPassword.current) {
                setPassword.current.value = '';  // Clear password input
            }
            alert("Login successful.");
            navigate("/");
        })
        .catch((error) => {
            if (setPassword.current) {
                setPassword.current.value = '';  // Clear password input
            }
            alert("Login failed.");
        });
    }

  return (
    <form className='w-4/5' onSubmit={loginHandler}>
        <ButtonContained tailwindClasses="w-full my-2" text="Log In" type="submit"></ButtonContained>
    </form>
  )
}

export default LoginForm