'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import axios from 'axios';

export default function DeletePost({ postId, userId }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const baseurl = import.meta.env.VITE_BASE_URL;

  const deletePost = () => {
    axios.post(`${baseurl}/api/v1/delete-post`, {postId}, {withCredentials: true})
    .then(response => {
      console.log(response.data);
      if(response.data.status) alert("Post deleted.");
      else alert("Error deleting post.");

      setOpen(false);
    })
    .catch(error => {
      console.log(error)
      alert('Error deleting post.');
      setOpen(false);
    });
  }
  
  return(<div>
      <button><i onClick={toggleMenu} type='button' className="las la-trash rounded-md px-2 py-1 text-red-600 font-extrabold text-3xl dark:hover:bg-gray-700 hover:bg-gray-100"></i></button>
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
                    Delete a Post
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-inherit">
                        Once a post is deleted, You won't be able to recover it.
                      Are you sure to delete it ?
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/30 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={deletePost}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Delete Post
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 dark:bg-zinc-900 dark:hover:bg-zinc-700 dark:text-inherit shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
