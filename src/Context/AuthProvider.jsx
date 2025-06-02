import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'


const auth = getAuth();
const AuthProvider = ({children}) => {

   const createUser =()=>{
    return (createUserWithEmailAndPassword(auth,email, password)
    .then((userData)=>{
        console.log(userData)
    }))
   }
   
// project-562013229402
    const authInfo={
        createUser
    }
  return (
    <>
        <AuthContext value={authInfo}>{children}</AuthContext>
    </>
  )
}

export default AuthProvider
