import React from 'react';

const Blog = () => {
    return (
        <div>
            <div> <div> </div> <h1  className="text-3xl">Difference between authorization and authentication?</h1> <br/>  <p> Authenticaton and authorization are often used to protect from cyber-attacks.</p> <li>Authentication is the process of verifying who someone is,but Authrization is the process of verifying what specific applications,files and data a user has access to. </li> <li> Authentication is the first step of a good identity and access management process.Authrization always takes places after authrization.</li>  <li>Authentication is visible and changable by user.Authrization isn't changable by user.</li>  <div> <h1  className="text-3xl my-5">Why are you using firebase?What other options do you have to implement authentication? </h1> <br/><p>The reason to use firebase <span>It reduces development workload and time.Firebase is simple,lightweight and user friendly.Implement firebase means plugging a ready-made back-end into client code to make it dynamic.Firebase is less technical and time-saving alternative to writing backend code for dynamic apps.  </span>  <span className="text-xl">Other options that are alternative to firebase : <li>AuthO,MongoDB,Passport,Okta,JSON Web Token,Amazon Cognito etc.</li>  </span>  </p>   </div>  <div><h1 className="text-3xl my-5">What other services does firebase provide other than Authentication</h1>  <br/>  <p> Firebase is developed by google.It provides different kinds of services that help you to develop high quality mobile and web applications. </p> <p>There are many services which is provided by firebase such-as </p> <ul><li>Cloud Firebase</li>
            <li>Authentication </li>
            <li>Hosting </li>
            <li>Cloud Storage </li>
            <li>Google Analytics </li>
            <li>Cloud Messeging </li>
            <li>Cloud Functions</li></ul>  </div>   </div>
        </div>
    );
};

export default Blog;