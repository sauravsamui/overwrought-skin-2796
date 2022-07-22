import React from 'react'
import Slider from "react-slick";

export default function BodySlider() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div>
      <div className={style.slider}>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div >
          <div className={style.features}>
           <img src='https://assets.loseit.com/website/home/Features_WaterTracking.svg' alt='1'></img>
           <h3>Water Tracking</h3>
           <p>Track your water intake to make sure you're getting the recommended amount daily.</p>
           </div>
          </div>
          <div>
          <div className={style.features}>
           <img src='https://assets.loseit.com/website/home/Features_Macros.svg' alt='2'></img>
           <h3>Macro Tracking</h3>
           <p>Set personalized macronutrient goals to ensure you’re getting enough protein, carbs, and more.</p>
           </div>
          </div>
          <div>
          <div className={style.features}>
           <img src='https://assets.loseit.com/website/home/Features_DeviceIntegration.svg' alt='3'></img>
           <h3>Device Integration</h3>
           <p>Connect Apple Health and Google Fit for easy exercise tracking.</p>
           </div>
          </div>
          <div>
          <div className={style.features}>
           <img src='https://assets.loseit.com/website/home/Features_PatternsReports.svg' alt='4'></img>
           <h3>Patterns & Reports</h3>
           <p>Get reports on your behaviors and progress straight to your inbox.</p>
           </div>
          </div>
          <div>
          <div className={style.features}>
           <img src='https://assets.loseit.com/website/home/Features_Barcode.svg' alt='5'></img>
           <h3>Scanner Feature</h3>
           <p>Use your camera to scan package barcodes for quick tracking or create new foods with the nutrition label auto-fill.</p>
           </div>
          </div>
          <div>
          <div className={style.features}>
           <img src='https://assets.loseit.com/website/home/Features_SnapIt.svg' alt='6'></img>
           <h3>Smart Camera</h3>
           <p>Use your camera to take a picture of your food and allow Lose It! technology to help you log it.</p>
           </div>
          </div>
         
        </Slider>
      </div>
    </div>
  )
}
