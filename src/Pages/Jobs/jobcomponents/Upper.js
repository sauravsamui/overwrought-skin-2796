import React from "react";
import { Link } from "react-router-dom";
import style from "./job.module.css";

export default function Upper() {
  return (
    <div>
      <div className={style.headerOne}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "-6%" }}>
           <Link to={"/"}>
           <img
                src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
                alt="Lose It! logo"
                style={{ width: "66%" }}
              ></img>
           </Link>
          </div>
          <div style={{ marginTop: "2%" }}>
            <Link to={"/login"}>
            <button className={style.loginButton}>Login</button>
            </Link>
           
          </div> 
        </div>
      </div>

      <div className={style.banner}>
        <p style={{ fontSize: "5vw", padding: "2%", color: "white" }}>
          Join the Lose It! Team
        </p>

        <button style={{fontSize:"1.4em"}}>
          <a>View Openings</a>
        </button>
      </div>

      <div className={style.imageFlex}>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "42%", marginLeft: "275px" }}
            src="https://assets.loseit.com/website/corporate/JB_TopRatedeNPS.png"
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "55%", marginLeft: "180px" }}
            src="https://assets.loseit.com/website/corporate/JB_TopCompanyBos.png"
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "65%", marginLeft: "145px" }}
            src="https://assets.loseit.com/website/corporate/JB_TopCompanyWomen.png"
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "60%", marginLeft: "112px" }}
            src="https://assets.loseit.com/website/corporate/JB_TopGrossing.png"
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "60%", marginLeft: "75px" }}
            src="https://assets.loseit.com/website/corporate/JB_TopRated.png"
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "60%", marginLeft: "45px" }}
            src="https://assets.loseit.com/website/corporate/JB_2020BestPlaceToWork.png"
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "60%" }}
            src="https://assets.loseit.com/website/corporate/JB_50onFire2018Winner.png"
          />
        </div>
      </div>

      <div className={style.body}>
        <div style={{ marginTop: "6%" }}>
          <p
            style={{
              fontSize: "2.2vw",
              color: "rgb(50, 50, 60)",
              fontWeight: "bold",
            }}
          >
            Why Work at Lose it{" "}
          </p>
        </div>
        <div style={{ marginTop: "2%" }}>
          <ul>
            <li
              style={{
                fontSize: "1.1vw",
                fontWeight: "500",
                marginTop: "4%",
                textAlign: "left",
              }}
            >
              Do you want to help people lose weight and live healthier lives?
              When our members succeed, we succeed.
            </li>

            <li
              style={{
                fontSize: "1.1vw",
                fontWeight: "500",
                marginTop: "2%",
                textAlign: "left",
              }}
            >
              Are you looking to join a small, inclusive team that uses
              problem-solving and creativity to get things done? We take pride
              in what we do and how we deliver.
            </li>

            <li
              style={{
                fontSize: "1.1vw",
                fontWeight: "500",
                marginTop: "2%",
                textAlign: "left",
              }}
            >
              Do you want to see the fruits of your labor? Everyone takes
              responsibility for the overall success of the company.
            </li>

            <li
              style={{
                fontSize: "1.1vw",
                fontWeight: "500",
                marginTop: "2%",
                textAlign: "left",
              }}
            >
              Have questions? We may not always have the answers, but we will be
              honest in our response.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "5%" }}>
          <p
            style={{
              fontSize: "1.1vw",
              fontWeight: "500",
              marginTop: "2%",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "rgb(235, 141, 53)",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Compelling markets and technology:
            </span>{" "}
            Lose It! is at the forefront of health and fitness, corporate
            wellness, machine learning, nutrigenomics and mobile and cloud
            computing.
          </p>

          <p
            style={{
              fontSize: "1.1vw",
              fontWeight: "500",
              marginTop: "2%",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "rgb(235, 141, 53)",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Our legacy of success:
            </span>{" "}
            Our members have lost over 100 million pounds, but it didn’t happen
            overnight and without hard work. Our founders are seasoned startup
            professionals; they've taken a company public, sold companies to
            Macromedia and Microsoft, and raised capital from firms ranging from
            General Catalyst to Polaris to United Healthcare's Innovation Group.
            Now we enjoy the energy of a start-up culture but with the stability
            of a profitable business with plans for the future. When our members
            succeed, we succeed. Come share in our success!
          </p>

          <p
            style={{
              fontSize: "1.1vw",
              fontWeight: "500",
              marginTop: "2%",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "rgb(235, 141, 53)",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Small team, deep and interesting challenges:
            </span>
            We may be a small team (under 50 people total), but we're always
            pushing each other to be better at what we do. Sometimes that means
            wearing different hats and learning new skills to get things done.
          </p>

          <p
            style={{
              fontSize: "1.1vw",
              fontWeight: "500",
              marginTop: "2%",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "rgb(235, 141, 53)",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Professional growth opportunities:
            </span>{" "}
            We encourage continuous learning through sponsoring employees to
            attend conferences and seminars to network, expand their knowledge
            and build their skillset. We also incorporate team building
            exercises, brainstorming sessions, and retreats to optimize how we
            work together as a team.
          </p>

          <p
            style={{
              fontSize: "1.1vw",
              fontWeight: "500",
              marginTop: "2%",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "rgb(235, 141, 53)",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              We have fun together:
            </span>{" "}
            We love what we do and as a team we have a genuine camaraderie with
            one another. The work isn’t always easy but we enjoy the challenge
            of problem-solving together.
          </p>
        </div>
      </div>

      <div>
        <br />
        <br />
        {/* #183962 */}
        <div className={style.giftdiv} style={{  width:"100%", fontSize:"smaller", margin:"auto", backgroundColor:"#183962", padding:"7%",height:"340px" }}>
        <div style={{display: "flex", alignItems: "center"}}>
          <div className={style.gift} style={{width:"30%"}}>
            <img style={{marginLeft:"auto"}} src="https://s3.amazonaws.com/assets.loseit.com/website/diversity_inclusion/DandI_Statement.png" />
          </div>
          <div style={{width:"45%" , marginLeft:"1%", color:"white"}}>
            <p style={{fontSize:"20px",fontWeight:"bold"}}>Diversity, Equity, & Inclusion</p>
            <p style={{fontSize:"1.2em",marginTop:"2%"}}>
              Lose It!! is committed to creating a diverse and inclusive
              environment where employees can thrive. An important goal of our
              small team dynamic is making every member feel like they are a
              part of the team.
            </p>
            </div>
          </div><br/><span>
          <div style={{ marginTop: "2%" }}>
            <button className={style.loginButton} style={{width:"10vw", fontSize:"1.4em",marginLeft:"5%"}}>Learn More</button></div></span>
        </div>
      </div>
    </div>
  );
}
