import React from "react";
import style from "./header.module.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
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
        backgroundColor: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function () {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div>
        <div className={style.mainContainer}>
          <h2 style={{  padding: "1%" }}>
            A Balanced Approach to Weight Loss
          </h2>
          <p id={style.mainp}>
            Get motivated with these nutrition and wellness tips and user
            success stories!
          </p>
          <div className={style.slickCont}>
            <Slider {...settings2}>
              <div>
                <div className={style.slcard}>
                  <div className={style.slimg}>
                    <img
                      src="https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1"
                      alt="1"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>
                      Setting Macronutrient Goals: How Many Macros do You Need?
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className={style.slcard}>
                  <div className={style.slimg}>
                    <img
                      src="https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/02/Quick-tips-to-make-healthier-choices.png?w=1010&ssl=1"
                      alt="2"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Quick Tips to Make Healthier Decisions</p>
                  </div>
                </div>
              </div>

              <div>
                <div className={style.slcard}>
                  <div className={style.slimg}>
                    <img
                      src="https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-132.png?w=1010&ssl=1"
                      alt="3"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>12 Protein-Packed Snacks to Curb Hanger Quick</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.slcard}>
                  <div className={style.slimg}>
                    <img
                      src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/health-benefits-of-seltzer-water.png?w=1010&ssl=1"
                      alt="4"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Is Drinking Seltzer Actually Healthy?</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.slcard}>
                  <div className={style.slimg}>
                    <img
                      src="https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-135.png?w=1010&ssl=1"
                      alt="5"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Fun 20-Minute Treadmill Workouts</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={style.slcard}>
                  <div className={style.slimg}>
                    <img
                      src="https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/01/Seven-benefits-of-sleep.png?w=1010&ssl=1"
                      alt="6"
                    />
                  </div>
                  <div className={style.sltxt}>
                    <p>Seven Strategies for a Better Nights Sleep</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <button className={style.button1}>Get Weight Loss Tips</button>
      </div>

      
    </div>
  );
}

// import style from "../../LandingPage/HomePage/header.module.css";
