import React from 'react';

const Service = (props) => {
const {img,name,description}=props.service;
    return (
        <div>
            <div className="">  <img src={img} alt="images"></img>  </div>
            <div> <h1  className="text-2xl text-center">{name}</h1> <p>{description}</p>  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Call Now
</button>  </div>
           
        </div>
    );
};

export default Service;