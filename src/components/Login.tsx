import React, { useState } from "react"
import Header from "./Header"

interface LoginProps{
   // username:string;
}

const Login:React.FC<LoginProps>=()=>{
    const [isSignIn,setisSignIn]=useState(true)
    const handleOnclick=()=>{
        setisSignIn(!isSignIn)
        }
return( 
<div>
    <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fe95548f-c421-4892-b01d-339893f85ac0/web_tall_panel/US-en-20241223-TRIFECTA-perspective_1761286d-593d-422b-9690-516e43b91b46_large.jpg" alt=""/>
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-80 right-80 rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl text-white rounded-lg bg-opacity-50 p-2 m-2"> {isSignIn?"Sign In":"Sign Up"}</h1>
    {!isSignIn && (<input type="text" placeholder="Full Name" className="p-2 m-2 w-full"></input>)}
    <input type="text" placeholder="Email Address" className="p-2 m-2 w-full"></input>
    <input type="password" placeholder="password" className="p-2 m-2 w-full"></input>
    <button className="p-2 m-2 bg-red-700 w-full"> {isSignIn?"Sign In":"Sign Up"}</button>
    <p className="p-2 m-2 text-white w-full"onClick={handleOnclick}>{isSignIn?"New to Netflix? Signup now":"Already Registered? Sign In now"}</p>
    </form>
</div>

)
}
export default Login



