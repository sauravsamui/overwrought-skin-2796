import React from 'react'
import Header from './HomePage/Header'
import BodyBlog from './HomePage/BodyBlog.js'
import BodySlider from './HomePage/BodySlider'
import './HomePage/header.module.css'
export default function Homepage() {
  return (
    <div>
      <Header />
      <BodyBlog />
      <BodySlider />
    </div>
  )
}
