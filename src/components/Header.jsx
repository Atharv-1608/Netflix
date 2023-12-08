import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AVATAR, LOGO_URL } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const handleClick = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(()=>{
   const unsubcribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,displayName,email} = user;
        dispatch(addUser(
          {
            uid:uid,email:email,displayName:displayName
          }
          ));
          navigate('/browse')
      }
      else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubcribe();
  },[])

  return (
    <div className='absolute bg-gradient-to-b from-black z-10 flex justify-between'>
      <img src={LOGO_URL} alt="logoS" className='w-1/6 ' />

      {user && <div className='flex m-4 items-center'>
          <img src={AVATAR} alt="logo" className='h-10 w-auto mr-2' />
          <button className='w-16 h-auto 'onClick={handleClick}>Sign Out</button>
      </div>}

    </div>
  )
}

export default Header
