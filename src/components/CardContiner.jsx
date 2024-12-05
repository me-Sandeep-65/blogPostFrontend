import React from 'react';

function CardContainer({ content, tailwindClasses = "", ...otherProps }) {
    return (
        <div className= {tailwindClasses} {...otherProps}>
        </div>
    );
}

export default CardContainer;
