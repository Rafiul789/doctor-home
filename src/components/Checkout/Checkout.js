import React from 'react';

const Checkout = () => {
    return (
        <> 
              <div className="max-w-10/12 h-screen m-auto bg-rose-50 mt-3">
           <div className="text-center">
               <h1 className=" mx-auto sm:text-3xl font-semibold px-2 py-1 5 whitespace-pre-wrap">Information</h1>
               <form action="#" className="w-11/12 mx-auto border-2 border-gray-900 rounded-md p-16 flex flex-col sm:flex-row sm:justify-evenly">
                    <div className="p-16 flex flex-col border-2 bg-white rounded-lg  border-red-50">
                        <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">Personal Details</h1>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded">
                            <input type="text" placeholder="Firstname" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                            <input type="text" placeholder="Laststname" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                        </div>
                        <input type="text" placeholder="Username" className=" border-[0.5px] border-gray-800 rounded placeholder:text-center placeholder:text-lg focus:outline-none p-2 mt-3"/>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                            <input type="email" placeholder="Email Address" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                            <input type="password" placeholder="Password" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                        </div>
                        <input type="text" placeholder="Phone no +88019...." className=" border-[0.5px] border-gray-800 rounded placeholder:text-center focus:outline-none p-2 mt-3"/>
                    </div>

                    
                    <div className="p-16 flex flex-col border-2 bg-white rounded-lg  border-red-50">
                        <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">Address Details</h1>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded">
                            <input type="text" placeholder="Your Living City" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                            <input type="text" placeholder="Street Near Your House" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                        </div>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                            <input type="text" placeholder="Street Number" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                            <input type="text" placeholder="Zipcode" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                        </div>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                            <input type="email" placeholder="Latitude" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                            <input type="password" placeholder="Longitude" className=" rounded-sm border-[0.5px] border-red-100 placeholder:text-center placeholder:text-lg focus:outline-none p-1"/>
                        </div>
                        <button type="submit" className="w-full bg-gray-600 hover:bg-emerald-600 text-white text-2xl p-2 rounded-xl mt-3">Submit</button>
                    </div>
                  
               </form>
           </div>
        </div>
        </>
    );
};

export default Checkout;