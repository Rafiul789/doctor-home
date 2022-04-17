import React from 'react';

const Service = (props) => {
const {img,name,description}=props.service;
    return (
        <div>
            <div className="">  <img src={img} alt="images"></img>  </div>
            <div> <h1  className="text-2xl text-center">{name}</h1> <p>{description}</p>   </div>
           
        </div>
    );
};

export default Service;