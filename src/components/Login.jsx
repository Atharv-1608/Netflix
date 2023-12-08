import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import {PHOTO} from '../utils/constants'
const Login = () => {
  
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
         
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: PHOTO
        }).then(() => {
          const {uid,displayName,email} = auth.currentUser;
        dispatch(addUser(
          {
            uid:uid,email:email,displayName:displayName
          }
          ));
        }).catch((error) => {
          navigate('/error')
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
        
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }

  };

  return (
    
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" className='bg-cover'  /> 
      </div>
      <form className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70' onSubmit={(e)=> e.preventDefault()}>
        <p className='text-white text-3xl mb-4 font-semibold'>{isSignInForm?"Sign In":"Sign Up"}</p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input type="text" ref={email} placeholder='Email' className='p-4 rounded-md my-4 w-full bg-gray-700' />
        <input type="password" ref={password} placeholder='Password' className='p-4 rounded-md my-4 w-full bg-gray-700' />
        <button className='bg-red-700 p-4 my-4 rounded-lg w-full ' 
          onClick={handleButtonClick}
        >{ 
        isSignInForm
          ? "Sign In"
          : "Sign Up"
        }</button>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login

