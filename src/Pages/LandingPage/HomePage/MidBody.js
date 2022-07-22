import React from 'react'
import style from './header.module.css'

export default function MidBody() {
    return (
        <div className={style.mainmid}>
            <div className={style.midimg1} style={{ width: "50%"}}>
                <img src='https://assets.loseit.com/website/home/Ticker_Celebratory.svg' alt='partypop'></img>
            </div>
            <div className={style.midtxt}>121,505,296</div>
            <h2 style={{ fontWeight: "bold" }}>POUNDS LOST</h2>
            <hr className={style.midhr} style={{ height: "" }} />
            <h3>AS SEEN ON</h3>
            <div id={style.seenOnLogos} style={{ display: "flex" }}>
                <img src="https://assets.loseit.com/website/home/Feature_TodayShow.png" alt="today show" />
                <img src="https://assets.loseit.com/website/home/Feature_People.png" alt="People magazine" />
                <img src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png" alt="good morning america" />
                <img src="https://assets.loseit.com/website/home/Feature_WomensHealth.png" alt="women's health" />
            </div>
            <div className={style.story} style={{padding:'1%'}}>
                <h2 style={{color:"white"}}>Advice from Successful Members</h2>
                <div className={style.flexCard}>
                    <div className={style.card1}>
                        <img src='https://assets.loseit.com/website/home/Advice_Carla.png' alt='a' />
                        <p style={{color:"orange"}}>Track every single bite you take. You need to know how you’re doing before dinner. If you don’t,
                    things can get away from you fast."</p>
                    <span style={{color:"white"}}>- Carla, 65 lbs lost without giving up pizza.</span>
                    </div>
                    <div className={style.card2}>
                        <img src='https://assets.loseit.com/website/home/Advice_Alex.png' alt='b' />
                        <p style={{color:"orange"}}>Everyday is a battle, and you have to make the choice each morning to fight for your health and wellness"</p>
                        <span style={{color:"white"}}>- Alex, lost 85 lbs for his wedding.</span>
                    </div>
                    
                </div>
                <button style={{color:"white",backgroundColor:"orange", borderRadius:"5px", fontSize:"smaller",padding:"0.6%"}}>Share Your Story</button>
            </div>
           
        </div>
    )
}
