import React from 'react'
import Navbar from './Navbar'
import  Products  from './Products'
import Carousel from './Carousel'
import { useState, useEffect } from 'react'
import {auth, fs } from '../Config/Config'
import { collection, getDocs, query, where } from 'firebase/firestore'



export const Home = () => {

   function GetCurrentUser() {
      const [user, setUser] = useState('')
      const userCollectionRef = collection(fs, "users");

      useEffect(() => {
         auth.onAuthStateChanged(userlogged => {
            if(userlogged) {
               const getUsers = async () => {
                  const q = query(collection(fs, "users"), where("uid", "==", userlogged.uid))
                  console.log(q);
                  const data = await getDocs(q);
                  // console.log(data.docs);
                  setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
                  // console.log(setUser)
               }
               getUsers();
            }else {
               setUser('asd');
            }
         })
      },[])
      return user;
   }

   const loggeduser = GetCurrentUser();
  
   console.log(loggeduser);
  return (
     <>
        <Navbar/>
        <Carousel/>
        <Products/>
         {/* contact */}
         {/* footer */}
     </>
  )
}
