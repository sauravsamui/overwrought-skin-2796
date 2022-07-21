import React from "react";
import style from "../../All style module/AfterLoginMainPageBody.module.css";

const FoodSearchPage = (props) => {
  const hanldeAddFood = props.hanldeAddFood.hanldeAddFood;
  //   console.log("hanldeAddFood:", hanldeAddFood);
  const el = props.hanldeAddFood.el;

  return (
    <div
      className={style.searchDataList}
      onClick={() => hanldeAddFood(el, el.id)}
    >
      <img src={el.img} alt="img" />
      <p>{el.name}</p>
    </div>
  );
};

export default FoodSearchPage;
