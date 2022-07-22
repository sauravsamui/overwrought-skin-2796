import React from 'react'
import Header from './HomePage/Header'
import BodyBlog from './HomePage/BodyBlog.js'
import BodySlider from './HomePage/BodySlider'
import './HomePage/header.module.css'
import MidBody from './HomePage/MidBody'
import SliderSlick from './HomePage/SliderSlick'
export default function Homepage() {
  return (
    <div>
      <Header />
      <BodyBlog /><br />
      <BodySlider />
      <MidBody />
      <SliderSlick />
    </div>
  )
}
