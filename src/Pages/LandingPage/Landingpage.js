import React from 'react'
import Header from '../../component/HomePage/Header'
import BodyBlog from '../../component/HomePage/BodyBlog.js'
import BodySlider from '../../component/HomePage/BodySlider'

export default function Homepage() {
  return (
    <div>
      <Header />
      <BodyBlog />
      <BodySlider />
    </div>
  )
}
