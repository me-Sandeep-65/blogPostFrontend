import React from "react";

export default function ButtonContained({tailwindClasses="", text, onClick, ...otherProps}){
    return(
        <button className={`flex justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 active:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${tailwindClasses}`} {...otherProps} onClick={onClick}>{text}</button>
    );
}