import React, { useState } from 'react';
import ReportPad from './ReportPad';


const DropdownButton = ({userId, postId}) => {
  // State to track whether the menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="flex items-center p-2 h-11 w-11 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="dropdown-menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="dropdown-menu"
          className="absolute right-0 mt-1 p-1 w-28 bg-white dark:bg-zinc-800 shadow-lg rounded-md border border-gray-200"
        > 
        <ReportPad userId={userId} postId={postId} /> 
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
