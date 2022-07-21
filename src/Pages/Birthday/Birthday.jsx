import React, {useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "../../All style module/Birthday.module.css";

const Birthday = () => {
   const[show1,setShow1] = useState(false);
   const[show2,setShow2] = useState(false);
   const dateRef = useRef("");
    const navigate = useNavigate();
  

    let handleContinue=()=>{
          let d = dateRef.current.value;
          let y = d.slice(0,4)
          let f = new Date().getFullYear();
          
          if(!d){
            setShow2(true);
            setShow1(false)
            return
          }
          if(Number(f)-Number(y) < 18){
              setShow1(true);
              setShow2(false);
              return
          }
         
         let weightH= JSON.parse(localStorage.getItem("weightH"));
         weightH={
            ...weightH,
            dob:dateRef.current.value
           
         }
         localStorage.setItem("weightH",JSON.stringify(weightH));
         navigate("/plan")
    }

  return (
    <div>

     <div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>

     <div className={styles.middleInsideDiv}>
      <div className={styles.arrow}><Link  to={"/gender"}><button>{"<"}</button></Link></div>
       
      <h1 className={styles.currentW} >When's your birthday?</h1>
      <input type="date" className={styles.inputDate} ref={dateRef} />
      <p style={{color:"red"}}>{show1?"You must be at least 18 years old to use Lose It!.":""}</p>
      <p style={{color:"red"}}>{show2?"This is an invalid height.":""}</p>
        <br />
        <br />
        <button className={styles.btnYes} onClick={()=>{
            handleContinue()}}>Continue</button>
        <br />
        
      
        <p className={styles.details}>To create your personalized weight loss plan, Lose It! uses BMR (Basal Metabolic Rate) to calculate
             your calorie budget, which requires weight,
             height, biological sex and age as inputs.</p>
      </div>




    </div>
  )
}

export default Birthday