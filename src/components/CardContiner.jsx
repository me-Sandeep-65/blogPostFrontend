import React from 'react';

function CardContainer({ content, tailwindClasses = "", ...otherProps }) {
    // Constructing dynamic class names using template literals

    return (
        <div className= {tailwindClasses} {...otherProps}>
        </div>
    );
}

export default CardContainer;
