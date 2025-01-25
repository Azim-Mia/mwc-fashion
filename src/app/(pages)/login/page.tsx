'use client';
import {useState} from 'react';

const LoginPage =()=>{
  const [mode] = useState('LOGIN');
  //const [userName, setUserName] = useState('');
 // const [userEmail, setUserEmail] = useState('');
  //const [password, setPassword] =useState('');
  //const [emailCode, setEmailCode] = useState(null);
  //const [resetPassword, setReserPassword] = useState('');
  //const [isLoading, setIsLoading] = useState(false);
  //const [message, setMessage] = useState('');
  //const [error, setError] = useState('')
  
enum MODL {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
    RESET_PASSWORD = "RESET_PASSWORD"
  }
  const formTitle = mode === MODL.LOGIN 
  ? "Login now" : mode === MODL.REGISTER 
  ? "Register now" : mode === MODL.RESET_PASSWORD ? "Reset your password" : "Verify your Email";
  const buttonTitle = mode === MODL.LOGIN 
  ? "Login" : mode === MODL.REGISTER 
  ? "Register" : mode === MODL.RESET_PASSWORD ? "Reset" : "Verify";
 // const wixClient = useWixClient();
  return (<div className ="w-[calc({100vh - 80px}] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-3 items-center justify-center text-center mt-24 relative">
  <form className="flex flex-col justify-center items-center text-center gap-4 bg-gray rounded-md p-2"> 
 <h1 className = "text-2xl font-semibold">{formTitle}</h1>
    { mode === MODL.REGISTER ? (<div className="flex flex-row xs:flex-col justify-center text-center items-center xs:gap-3">
      <label className="text-2xl text-white font-semibold">Username : </label>
    <input type="text" id="userName" name="username" placeholder="Enter Name"  className="p-2 ring-2 ring-gary-100 rounded-md text-center cursor-pointer"/> 
    </div>
    ):null}
    { mode === MODL.RESET_PASSWORD || mode === MODL.LOGIN || mode === MODL.REGISTER ? (<div className="flex flex-row xs:flex-col text-center justify-center items-center xs:gap-3 xs:p-2 xs:text-1xl">
    <label className="text-2xl font-semibold text-white">E-mail : </label>
    <input type="email" id="email" name="email" placeholder="example@gmail.com"  className="p-2 ring-2 ring-gary-100 rounded-md text-center cursor-pointer"/> 
    </div>
    ):null}
    { mode === MODL.LOGIN || mode === MODL.REGISTER ? (<div className="flex flex-col md:flex-row lg:flex-row text-center justify-center items-center xs:gap-3 xs:p-2 xs:text-1xl">
      <label className="text-2xl text-white font-semibold">Password : </label>
    <input type="password" id="password" name="password" placeholder="Enter Password"  className="ring-2 ring-gary-100 rounded-md text-center p-2 cursor-pointer"/> 
    </div>
    ):null}
     { mode === MODL.EMAIL_VERIFICATION ? (<div className="flex flex-wrap text-center items-center gap-2">
      <label className="text-2xl text-white font-semibold">Code: </label>
    <input type="Code" id="Code" name="Code" placeholder="verification code" max-length='10' className="p-2 ring-2 ring-gary-100 rounded-md cursor-pointer text-center"/> 
    </div>
    ):null}
 <button className= "text-1xl font-semibold py-2 px-6 bg-black text-white rounded-md ">{buttonTitle}</button>
  </form>
  </div>)
}
export default LoginPage;