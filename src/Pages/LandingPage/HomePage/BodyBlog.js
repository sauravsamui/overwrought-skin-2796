import React from 'react'
import style from  "./header.module.css";

export default function BodyBlog() {
  return (
    <div className={style.BodyBlog}>
     <div className= {style.midtxt}><p>Weight Loss Made Easy</p></div>
     <div className={style.midflex}>
        <div className={style.flex}>
            <div className={style.flexElement}>
                <h3>Set Your Goals</h3>
                <img src="https://assets.loseit.com/website/home/Home_SetGoal.svg" alt="flag" />
                <p>Tell us what you want to acheive and receive personalized goals.</p>
            </div>
            <div className={style.flexElement}>
                <h3>Track Your Food</h3>
                <img src="https://assets.loseit.com/website/home/Home_TrackFoods.svg" alt="food"/>
                <p>Learn about the foods you’re eating and keep your calories within your daily budget.</p>
            </div>
            <div className={style.flexElement}>
                <h3>Lose Weight</h3>
                <img src="https://assets.loseit.com/website/home/Home_LoseWeight.svg" alt="ribbon" />
                <p>Reach your goals and continue to set new ones for a happier, healthier you!</p>
            </div>
            <a data-destination="onboarding" data-source="loseit-header" href="https://loseit.com/get-started-v2/?source=loseit-header">Get Started</a>
        </div>
    
     </div>
    </div>
  )
}
