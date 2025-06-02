import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/Firebase.config'


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null)

   const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password).finally(()=>{setLoading(false)})
    
   }

   const updateUser = (updateData)=>{
    setLoading(true)
    return  updateProfile(auth.currentUser, updateData).finally(()=>setLoading(false))
   }
   

   // project-562013229402
   const authInfo={
       user,
       createUser,
       updateUser,
       setUser
    }


    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
 
             setUser(currentUser);
             setLoading(false);
         });
 
         return ()=>{
             unSubscribe()
         }
 
    },[])
  return (
    <>
        <AuthContext value={authInfo}>{children}</AuthContext>
    </>
  )
}

export default AuthProvider
