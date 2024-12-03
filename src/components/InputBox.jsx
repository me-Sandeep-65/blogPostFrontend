import React, { forwardRef } from "react";

const InputBox = forwardRef(({ tailwindClasses = "", ...otherProps }, ref) => {
    return (
        <input
            ref={ref}  // Forward the ref to the input element
            className={`rounded-md dark:bg-gray-700 border-0 py-1.5 px-3 text-gray-500 font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6 ${tailwindClasses}`}
            {...otherProps}
        />
    );
});

export default InputBox;
