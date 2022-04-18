import React from 'react';
import Bonus from '../Bonus/Bonus';

import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import image from './doctor.png';


const Home = () => {
    return (
       <>      <div  className='  md:flex  md:items-center   w-full h-full    ' >
<img src={image} alt="background"   className=" h-18 w-full object-cover   "/>

       <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50   ">
           <div className="text-center">
               <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl  ">Hello,This is Dr. Mitchell  </h1>
               <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Contact</button>
           </div>
       </div>
   </div> <div className="mt-5 my-15"  > <h1  className="text-4xl text-center">Services</h1>  <Services></Services>     </div>  <Bonus></Bonus>     <Footer></Footer>     </>
    );
};

export default Home;