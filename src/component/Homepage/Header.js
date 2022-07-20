import { MenuButton } from "@chakra-ui/react";
import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="landingHeader">
      <div className="job-banner" style={{ fontSize: "0.9em" }}>
        <a href="/jobs/">
          <p
            className="job-text"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "1%",
            }}
          >
            Lose It! is hiring! Click here to see our open positions.
          </p>
        </a>
      </div>
      <div className="header-one">
        <div
          className="flex-1"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="img-flex" style={{ marginLeft: "-6%" }}>
            <a href="/">
              <img
                src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
                alt="Lose It! logo"
                style={{ width: "59%" }}
              ></img>
            </a>
          </div>
          <div className="login-div" style={{ marginTop: "2%" }}>
            <button
              className="loginbutton"
              style={{ color: "white", backgroundColor: "orange" }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="header-two">
        <div className="hd-flex">
          <div className="h2-1">
            <img
              src="	https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png"
              alt="phone"
            ></img>
          </div>
          <div className="h2-2">
            <h1>Top Rated</h1>
            <h1>Weight Loss Plan</h1>
            <p>Track the foods you love and lose weight</p>
            <button>Sign Up for Free</button>
            <div className="h2-2-flex" style={{ display: "flex" }}>
              <div className="apple" >
              <i class="fab fa-apple"></i>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
              <div className="android">
              <a href="/get/android" aria-label="Download Lose It! app from Play Store">
                        <i class="fab fa-android"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="star fa fa-star android"></i>
                    </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
