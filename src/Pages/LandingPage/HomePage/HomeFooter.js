import React from 'react'
import style from './header.module.css'
import {Link} from "react-router-dom"

export default function HomeFooter() {
  return (
    <div className={style.footer}>
        <div className={style.flexFooter}>
            <div className={style.underflexFooter}>
                <img  style={{width:"50%",}}src='https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg'/>
            </div>
            <div className={style.underflexFooter}>
              <h3 style={{fontSize:"22px"}}>Member Resources</h3>
              <Link to={"/howitworks"}><p style={{textAlign:"left", marginLeft:"14%"}}>How It Works</p></Link>
              <a> <p style={{textAlign:"left", marginLeft:"14%"}}>Premium</p></a>
              <a> <p style={{textAlign:"left", marginLeft:"14%"}}>Lose It! Blog</p></a>
              <a><p style={{textAlign:"left", marginLeft:"14%"}}>Lose It! Blog</p></a>
            </div>
            <div className={style.underflexFooter}>
            <h3 style={{fontSize:"22px"}}>Connect With Us</h3>
             <a><p style={{textAlign:"left", marginLeft:"19%"}}>Press & Media Kit</p></a>
             <a><p style={{textAlign:"left", marginLeft:"19%"}}>Contact Us</p></a>
             <a> <p style={{textAlign:"left", marginLeft:"19%"}}>Partners & API</p></a>
             <a> <p style={{textAlign:"left", marginLeft:"19%"}}>Share Your Story	</p></a>
            </div>
            <div className={style.underflexFooter}><h3 style={{fontSize:"22px"}}>Our Team</h3>
            <a>  <p style={{textAlign:"left", marginLeft:"33%"}} >About Us </p></a>
            <a>  <p style={{textAlign:"left", marginLeft:"33%"}}>Careers</p></a>
            <a>   <p style={{textAlign:"left", marginLeft:"33%"}}>Diversity</p></a>
              </div>
        </div>
        <div>
            <div className={style.iconFlex}>
            <a href="https://www.facebook.com/loseit/" aria-label="Facebook page of Lose It!"  target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/loseitapp/" aria-label="Instagram page of Lose It!" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com/loseit/" aria-label="Twitter page of Lose It!" target="_blank"> <i class="fab fa-twitter"></i></a>
            <a href="https://www.pinterest.com/loseit/" aria-label="Pinterest page of Lose It!" target="_blank"> <i class="fab fa-pinterest"></i></a>
            <a href="https://www.linkedin.com/company/lose-it-" aria-label="LinkedIn page of Lose It!" target="_blank"> <i class="fab fa-linkedin"></i></a>
            </div>

            
            <div className={style.lastdiv}>
              <p>Copyright 2008-2021 FitNow, Inc, All Rights Reserved</p>
              <p>Privacy | Terms of Service</p>
            </div>
        </div>
    </div>
  )
}
