import React from 'react'
import Header from './HomePage/Header'
import BodyBlog from './HomePage/BodyBlog.js'
import BodySlider from './HomePage/BodySlider'
import './HomePage/header.module.css'
import MidBody from './HomePage/MidBody'
import SliderSlick from './HomePage/SliderSlick'
import HomeFooter from './HomePage/HomeFooter'
import Getstartedonmobile from '../Howitworks/Getstartedonmobile.jsx'


export default function Homepage() {
  return (
    <div>
      <Header />
      <BodyBlog /><br />
      <BodySlider />
      <MidBody />
      <SliderSlick />
      <Getstartedonmobile/>
      <HomeFooter />
      {/* <span class="uiiw"><img width="43" height="43" data-uw-rm-ignore="" class="ui_w" aria-hidden="true" alt="Accessibility Widget" src="https://cdn.userway.org/widgetapp/images/body_wh.svg" /></span> */}
    </div>
  )
}

// https://lydian-longship-ec7.notion.site/CW-B17-Daily-Submissions-bec88d4eecd641d4b15ad15ee2bec370
