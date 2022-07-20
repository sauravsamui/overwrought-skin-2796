import React from 'react'
import { Link } from 'react-router-dom'

import styles from "../../All style module/Question.module.css";
const Question = () => {
  return (
    <div>
     <div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>
     <div className={styles.middleDiv}>
        <div className={styles.leftDiv}>
         <h1 className={styles.leftDivHead}>Take the first step towards
          a healthier you with Lose It!</h1>
          <div className={styles.leftDivImgDiv}>
            <div>
            <img className={styles.leftDivImg} src="https://assets.loseit.com/website/onboarding/SetGoal.svg" alt='goals'/>
            <p>SET YOUR GOALS</p>
            </div>
            <div>
            <img className={styles.leftDivImg} src="https://assets.loseit.com/website/onboarding/TrackFoods.svg" alt='foods'/>
            <p>TRACK YOUR FOODS</p>
            </div>
            <div>
            <img className={styles.leftDivImg} src="https://assets.loseit.com/website/onboarding/LoseWeight.svg" alt='weights'/>
            <p>LOSE WEIGHT</p>
            </div>
           
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.insideRight}>
           <h1 className={styles.rightDivHead}>Have you counted calories before?</h1>
            <Link to={"/weight"}><button className={styles.btnYes}>YES</button></Link>
            <br/>
            <br/>
            <Link to={"/weight"}> <button className={styles.btnNo} >NO</button></Link>
           
          </div>
         </div>
          
     </div>


    </div>
  )
}

export default Question