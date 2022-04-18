import React from 'react';
import image from './image.png'
const About = () => {
    return (
        <div>
            <div className="md:flex items-center md:mx-auto   md:justify-evenly"> 
            
            <div>  <h1  className="text-4xl"> <span className="text-blue-400 text-6xl"> About  </span> Me </h1>  <h1 className="text-4xl my-5">Rafiul Islam</h1>  <p className="font-semibold"> My goal is to become a web developer.I want to become a full stack web developer.I am ready to achieve my goal. </p>   <br></br> <p className=" font-semibold" >I will practise code daily and watch useful informatinal videos to develop my skill.I will do regular projects which will be important for real life. </p>   </div>

           <div> <img src={image} alt="about"/>   </div> 
            
             </div>
        </div>
    );
};

export default About;