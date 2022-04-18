import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/Firebase.init';

import toast from 'react-hot-toast';
const Signup = () => {
const navigate = useNavigate()
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({ value:"",error: "", });



const handleEmail=(event)=>{
    const emailInput = event.target.value;
    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Enter valid Email" });
    }
}
const handlePassword=(event)=>{
    const passwordInput = event.target.value;

    if (passwordInput.length < 7) {
      setPassword({ value: "", error: "Password is  too short" });
    } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
      setPassword({
        value: "",
        error: "Password must contain a capital letter",
      });
    } else {
      setPassword({ value: passwordInput, error: "" });
    }
}

const handlePasswordConfirmation=(event)=>{
	const confirmationInput = event.target.value;

    if (confirmationInput !== password.value) {
      setPasswordConfirmation({ value: "", error: "Password is Mismatched" });
    } else {
      setPasswordConfirmation({ value: confirmationInput, error: "" });
    }
  };


const handleSignup = (event) => {
    event.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }
    if (passwordConfirmation.value === "") {
      setPasswordConfirmation({
        value: "",
        error: "Password confirmation is required",
      });
    }
    if (email.value && password.value === passwordConfirmation.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Account created", { id: "created" });
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes("already-in-use")) {
            toast.error("Email is already in use", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
        });
    }
  };


    return (
        <div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none mx-auto ">
						<h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
						<form onSubmit={handleSignup} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input onBlur={(event)=>handleEmail(event.target.value)}
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
{email?.error&&<p className="text-red-500" >{email.error}</p>}

							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input  onBlur={(event)=>handlePassword(event.target.value)}
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p className="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								{password.error && <p className="text-red-600" >{password.error}</p>}
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Confirm Password
									</label>
									<input onBlur={(event)=>handlePasswordConfirmation(event.target.value)}
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
								{passwordConfirmation.error && <p className="text-red-600" >{passwordConfirmation.error}</p>}

							</div>
							<div className="mb-6 text-center">
								<button type="submit" 
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<h2 
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
									Forgot Password?
								</h2>
							</div>
							<div className="text-center">
								<h2  to="/login"
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
									Already have an account? <Link to='/login'> Login!</Link> 
								</h2>
							</div>
						</form>
					</div>
        </div>
    );
};

export default Signup;