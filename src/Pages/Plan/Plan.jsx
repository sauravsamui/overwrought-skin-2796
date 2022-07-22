import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import styles from "../../All style module/Plan.module.css";
import star from "./star.png"
//import { SiTrustpilot } from "react-icons/si";
//FcCalendar FcRating
const Plan = () => {
const [date,setDate] = useState("")
    let handleContinue=()=>{
        const today = new Date()
        let m = today.toLocaleString('default', { month: 'long' })
        let t = today.getDate()
        let y = today.getFullYear()
        setDate(`${m} ${t}, ${y}`)
        
    }
    useEffect(() => {
      handleContinue()
      return () => {
        
      }
    }, [date])
    

  return (
    <div>

     <div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>

     <div className={styles.middleInsideDiv}>
      <div className={styles.arrow}><Link  to={"/birthday"}><button>{"<"}</button></Link></div>
       
      <h1 className={styles.currentW} >Your personal weight loss plan is ready.</h1>
      <div className={styles.watermelonDiv}> <img className={styles.watermelonImg} src="https://cdn-icons-png.flaticon.com/512/878/878030.png" alt="wm" />
        <div className={styles.watermelonInsideDiv}>
            <h1 className={styles.daily}>Daily calorie budget:</h1>
            <h1>1795 calories</h1>
        </div>
      </div>
      {/* //<IoCalendarOutline/> */}
      <div className={styles.calenderDiv}> 
      <img className={styles.watermelonImg} src="https://cdn-icons-png.flaticon.com/512/2370/2370271.png" alt="cal" />
        <div className={styles.calenderInsideDiv}>
            <h1>Weekly weight loss</h1>
            <h1>maintain</h1>
        </div>
      </div>
      {/* <SiTrustpilot fontSize={"50px"} color="yellowgreen"/>  */}
      <div className={styles.calenderDiv}> 
      <img className={styles.watermelonImg} src={star} alt="wm" />
      
        <div className={styles.calenderInsideDiv}>
            <p>Goal date:</p>
            <h1>{date}</h1>
        </div>
      </div>
        <br />
        <br />
        <Link to={"/signup"}><button className={styles.btnYes}>Get Lose it!</button></Link>
        <br />
        
      </div>




    </div>
  )
}

export default Plan