import React, { useState, useEffect } from 'react'
import { initializeApp } from '@firebase/app'
import { getAuth, createUserWithEmailAndPassword} from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOLMz6UwwXjbXzI0OwXECRmDOFFahPEu0",
    authDomain: "students-c6297.firebaseapp.com",
    projectId: "students-c6297",
    storageBucket: "students-c6297.appspot.com",
    messagingSenderId: "125306888697",
    appId: "1:125306888697:web:7939114799a71cdc181d28",
    measurementId: "G-KKBNGPTTT4"
};

const app = initializeApp(firebaseConfig);
export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    return (
        <>
            <div id='main'>
                <h1 className='head'>Faculty SignUp</h1>
                <input id="name" placeholder='Faculty Name' value={name} type="text" onChange={(e) => {
                    setName(e.target.value)
                }} />
                <input id="uname" placeholder='Faculty Email' value={email} type="email" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input id="password" placeholder='Faculty Password' value={password} type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <button id="signup" onClick={ async () => {
                    const auth = getAuth()
                    createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user
                      window.location.href = '/login'
                    })
                    .catch((error) => {
                       alert(error)
                       const errorCode = error.code;
                       const errorMessage = error.message;
                       console.log(errorCode, errorMessage)
                    })
                }} >SignUp</button>
                <a href='/login' id="signup2">Already registered faculty.Login</a>
            </div>
        </>
    )
}
