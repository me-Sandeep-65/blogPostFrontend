'use client'

import { useRef, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Label, ButtonContained, InputBox} from '../components'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import UserListSelector from '../store/selectors/userListSelector'

export default function AddModerator() {
  const setListState = useSetRecoilState(UserListSelector);
  const [open, setOpen] = useState(false);
  const emailRef = useRef(null);
  const baseurl = import.meta.env.VITE_BASE_URL;

  const toggleMenu = () => setOpen(!open);
  
  const handleAddBtnClick = () => {
    const data = {
      "email": emailRef.current.value,
    }

    if(!data.email){
      alert("Please fill in all fields");
      return;
    }

    axios.post(`${baseurl}/api/v1/admin/add-moderator`, data, { withCredentials: true})
    .then((response) => {
      console.log(response.data);
      if(!response.data){
        alert('Failed to Add Moderator.');
      }
      else{
        //add the post to dom
        setListState({user: response.data});
        
        toggleMenu();
      }
    })
    .catch((error) => {
      alert("Unable to add Moderator.")
    });
  }

  return(<div>
    <ButtonContained onClick={toggleMenu} tailwindClasses="px-3" text="Add Moderator" />    
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
                    Add New Moderator
                  </DialogTitle>
                  <Label tailwindClasses="w-full dark:text-white" content="Email"  htmlFor="email"/>
                  <InputBox ref={emailRef} tailwindClasses="w-full dark:text-white"  required type="email" name="email" />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark: bg-gray-900/30 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleAddBtnClick}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
              >
                Add
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
}
