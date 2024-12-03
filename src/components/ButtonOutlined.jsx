import React from "react";

export default function ButtonOutlined({tailwindClasses="", text, icon, iconWidth, onClick, ...otherProps}){
    // console.log(icon);

    return(
        <button className={`flex justify-center items-center rounded-md dark:bg-gray-700 text-sm font-semibold shadow-sm hover:bg-gray-200 hover:text-custom-blue active:bg-gray-400 border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6 ${tailwindClasses}`} {...otherProps} onClick={onClick}>
            {icon && <img src={ icon } alt={`${ text }-icon`} className={`mr-3 ${ iconWidth }`} />}
            {text}
        </button>
    );
}