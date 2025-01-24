'use client';
import {useState} from 'react';

const LoginPage =()=>{
  const [mode] = useState('');
  /*
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] =useState('');
  const [emailCode, setEmailCode] = useState(null);
  const [resetPassword, setReserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')
  */

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
  return (<div className ="w-[calc(100vh - 80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center text-center">
  <form className="flex flex-col gap-8"> 
 <h1 className = "text-2xl font-semibold">{formTitle}</h1>
    { mode === MODL.REGISTER ? (<div>
      <lable forhtml="userName">Username</lable>
    <input type="text" id="userName" name="username" placeholder="Enter Name"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):null}
    {
     mode === MODL.EMAIL_VERIFICATION ? (<div>
      <lable forhtml="email">E-mail: </lable>
    <input type="email" id="email" name="email" placeholder="example@gmail.com"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):(<div>
      <lable forhtml="code">Email verification : </lable>
    <input type="code" id="code" name="email" placeholder="emailCode"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>)
    }
      { mode === MODL.REGISTER ? (<div>
      <lable forhtml="userName">Username</lable>
    <input type="text" id="userName" name="username" placeholder="Enter Name"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):null}
  </form>
  </div>)
}
export default LoginPage;
