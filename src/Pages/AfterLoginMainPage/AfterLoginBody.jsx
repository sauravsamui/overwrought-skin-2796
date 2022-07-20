import React, { useState } from "react";
import style from "../../All style module/AfterLoginMainPageBody.module.css";
import food1 from "../../assets/Icons/food1.png";
import ex1 from "../../assets/Icons/ex1.png";
import breakFast from "../../assets/Icons/breakFast.png";
import lunch from "../../assets/Icons/lunch.png";
import dinner from "../../assets/Icons/dinner.png";
import snaks from "../../assets/Icons/snaks.png";
const AfterLoginBody = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const hanldeDropOpen = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div class={style.MainBody}>
      <div className={style.leftBody}>
        <div className={style.LeftBody_SelectSetion}>
          <div style={{ position: "relative" }}>
            <div onClick={hanldeDropOpen}>
              <img src={food1} alt="food1" />
              <div
                className={style.dropdown__food}
                style={{ display: showDropdown ? "block" : "none" }}
              >
                <div className={style.dropdown_button}>
                  <img src={breakFast} alt="breakFast" />
                  breakFast
                </div>

                <div className={style.dropdown_button}>
                  <img src={lunch} alt="lunch" />
                  lunch
                </div>
                <div className={style.dropdown_button}>
                  <img src={dinner} alt="dinner" />
                  dinner
                </div>
                <div className={style.dropdown_button}>
                  <img src={snaks} alt="snaks" />
                  snaks
                </div>
              </div>
            </div>

            <div>
              <img src={ex1} alt="ex1" />
            </div>
          </div>
        </div>
        {/* ///////////////drop finis */}

        {/* left body section start */}

        <div></div>
      </div>
      <div className={style.RightBody}></div>
    </div>
  );
};

export default AfterLoginBody;
