import React, { useEffect, useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "../../All style module/Height.module.css";

const Height = () => {
    const [show,setShow] = useState(false);
    const [heighFt,setHeightFt]=  useState()
    const heightref = useRef()
    const heightCm = useRef(null)
    const navigate = useNavigate()
    const [unitSelect,setUnitSelect] = useState("ft/in")
    useEffect(() => {
  
        heightref.current.focus()
          return () => {
            
          }
        }, [])

    let handleContinue=()=>{
        let h =heighFt;
        if(heightCm.current){
            var cm = heightCm.current.value
        }
        
        if(!h && unitSelect=="ft/in"){
            setShow(true);
            return;
         }
         if((!cm || cm<65) && unitSelect=="cm"){
            setShow(true);
            heightCm.current.focus();
            return;
         }
         
         let weightH= JSON.parse(localStorage.getItem("weightH"));
         weightH={
            ...weightH,
            hUnit:unitSelect,
            height: unitSelect=="cm"?cm:h
         }
         localStorage.setItem("weightH",JSON.stringify(weightH));
         navigate("/gender")
    }

  return (
    <div>

     <div className={styles.headerDiv}>
      <Link to={"/"}><img className={styles.headerImg} src='https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg' alt='header'/></Link>
     </div>

     <div className={styles.middleInsideDiv}>
      <div className={styles.arrow}><Link  to={"/weight"}><button>{"<"}</button></Link></div>
       
      <h1 className={styles.currentW} >What's your height?</h1>
      <>
       { unitSelect=="ft/in"?<select className={styles.selectW}  ref={heightref} onChange={(e)=>{
          if(e.target.value){
            setHeightFt(e.target.value)
            setShow(false)
          }
        }}>
            <option hidden>--</option>
            <option value={`2'5"`}>2'5"</option>
            <option value={`2'6"`}>2'6"</option>
            <option value={`2'7"`}>2'7"</option>
            <option value={`2'8`}>2'8"</option>
            <option value={`2'9"`}>2'9"</option>
            <option value={`2'10"`}>2'10"</option>
            <option value={`3'5"`}>3'5"</option>
            <option value={`3'6"`}>3'6"</option>
            <option value={`3'7"`}>3'7"</option>
            <option value={`3'8"`}>3'8"</option>
            <option value={`3'9"`}>3'9"</option>
            <option value={`3'10"`}>3'10"</option>
            <option value={`4'1"`}>4'1"</option>
            <option value={`4'2"`}>4'2"</option>
            <option value={`4'5"`}>4'5"</option>
            <option value={`4'6"`}>4'6"</option>
            <option value={`4'7"`}>4'7"</option>
            <option value={`4'8"`}>4'8"</option>
            <option value={`4'9"`}>4'9"</option>
            <option value={`4'10"`}>4'10"</option>
            <option value={`4'11"`}>4'11"</option>
            <option value={`5'1"`}>5'1"</option>
            <option value={`5'2"`}>5'2"</option>
            <option value={`5'5"`}>5'5"</option>
            <option value={`5'6"`}>5'6"</option>
            <option value={`5'7"`}>5'7"</option>
            <option value={`5'8"`}>5'8"</option>
            <option value={`5'9"`}>5'9"</option>
            <option value={`5'10"`}>5'10"</option>
            <option value={`5'11"`}>5'11"</option>
            <option value={`6'1"`}>6'1"</option>
            <option value={`6'2"`}>6'2"</option>
            <option value={`6'5"`}>6'5"</option>
            <option value={`6'6"`}>6'6"</option>
            <option value={`6'7"`}>6'7"</option>
            <option value={`6'8"`}>6'8"</option>
            <option value={`6'9"`}>6'9"</option>
            <option value={`6'10"`}>6'10"</option>
            <option value={`7'1"`}>7'1"</option>
            <option value={`7'2"`}>7'2"</option>
            <option value={`7'5"`}>7'5"</option>
            <option value={`7'6"`}>7'6"</option>
            <option value={`7'7"`}>7'7"</option>
            <option value={`7'8"`}>7'8"</option>
            <option value={`7'10"`}>7'10"</option>
            <option value={`7'11"`}>7'11"</option>
            <option value={`8'1"`}>8'1"</option>
            <option value={`8'2"`}>8'2"</option>
            <option value={`8'5"`}>8'5"</option>
            <option value={`8'6"`}>8'6"</option>
            <option value={`8'7"`}>8'7"</option>
            <option value={`8'8"`}>8'8"</option>
            <option value={`8'9"`}>8'9"</option>
           
        </select>: <input  className={styles.inputW} ref={heightCm} type={"number"} onChange={(e)=>{
          if(e.target.value && e.target.value>65){
            setShow(false)
          }
        }} />}</>
        <select className={styles.selectW} value={unitSelect}
         onChange={(e)=>{
            if(heightref.current.value && heightref.current.value<65){
                setShow(true);
                return
            }
            else if(heightref.current.value && heightref.current.value>65){
                setShow(false)
                setUnitSelect(e.target.value)
                return;
            }
            setUnitSelect(e.target.value)}}>
            <option value={"ft/in"}>ft/in</option>
            <option value={"cm"}>cm</option>
        </select>
        <br />
        <p style={{color:"red"}}>{show?"This is an invalid height.":""}</p>
        <br />
        <button className={styles.btnYes} onClick={handleContinue}>Continue</button>
        <p className={styles.details}>To create your personalized weight loss plan, Lose It! uses BMR (Basal Metabolic Rate) to calculate
             your calorie budget, which requires weight,
             height, biological sex and age as inputs.</p>
      </div>




    </div>
  )
}

export default Height