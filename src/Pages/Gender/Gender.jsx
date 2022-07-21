import React, { useEffect, useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "../../All style module/Gender.module.css";

const Gender = () => {
   
    const navigate = useNavigate()
  

    let handleContinue=(value)=>{
          
         let weightH= JSON.parse(localStorage.getItem("weightH"));
         weightH={
            ...weightH,
            gender:value
           
         }
         localStorage.setItem("weightH",JSON.stringify(weightH));
         navigate("/birthday")
    }

  return (
    <div>

     <div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>

     <div className={styles.middleInsideDiv}>
      <div className={styles.arrow}><Link  to={"/height"}><button>{"<"}</button></Link></div>
       
      <h1 className={styles.currentW} >Select your biological sex:</h1>
        <br />
        <br />
        <button className={styles.btnYes} onClick={()=>{
            handleContinue("female")}}>Female</button>
        <br />
        <button className={styles.btnYes1} onClick={()=>{
            handleContinue("male")}}>Male</button>
      
        <p className={styles.details}>To create your personalized weight loss plan, Lose It! uses BMR (Basal Metabolic Rate) to calculate
             your calorie budget, which requires weight,
             height, biological sex and age as inputs.</p>
      </div>




    </div>
  )
}

export default Gender