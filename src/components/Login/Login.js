import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {auth} from '../Firebase/Firebase.init';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";

const provider = new GoogleAuthProvider();
const Login = () => {

    const navigate = useNavigate()

    const googleAuth=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
         navigate('/')
        
        }).catch((error) => {
         
        });
    }
  const handleLogin = (event) => {
      event.preventDefault();
      const email = event.target.email.value
      const password = event.target.password.value
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
    
   
    return (
        <div>
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                    <div className="space-y-4">
                        <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo"/>
                        <h2 className="mb-8 text-2xl text-center text-cyan-900 font-bold">Login</h2>
                    </div>
                    <form  onSubmit={handleLogin} className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
      <input type="text" id="email" name="email" placeholder="Email or Phone Number" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input  type="text" id="password" name="password"placeholder="Password" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <Link to='/' className="text-blue-400 text-center my-2">Forgot Password?</Link>
      <hr />
      <button onClick={() => navigate("/signup")}  className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
    </form>

                    <div className="mt-16 grid space-y-4">
                        <button onClick={googleAuth}className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo"/>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                       
                    </div>

                    <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                        <p className="text-xs">By proceeding, you agree to our <Link  to="/"className="underline">Terms of Use</Link> and confirm you have read our <Link to="/" className="underline">Privacy and Cookie Statement</Link>.</p>
                        <p className="text-xs">This site is protected by reCAPTCHA and the <Link to="/" className="underline">Google Privacy Policy</Link> and <Link to="/" className="underline">Terms of Service</Link> apply.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Login;