import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Weight.module.css"
const Weight = () => {
    const ref=  useRef(null)

useEffect(() => {
  
ref.current.focus()
  return () => {
    
  }
}, [])



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
        <input className={styles.inputW1} type={"number"} ref={ref} />
        <select className={styles.selectW} >
            <option value={"lb"}>lb</option>
            <option value={"kg"}>kg</option>
        </select>
        <h1 className={styles.goalW}>Goal Weight</h1>
        <input className={styles.inputW} type={"number"}  />
        <select className={styles.selectW}>
            <option value={"lb"}>lb</option>
            <option value={"kg"}>kg</option>
        </select>
        <br />
        <Link to={"/weight"}><button className={styles.btnYes}>Continue</button></Link>
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