import { MenuButton } from "@chakra-ui/react";
import React from "react";
import style from  "./header.module.css";
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <div className={style.landingHeader}>
      <div className={style.jobBanner}>
        <Link to={"/jobs"}>
        <p
            
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "1%",
            }}
          >
            Lose It! is hiring! Click here to see our open positions.
          </p>
        </Link>
      </div>
      <div className={style.headerOne}>
        <div
          
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ marginLeft: "-6%" }}>
            <a href="/">
              <img
                src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg"
                alt="Lose It! logo"
                style={{ width: "66%" }}
              ></img>
            </a>
          </div>
          <div  style={{ marginTop: "2%" }}>
            <Link to={"/login"}><button
              className={style.loginButton}
              
            >
              Login
            </button></Link>
            
          </div>
        </div>
      </div>
      <div className={style.headerTwo}>
        <div className={style.hdFlex}>
          <div className={style.h2One}>
            <img
              src="	https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png"
              alt="phone"
            ></img>
          </div>
          <div className={style.h2Two}>
            <h1>Top Rated</h1>
            <h1>Weight Loss Plan</h1>
            <p>Track the foods you love and lose weight</p>
            <Link to={"/question"}><button>Sign Up for Free</button></Link>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}
