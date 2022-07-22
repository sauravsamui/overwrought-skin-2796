import React from "react";
import style from "./job.module.css";

export default function Upper() {
  return (
    <div>
      <div className={style.headerOne}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "-6%" }}>
            <a href="/">
              <img
                src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
                alt="Lose It! logo"
                style={{ width: "59%" }}
              ></img>
            </a>
          </div>
          <div style={{ marginTop: "2%" }}>
            <button className={style.loginButton}>Login</button>
          </div>
        </div>
      </div>

      <div className={style.banner}>
      <p>Join the Lose It! Team</p>

      <button><a href="#currentOpenings">View Openings</a></button>


      </div>
    </div>
  );
}
