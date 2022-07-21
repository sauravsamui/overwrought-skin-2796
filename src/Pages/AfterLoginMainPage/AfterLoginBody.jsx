import React, { useEffect, useState } from "react";
import style from "../../All style module/AfterLoginMainPageBody.module.css";
import food1 from "../../assets/Icons/food1.png";
import ex1 from "../../assets/Icons/ex1.png";
import breakFastt from "../../assets/Icons/breakFast.png";
import lunch from "../../assets/Icons/lunch.png";
import dinner from "../../assets/Icons/dinner.png";
import snaks from "../../assets/Icons/snaks.png";
import axios from "axios";
import FoodSearchPage from "./FoodSearchPage";
const AfterLoginBody = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [SearchData, SetSearchData] = useState([]);

  const [SearchDropdownBreak, setSearchDropdownBreak] = useState(false);
  const [SearchDropdownlunch, setSearchDropdownlunch] = useState(false);
  const [breakFast, setbreakfast] = useState([]);
  const [lunchh, setlunch] = useState([]);
  const [dinnerr, setdinner] = useState([]);

  const [selectDrop, setSelectDrop] = useState(false);
  const hanldeDropOpen = () => {
    setShowDropdown(!showDropdown);
  };

  const hanldeSearch = (b, e) => {
    if (e.target.value) {
      axios.get(`http://localhost:8080/${b}`).then((response) => {
        console.log("response:", response);
        SetSearchData(response.data);
        setSearchDropdownBreak(true);
        // console.log("response:", response.data);
      });
    } else {
      SetSearchData([]);
      setSearchDropdownBreak(false);
    }
  };
  const hanldeSearch1 = (b, e) => {
    if (e.target.value) {
      axios.get(`http://localhost:8080/${b}`).then((response) => {
        console.log("response:", response);
        SetSearchData(response.data);
        setSearchDropdownlunch(true);

        // setSearchDropdown(true);
        // console.log("response:", response.data);
      });
    } else {
      SetSearchData([]);
      setSearchDropdownlunch(false);
    }
  };

  const hanldeAddFood = (el, index, food) => {
    let payload = { data: el.name, img: el.img };

    axios
      .post(`http://localhost:8080/${food}`, {
        ...payload,
      })
      .then((res) => {
        if (food === "lunch_data") {
          getAddedData1();
        } else {
          getAddedData();
        }
      });
    setSearchDropdownBreak(false);
    setSearchDropdownlunch(false);
  };
  const getAddedData1 = () => {
    axios.get(`http://localhost:8080/lunch_data`).then((res) => {
      setlunch(res.data);
    });
  };
  const getAddedData = () => {
    axios.get(`http://localhost:8080/breakfast_data`).then((res) => {
      setbreakfast(res.data);
    });
  };

  const DropSelect = (when) => {
    setSelectDrop(true);
    axios.get(`http://localhost:8080/${when}`).then((res) => {
      console.log("res:", res);
    });
  };

  const handleDeleteFood = (when, id) => {
    console.log("when:", when);
    axios.delete(`http://localhost:8080/${when}/${id}`).then((res) => {
      if (when === "lunch_data") {
        getAddedData1();
      } else {
        getAddedData();
      }

      console.log("res:", res.data.id);
    });
  };
  useEffect(() => {
    getAddedData();
    getAddedData1();
  }, []);
  return (
    <div className={style.MainBody}>
      <div className={style.leftBody}>
        <div className={style.LeftBody_SelectSetion}>
          <div style={{ position: "relative" }}>
            <div onClick={hanldeDropOpen}>
              <img src={food1} alt="food1" />
              <div
                className={style.dropdown__food}
                style={{ display: showDropdown ? "block" : "none" }}
              >
                <div
                  className={style.dropdown_button}
                  onClick={() => DropSelect("breakFast")}
                >
                  <img src={breakFastt} alt="breakFast" />
                  breakFast
                </div>

                <div
                  className={style.dropdown_button}
                  onClick={() => DropSelect("lunch")}
                >
                  <img src={lunch} alt="lunch" />
                  lunch
                </div>
                <div
                  className={style.dropdown_button}
                  onClick={() => DropSelect("dinner")}
                >
                  <img src={dinner} alt="dinner" />
                  dinner
                </div>
                <div
                  className={style.dropdown_button}
                  onClick={() => DropSelect("snaks")}
                >
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

        <div
          className={style.SeletDropOpen}
          style={{ display: selectDrop ? "block" : "none" }}
        >
          <p onClick={() => setSelectDrop(false)} style={{ cursor: "pointer" }}>
            x
          </p>
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
          {/* breakfast started ...................*/}
          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Breakfast: {breakFast.length}</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
              onChange={(e) => hanldeSearch("breakfast", e)}
            />
          </div>
          <div
            style={{ display: SearchDropdownBreak ? "block" : "none" }}
            className={style.SearchDrop}
          >
            {SearchData.map((el, index) => {
              return (
                <FoodSearchPage
                  key={index}
                  hanldeAddFood={hanldeAddFood}
                  el={el}
                  food={"breakfast_data"}
                />
              );
            })}
          </div>
          <div
            className={style.left__container__food__box}
            id={style.breakfast_box}
          >
            <div id={style.breakfast_table}>
              {breakFast.map((el, index) => {
                return (
                  <div className={style.breakfastDataMap}>
                    <div className={style.breakfastDataInsideDiv}>
                      <img src={el.img} alt="a" />
                      {el.data}
                    </div>

                    <div
                      className={style.breakFastmapDataDelete}
                      style={{ color: "green" }}
                      onClick={() => handleDeleteFood("breakfast_data", el.id)}
                    >
                      x
                    </div>
                  </div>
                );
              })}
            </div>
            {breakFast.length === 0 ? (
              <p id={style.breakfast_para}>No food logged for breakfast</p>
            ) : (
              ""
            )}
            {/* //////////////////////breakfastdone */}
            <div className={style.line}></div>

            <div className={style.left__container__mealType}>
              <h5 id={style.breakfast_count}>lunch: {lunchh.length}</h5>
              <input
                type="text"
                placeholder=" Search & add food"
                className={style.search__food}
                id={style.enter_breakfast}
                onChange={(e) => hanldeSearch1("lunch", e)}
              />
            </div>
            <div
              style={{ display: SearchDropdownlunch ? "block" : "none" }}
              className={style.SearchDrop}
            >
              {SearchData.map((el, index) => {
                return (
                  <FoodSearchPage
                    key={index}
                    hanldeAddFood={hanldeAddFood}
                    el={el}
                    food={"lunch_data"}
                  />
                );
              })}
            </div>
            <div
              className={style.left__container__food__box}
              id={style.breakfast_box}
            >
              <div id={style.breakfast_table}>
                {lunchh.map((el, index) => {
                  return (
                    <div className={style.breakfastDataMap}>
                      <div className={style.breakfastDataInsideDiv}>
                        <img src={el.img} alt="a" />
                        {el.data}
                      </div>

                      <div
                        className={style.breakFastmapDataDelete}
                        style={{ color: "green" }}
                        onClick={() => handleDeleteFood("lunch_data", el.id)}
                      >
                        x
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {lunchh.length === 0 ? (
              <p id={style.breakfast_para}>No food logged for breakfast</p>
            ) : (
              ""
            )}

            {/* Snakesstart........................................ */}
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
            {/* Exercise started....................... */}
            <div className={style.line}></div>
            <div className={style.left__container__mealType}>
              <h5 id={style.breakfast_count}>Exercise: 0</h5>
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
      </div>

      <div className={style.RightBody}></div>
    </div>
  );
};

export default AfterLoginBody;
