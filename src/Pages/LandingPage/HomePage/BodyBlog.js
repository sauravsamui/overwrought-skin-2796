import React from 'react'
import style from  "./header.module.css";

export default function BodyBlog() {
  return (
    <div className={style.BodyBlog}>
     <div className= {style.midtxt}><p>Weight Loss Made Easy</p></div>
     <div className={style.midflex}>
        <div className={style.flex}>
            <div className={style.flexElement}>
                <h3 style={{fontSize:"18px"}}>Set Your Goals</h3>
                <img src="https://assets.loseit.com/website/home/Home_SetGoal.svg" alt="flag" />
                <p style={{fontweight:"smaller",fontSize:"16px", color:"gray"}}>Tell us what you want to acheive and receive personalized goals.</p>
            </div>
            <div className={style.flexElement}>
                <h3 style={{fontSize:"18px"}}>Track Your Food</h3>
                <img src="https://assets.loseit.com/website/home/Home_TrackFoods.svg" alt="food"/>
                <p style={{fontweight:"smaller",fontSize:"16px", color:"gray"}}>Learn about the foods you’re eating and keep your calories within your daily budget.</p>
            </div>
            <div className={style.flexElement}>
                <h3 style={{fontSize:"18px"}}>Lose Weight</h3>
                <img src="https://assets.loseit.com/website/home/Home_LoseWeight.svg" alt="ribbon" />
                <p style={{fontweight:"smaller",fontSize:"16px", color:"gray"}}>Reach your goals and continue to set new ones for a happier, healthier you!</p>
            </div>
            <a data-destination="onboarding" data-source="loseit-header" href="https://loseit.com/get-started-v2/?source=loseit-header"></a>
        </div>
    
     </div>
    </div>
  )
}
