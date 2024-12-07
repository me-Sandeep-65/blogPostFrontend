'use client'

import React, { useRef, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Label from './Label'
import ButtonContained from './ButtonContained'
import InputBox from './InputBox'
import userProfile from '../store/selectors/userProfile'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import axios from 'axios'
import PostListSelector from '../store/selectors/postListSelector'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
  const navigate = useNavigate();
  const setListState = useSetRecoilState(PostListSelector)
  const [open, setOpen] = useState(false);
  const userState = useRecoilValue(userProfile);
  const subjectRef = useRef(null);
  const aboutRef = useRef(null);
  const baseurl = import.meta.env.VITE_BASE_URL;

  const toggleMenu = () => setOpen(!open);
  
  const handlePostBtnClick = () => {
    const data = {
      "subject": subjectRef.current.value,
      "about": aboutRef.current.value,
    }

    if(!data.subject || !data.about){
      alert("Please fill in all fields");
      return;
    }

    axios.post(`${baseurl}/api/v1/new-post`, data, { withCredentials: true})
    .then((response) => {
      if(!response.data){
        alert('Failed to create post');
      }
      else{
        //add the post to dom
        setListState({post:response.data});
        toggleMenu();
      }
    })
    .catch((error) => {
      alert("Unable to create post.")
    });
  }

  if(userState.userProfile) return(<div>
    <ButtonContained onClick={toggleMenu} tailwindClasses="px-3" text="Create Post" />    
    {open &&
    (<Dialog open={open} onClose={toggleMenu} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="w-full mb-2 text-base font-semibold text-indigo-600 text-center">
                    New Post
                  </DialogTitle>
                  <Label tailwindClasses="w-full dark:text-white" content="Subject"  htmlFor="subject"/>
                  <InputBox ref={subjectRef} tailwindClasses="w-full dark:text-white"  required type="text" name="subject" />
                  <Label tailwindClasses="w-full dark:text-white" content="About"  htmlFor="textarea"/>
                  <textarea ref={aboutRef} className='w-full h-24 dark:bg-gray-700 overflow-auto border-2 focus:outline-indigo-600' name="textarea" id=""></textarea>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark: bg-gray-900/30 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handlePostBtnClick}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
              >
                Post
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-zinc-900 px-3 py-2 text-sm font-semibold dark:hover:bg-zinc-700 dark:text-inherit text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>)}
  </div>)
  else return(<div>
    <ButtonContained onClick={toggleMenu} tailwindClasses="px-3" text="Create Post" />    
    {open &&
    (<Dialog open={open} onClose={toggleMenu} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="w-full mb-2 text-base font-semibold text-red-600 text-center">
                    Log in to Your Account
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-inherit">
                        User must be logged in for creating a post.
                      Click on 'Log In' button to proceed to the Login Page.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/30 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() =>{
                    setOpen(false);
                    navigate('/login');
                }}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
              >
                Log In
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>)}
  </div>)
}
