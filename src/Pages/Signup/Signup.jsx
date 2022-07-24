import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link,useNavigate } from 'react-router-dom'
import styles from "../../All style module/Signup.module.css";
import { signupApi } from '../../store/auth/auth.action';
import { Spinner } from '@chakra-ui/react'

const Signup = () => {
    const nameRef=  useRef(null);
    const emailRef=  useRef(null);
    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
    const navigate = useNavigate();
   const [userCreds,setUserCreds] = useState({})
   const dispatch = useDispatch();
   const {signup:{loading,error,sucess},isAuth} = useSelector((state)=>state.auth)
let handleChange=(e)=>{
 let {name,value} = e.target;
   setUserCreds({
    ...userCreds,[name]:value
   })
} 

useEffect(() => {
  
nameRef.current.focus()
  return () => {
    
  }
}, [])

let handleContinue=()=>{
  let u= userCreds.username;
  let e = userCreds.email;
  let p = userCreds.password;
  let c = confirmRef.current.value
  if(!u && !e && !p && !c){
    nameRef.current.focus();
    setShow1(true);
    setShow2(true);
    setShow3(true);
    setShow4(true);
    return
  }
  if(!u){
     setShow1(true);
     nameRef.current.focus()
     return;
  }
  if(!e){
    setShow2(true);
     emailRef.current.focus();
     return;
  }
  if(!p || p.length<6){
    setShow3(true);
     passwordRef.current.focus();
     return;
  }
  if(!c){
    setShow4(true);
     confirmRef.current.focus();
     return;
  }
  if(c !== p){
    setShow4(true);
     confirmRef.current.focus();
     return;
  }
  dispatch(signupApi({
    username:u,
    email:e,
    password:p
  }))

}

useEffect(() => {
  if(isAuth){
    navigate("/home");
  }

  return () => {
    
  }
}, [isAuth])



 if(error){
    return(
      <div>
        <h1>Something went wrong...</h1>
      </div>
    )
  }
  return (
    <div>
<div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>
     {loading &&
  
  <div>
   <Spinner
  thickness='6px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
  </div>

}
     <div className={styles.middleDiv}>
     <div className={styles.middleInsideDiv}>
      <div >
      <h1 className={styles.currentW} >Create an account to save your plan</h1>
        <input name='username' className={show1?styles.inputW2:styles.inputW}  type={"text"} ref={nameRef} placeholder="First Name" onChange={(e)=>{
          handleChange(e)
          if(e.target.value){
            setShow1(false)
          }
        }} />
         <p className={styles.error}>{show1?"Please provide a first name.":""}</p>

        <input name='email' className={show2?styles.inputW3:styles.inputW1} type={"email"} ref={emailRef} placeholder="Email" onChange={(e)=>{
          handleChange(e)
          if(e.target.value){
            setShow2(false)
          }
        }} />
        <p className={styles.error}>{show2?"This appears to be an invalid email address.":""}</p>

        <input name='password' className={show3?styles.inputW3:styles.inputW1} type={"password"} ref={passwordRef} placeholder="Password (at least 6 charc..)" onChange={(e)=>{
          handleChange(e)
          if(e.target.value){
            setShow3(false)
          }
        }} />
        <p className={styles.error}>{show3?"Your password must be at least 6 characters.":""}</p>

        <input name='confirm' className={show4?styles.inputW3:styles.inputW1} type={"password"} ref={confirmRef} placeholder="Confirm Password" onChange={(e)=>{
          if(e.target.value){
            setShow4(false)
          }
        }} />
       <p className={styles.error}>{show4?"Your passwords must match.":""}</p>

        <div className={styles.details}>By continuing, you agree to Lose It!
          <p > <span className={styles.TC}>{"Terms & Conditions"}</span>  and <span className={styles.TC}>Privacy Policy</span></p></div>
         <button className={styles.btnYes} onClick={handleContinue}>Get Started</button>
      </div>
     </div>
     </div>
     
    </div>
  )
}

export default Signup