import React from "react";
import style from "../../All style module/AfterLoginMainPageBody.module.css";

const FoodSearchPage = (props) => {
  console.log("props:", props);

  const hanldeAddFood = props.hanldeAddFood;
  const food = props.food;

  const el = props.el;

  return (
    <div
      className={style.searchDataList}
      onClick={() => hanldeAddFood(el, el.id, food)}
    >
      <img src={el.img} alt="img" />
      <p>{el.name}</p>
    </div>
  );
};

export default FoodSearchPage;
