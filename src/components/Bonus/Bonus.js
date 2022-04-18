import React from 'react';

const Bonus = () => {
    return (
        <div>
            <div className="py-16 white">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">Feedback</h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">
              <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
              <p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> He offers me great services.He is the best in the town <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span className="text-xs text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif">"</span>He is a great doctor.He is the best cardiologist.You can get better treatment from him. <span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">Micheal Collins</h6>
                  <span className="text-xs text-gray-500">Teacher</span>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy"/>
            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p className="text-gray-600"> <span className="font-serif">"</span> I personally recommend using his treatment.Best in the city.Great Doctor!<span className="font-serif">"</span></p>
              <div>
                  <h6 className="text-lg font-semibold leading-none">John Shelby</h6>
                  <span className="text-xs text-gray-500">Jounalist</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Bonus;