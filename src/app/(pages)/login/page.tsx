'use client';
import {useState} from 'react';

const LoginPage =()=>{
  const [mode] = useState('');
<<<<<<< HEAD
  /*const [userName, setUserName] = useState('');
=======
  /*
  const [userName, setUserName] = useState('');
>>>>>>> 8cea2ee373b02c7ac053ee8cfa4b7d1bd32d1a16
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] =useState('');
  const [emailCode, setEmailCode] = useState(null);
  const [resetPassword, setReserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')
<<<<<<< HEAD
  console.log(userName,password,emailCode,resetPassword,isLoading,message,error,userName)
  */
enum MODL {
=======
  */

  enum MODL {
>>>>>>> 8cea2ee373b02c7ac053ee8cfa4b7d1bd32d1a16
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
  console.log(formTitle, buttonTitle)
  return (<div className ="w-[calc(100vh - 80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center text-center">
  <form className="flex flex-col gap-8"> 
 <h1 className = "text-2xl font-semibold">{formTitle}</h1>
    { mode === MODL.REGISTER ? (<div>
<<<<<<< HEAD
      <label forhtml="userName">Username</label>
=======
>>>>>>> 8cea2ee373b02c7ac053ee8cfa4b7d1bd32d1a16
    <input type="text" id="userName" name="username" placeholder="Enter Name"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):null}
    {
     mode === MODL.EMAIL_VERIFICATION ? (<div>
<<<<<<< HEAD
      <label forhtml="email">E-mail: </label>
    <input type="email" id="email" name="email" placeholder="example@gmail.com"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):(<div>
      <label forhtml="code">Email verification : </label>
=======
    <input type="email" id="email" name="email" placeholder="example@gmail.com"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):(<div>
>>>>>>> 8cea2ee373b02c7ac053ee8cfa4b7d1bd32d1a16
    <input type="code" id="code" name="email" placeholder="emailCode"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>)
    }
      { mode === MODL.REGISTER ? (<div>
<<<<<<< HEAD
      <label forhtml="userName">Username</label>
=======
>>>>>>> 8cea2ee373b02c7ac053ee8cfa4b7d1bd32d1a16
    <input type="text" id="userName" name="username" placeholder="Enter Name"  className="ring-2 ring-gary-300 rounded-md p-4"/> 
    </div>
    ):null}
    <p>{buttonTitle}</p>
  </form>
  <button>submit</button>
  <h1>form is low</h1>
  </div>)
}
export default LoginPage;
