import React from 'react'
import Slider from "react-slick";
import style from './advice.module.css'

export default function BodySlider() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    transition:false
  };
  return (
    <div className={style.mainSliderCont}>
      <div className={style.sliderS}>
        <Slider {...settings}>
          <div >
            <div className={style.feature}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/HIW/advice_robbie.png' alt='1'></img>
              </div>
              <div className={style.divtxt} >
                <p>"Don’t be afraid of foods. Carbs are not the enemy. Fruit is not the enemy. Cheesecake is not the
                        enemy. Pizza is a weekly thing for me. Just adjust the rest of the day around these higher
                        calorie things.”</p><br></br>
                <p style={{color:"#FF9400"}}>Robbie, 52 lbs lost</p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.feature}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/HIW/advice_carla.png' alt='2'></img>
              </div>
              <div className={style.divtxt} >
                <p>"Don’t be afraid of foods. Carbs are not the enemy. Fruit is not the enemy. Cheesecake is not the
                        enemy. Pizza is a weekly thing for me. Just adjust the rest of the day around these higher
                        calorie things.”</p><br></br>
                <p style={{color:"#FF9400"}}>Carla , 65 lbs lost</p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.feature}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/HIW/advice_lindsay.png' alt='3'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <p >"Track, track, track!"</p><br></br>
                <p style={{color:"#FF9400"}}>Lindsay, 82 lbs lost</p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.feature}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/HIW/advice-free_ashley.png' alt='4'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <p>"My favorite things about Lose It! are the simple tracking and the badges. The badges are very
                        motivating."</p><br></br>
                <p style={{color:"#FF9400"}}>Ashley, lost 176 ibs with Lose it Basic!</p>
              </div>
            </div>
            </div>
            <div>
          <div className={style.feature}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/HIW/advice_lindsay.png' alt='5'></img>
              </div>
              <div className={style.divtxt} >
                <p>"Track, track, track!"</p><br></br>
                <p style={{color:"#FF9400"}}>Lindsay, 82 lbs lost</p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.feature}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/HIW/advice-premium_clayton.png' alt='6'></img>
              </div>
              <div className={style.divtxt}>
                <p>“I really like the food/calorie tracker and how easy it is to use. It's really eye-opening to see
                        how much I was taking in throughout the day and how many calories were in foods that I
                        considered not that bad. Once I was able to see this and hold myself accountable, it became much
                        easier to lose the weight.”</p><br></br>
                <p style={{color:"#FF9400"}}>Clayton, 50 lbs lost</p>
              </div>
            </div>
            </div>

        </Slider>
        
      </div>
    </div>
  )
}
