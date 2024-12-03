import React from "react";

export default function ButtonPlain({tailwindClasses="", text, img, iconWidth, onClick, ...otherProps}){
    return(
        <button className={`w-full px-2 py-1 lg:py-0 flex justify-center items-center rounded-md text-xs font-semibold lg:font-normal shadow-sm hover:text-indigo-600 active:bg-gray-400 border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6 ${tailwindClasses}`} {...otherProps} onClick={onClick}>
            {img && <img src={img} alt={`${text}-icon`} className={`mr-3 ${iconWidth}`} />}
            {text}
        </button>
    );
}