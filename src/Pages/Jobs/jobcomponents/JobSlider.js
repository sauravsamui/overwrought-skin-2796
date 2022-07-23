import React from "react";
import style from "../../LandingPage/HomePage/header.module.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        
        background: "gray",
        borderRadius: "50%",

      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function () {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div>
        <div className={style.mainContainer}>
          <h2 style={{ fontWeight: "bold", padding: "1%", fontSize:"30px" ,color:"rgb(19, 59, 103)"}}>
          Perks & Benefits
          </h2>
          
          <div className={style.slickCont}>
            <Slider {...settings2}>
              <div>
                <div className={style.slcard}>
                  <div className={style.jobsliderimg}>
                    <img 
                      src="https://assets.loseit.com/2020/flexible-hours.png"
                      alt="1"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>
                    Flexible Hours
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className={style.slcard}>
                  <div className={style.jobsliderimg}>
                    <img
                      src="https://assets.loseit.com/2020/wellness.png"
                      alt="2"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Wellness Reimbursement</p>
                  </div>
                </div>
              </div>

              <div>
                <div className={style.slcard}>
                  <div className={style.jobsliderimg}>
                    <img
                      src="https://assets.loseit.com/2020/annual-retreat.png"
                      alt="3"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Annual Company Retreat</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.slcard}>
                  <div className={style.jobsliderimg}>
                    <img
                      src="https://assets.loseit.com/2020/vacation.png"
                      alt="4"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Open Vacation Policy</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.slcard}>
                  <div className={style.jobsliderimg}>
                    <img
                      src="https://assets.loseit.com/2020/profit-sharing.png"
                      alt="5"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Profit Sharing</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.slcard}>
                  <div className={style.jobsliderimg}>
                    <img
                      src="https://assets.loseit.com/2020/health-dental-vision.png"
                      alt="6"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Health ,Dental,Vision</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
     

      
    </div>
  );
}