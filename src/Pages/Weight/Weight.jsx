import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import styles from "../../All style module/Weight.module.css";


const Weight = () => {
    const currentWref=  useRef(null)
    const [unitSelect,setUnitSelect] = useState("lb")
    const goalWref=  useRef(null)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const navigate = useNavigate()
useEffect(() => {
  
currentWref.current.focus()
  return () => {
    
  }
}, [])

let handleContinue=()=>{
  let c =currentWref.current.value;

    let g =goalWref.current.value;
  
  

  if(!c || c<25 || c >200){
     setShow1(true);
     currentWref.current.focus();
     return;
  }
  if(!g || g<25 || g>200){
    setShow2(true);
     currentWref.current.focus();
     return;
  }
  let weightH={
    curWeight:c,
    goalWeight:g,
    unit:unitSelect
  }
  localStorage.setItem("weightU",JSON.stringify(weightH));
  navigate("/height")
 
}


  return (
    <div>
<div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>
     <div className={styles.middleDiv}>
        <h1 className={styles.middleDivHead}>You know the deal! Follow your calorie budget to eat less than you burn and lose weight.</h1>
     <div className={styles.middleInsideDiv}>
      <div className={styles.arrow}><Link  to={"/question"}><button>{"<"}</button></Link></div>
      <div >
        <h1 className={styles.currentW} >Current Weight</h1>
        <input  className={styles.inputW1} type={"number"} ref={currentWref} onChange={(e)=>{
          if(e.target.value){
            setShow1(false)
          }
        }} />
        <select className={styles.selectW}  value={unitSelect} onChange={(e)=>setUnitSelect(e.target.value)}>
            <option value={"lb"}>lb</option>
            <option value={"kg"}>kg</option>
        </select>
        <br />
        <p style={{color:"red"}}>{show1?"This is an unsupported weight.":""}</p>
        <h1 className={styles.goalW}>Goal Weight</h1>
        <input  className={styles.inputW} type={"number"} ref={goalWref} onChange={(e)=>{
          if(e.target.value){
            setShow2(false)
          }
        }} />
        <select className={styles.selectW} value={unitSelect} onChange={(e)=>setUnitSelect(e.target.value)}>
            <option value={"lb"}>lb</option>
            <option value={"kg"}>kg</option>
        </select>
        <br />
        <p style={{color:"red"}}>{show2?"This is an unsupported weight.":""}</p>
        <br />
        <button className={styles.btnYes} onClick={handleContinue}>Continue</button>
        <p className={styles.details}>To create your personalized weight loss plan, Lose It! uses BMR (Basal Metabolic Rate) to calculate
             your calorie budget, which requires weight,
             height, biological sex and age as inputs.</p>
      </div>
     </div>
     </div>
     
    </div>
  )
}

export default Weight