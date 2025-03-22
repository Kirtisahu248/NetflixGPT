import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null)
  const password = useRef(null)
  const [errorMessage,setErrorMessage] = useState(null)

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () =>{
    //validate the form data
   const message =  checkValidateData(email.current.value,password.current.value)
   setErrorMessage(message)
   //sign in logic here
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          alt="bgImage"
        />
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className="absolute bg-black my-36 mx-auto p-10 opacity-90 left-0 right-0 w-3/12 text-white rounded-md">
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign up"} 
        </h1>
         {!isSignInForm &&  <input
          className="w-full p-4 my-4 border border-gray-500 bg-[#101010] rounded-md "
          type="text"
          placeholder="Full Name"
        />}
        <input
        ref={email}
          className="w-full p-4 my-4 border border-gray-500 bg-[#101010] rounded-md "
          type="text"
          placeholder="Email Address"
        />
        <input
        ref={password}
          className="w-full p-4 my-4 border border-gray-500 rounded-md bg-[#101010]"
          type="password"
          placeholder="Enter Password"
        />
        <p className="font-bold text-lg text-red-500">{errorMessage}</p>
        <button className="w-full p-4 my-4 font-bold bg-red-700" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>

        <p className="inline text-gray-200 p-2">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
        </p>
        <span
          className="font-bold cursor-pointer hover:border-b border-white"
          onClick={toggleSingInForm}
        >
          {isSignInForm ? "Sign up now" : "Sign In Now"}
        </span>
      </form>
    </div>
  );
};

export default SignIn;
