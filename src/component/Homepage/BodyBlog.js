import React from 'react'
import "./header.css";

export default function BodyBlog() {
  return (
    <div className='BodyBlog'>
     <div className="midtxt" style={{alignItems:"center",textAlign:"center"}}><p>Weight Loss Made Easy</p></div>
     <div className='midflex'>
        <div class="flex" style={{display:"flex", marginLeft:"10%",marginRight:"10%"}}>
            <div class="flexElement">
                <h3>Set Your Goals</h3>
                <img src="https://assets.loseit.com/website/home/Home_SetGoal.svg" alt="flag" />
                <p>Tell us what you want to acheive and receive personalized goals.</p>
            </div>
            <div class="flexElement">
                <h3>Track Your Food</h3>
                <img src="https://assets.loseit.com/website/home/Home_TrackFoods.svg" alt="food"/>
                <p>Learn about the foods you’re eating and keep your calories within your daily budget.</p>
            </div>
            <div class="flexElement">
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
