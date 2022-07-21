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

  const [SearchDropdown, setSearchDropdown] = useState(false);
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
        setSearchDropdown(true);
        // console.log("response:", response.data);
      });
    } else {
      SetSearchData([]);
      setSearchDropdown(false);
    }
  };

  const hanldeAddFood = (el, index) => {
    // console.log("hey");
    let payload = { data: el.name, img: el.img };

    axios
      .post(`http://localhost:8080/breakfast_data`, {
        ...payload,
      })
      .then((res) => {
        getAddedData();
      });
    setSearchDropdown(false);
  };

  const getAddedData = () => {
    axios.get(`http://localhost:8080/breakfast_data`).then((res) => {
      // console.log("res:", res);
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
    // console.log("id:", id);
    // console.log("when:", when);
    // console.log("delete");
    axios.delete(`http://localhost:8080/${when}/${id}`).then((res) => {
      getAddedData();
      console.log("res:", res.data.id);
    });
  };
  useEffect(() => {
    getAddedData();
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

          <div className={style.left__container__mealType}>
            <h5 id={style.breakfast_count}>Breakfast: 0</h5>
            <input
              type="text"
              placeholder=" Search & add food"
              className={style.search__food}
              id={style.enter_breakfast}
              onChange={(e) => hanldeSearch("breakfast", e)}
            />
          </div>
          <div
            style={{ display: SearchDropdown ? "block" : "none" }}
            className={style.SearchDrop}
          >
            {SearchData.map((el, index) => {
              return (
                <FoodSearchPage
                  key={index}
                  hanldeAddFood={{ hanldeAddFood, el }}
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
                      // onClick={handleDeleteFood}
                    >
                      x
                    </div>
                  </div>
                );
              })}
            </div>
            {!breakFast ? (
              <p id={style.breakfast_para}>No food logged for breakfast</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={style.RightBody}></div>
    </div>
  );
};

export default AfterLoginBody;
