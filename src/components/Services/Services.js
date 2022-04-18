import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
const[services,setService]=useState([])

useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setService(data))
    
        },[])

    return (
        <div>
            <div className="mt-10 md:grid  md:grid-cols-3  gap-6  "> {services.map(service=><Service key={service.id }  service={service} > </Service>   )}  </div>
        </div>
    );
};

export default Services;