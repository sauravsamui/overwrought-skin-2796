import React from 'react'
import style from "./job.module.css";

export default function Jobfooter() {
  return (
    <div>
    <div style={{width:"85%", margin:"auto"}}>
        <div className={style.Jobfooterflex}>
            <div style={{width:"32%"}}><img style={{width:"100%"}}src="https://assets.loseit.com/website/corporate/redsox_photo1.jpg"/> </div>


            <div style={{width:"32%"}}><img  style={{width:"100%"}}src="https://assets.loseit.com/website/corporate/socialHour.jpg"/></div>


            <div style={{width:"32%"}}><img style={{width:"100%"}} src="https://assets.loseit.com/website/corporate/redsox.jpg"/></div>
        </div>
        </div>
    </div>
  )
}
