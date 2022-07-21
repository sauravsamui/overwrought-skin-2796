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

        <div className={style.leftBodyDataDetails}>
          <div className={style.leftBodyDataDetails_header}>
            <h6>Budget</h6>
            <h6>Food</h6>
            <h6>Exercise</h6>
            <h6>Net</h6>
            <h6>Under</h6>
          </div>
          <div className={style.leftBodyDataDetails_header_value}>
            <h6>1600</h6>
            <h6>-</h6>
            <h6>-</h6>
            <h6>-</h6>
            <h6>-</h6>
          </div>
          <div className={style.line}></div>

          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Breakfast: 0</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
            />
          </div>
          <div
            className={style.left__container__food__box}
            id={style.breakfast_box}
          >
            <table
              id={style.breakfast_table}
              style={{ display: "none" }}
            ></table>
            <p id={style.breakfast_para}>No food logged for breakfast</p>
          </div>

          <div className={style.line}></div>

          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Lunch: 0</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
            />
          </div>
          <div
            className={style.left__container__food__box}
            id={style.breakfast_box}
          >
            <table
              id={style.breakfast_table}
              style={{ display: "none" }}
            ></table>
            <p id={style.breakfast_para}>No food logged for breakfast</p>
          </div>

          <div className={style.line}></div>

          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Dinner: 0</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
            />
          </div>
          <div
            className={style.left__container__food__box}
            id={style.breakfast_box}
          >
            <table
              id={style.breakfast_table}
              style={{ display: "none" }}
            ></table>
            <p id={style.breakfast_para}>No food logged for breakfast</p>
          </div>

          <div className={style.line}></div>

          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Snakes: 0</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
            />
          </div>
          <div
            className={style.left__container__food__box}
            id={style.breakfast_box}
          >
            <table
              id={style.breakfast_table}
              style={{ display: "none" }}
            ></table>
            <p id={style.breakfast_para}>No food logged for breakfast</p>
          </div>

          <div className={style.line}></div>

          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Breakfast: 0</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
            />
          </div>
          <div
            className={style.left__container__food__box}
            id={style.breakfast_box}
          >
            <table
              id={style.breakfast_table}
              style={{ display: "none" }}
            ></table>
            <p id={style.breakfast_para}>No food logged for breakfast</p>
          </div>
        </div>
      </div>
      <div className={style.RightBody}></div>
    </div>
  );
};

export default AfterLoginBody;
