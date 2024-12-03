import React from "react";

export default function({tailwindClasses="", content, ...otherProps}){
    return(
        <label className={`text-sm font-medium text-gray-900 ${tailwindClasses}`} {...otherProps}>{content}</label>
    );
}