import React from 'react';
import image from './404.jpg'
const NotFound = () => {
    return (
        <div>
            <img className="item-center mx-auto"  src={image} alt="Not Found"></img>
        </div>
    );
};

export default NotFound;