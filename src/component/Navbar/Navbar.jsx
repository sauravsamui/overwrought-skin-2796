import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
         <Link to={"/"}>Home</Link>
        <Link to={"/question"}>Signup</Link>
    </div>
  )
}

export default Navbar