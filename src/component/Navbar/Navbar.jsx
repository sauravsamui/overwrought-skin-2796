import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { logout } from '../../store/auth/auth.action';
const Navbar = () => {
  const {isAuth} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  console.log(isAuth)
   return (
    <div>
         <Link to={"/"}>Home</Link>
        <Link to={"/question"}>Signup</Link>
        {/* <Link to={"/login"}>login</Link> */}
        <button onClick={()=> dispatch(logout())}>{isAuth?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar