import React from 'react'
import Slider from "react-slick";
import style from './header.module.css'

export default function BodySlider() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
    transition:false
  };
  return (
    <div className={style.mainSliderCont}>
      <div className={style.sliderS}>
        <Slider {...settings}>
          <div >
            <div className={style.features}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/home/Features_WaterTracking.svg' alt='1'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <h3 style={{ fontWeight: "bold" }}>Water Tracking</h3>
                <p>Track your water intake to make sure you're getting the recommended amount daily.</p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.features}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/home/Features_Macros.svg' alt='1'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <h3 style={{fontWeight:"bold"}}>Macro Tracking</h3>
                <p>Set personalized macronutrient goals to ensure you’re getting enough protein.</p>
              </div>
            </div>
          </div>
          <div>
          <div className={style.features}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/home/Features_DeviceIntegration.svg' alt='1'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <h3 style={{fontWeight:"bold"}}>Device Integration</h3>
                <p>Connect Apple Health and Google Fit for easy exercise tracking.</p>
              </div>
            </div>
          </div>
          <div className={style.features}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/home/Features_PatternsReports.svg' alt='1'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <h3 style={{fontWeight:"bold"}}>Water Tracking</h3>
                <p>Track your water intake to make sure you're getting the recommended.</p>
              </div>
            </div>
          <div>
          <div className={style.features}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/home/Features_Barcode.svg' alt='1'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <h3 style={{fontWeight:"bold"}}>Water Tracking</h3>
                <p>Track your water intake to make sure you're getting the recommended amount daily.</p>
              </div>
            </div>
          </div>
          <div className={style.features}>
              <div className={style.imgdiv}>
                <img src='https://assets.loseit.com/website/home/Features_SnapIt.svg' alt='1'></img>
              </div>
              <div className={style.divtxt} style={{width:"100%"}}>
                <h3 style={{fontWeight:"bold"}}>Water Tracking</h3>
                <p>Track your water intake to make sure you're getting .</p>
              </div>
            </div>

        </Slider>
        
      </div>
     
    </div>
  )
}
