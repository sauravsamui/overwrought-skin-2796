import React from 'react'
import Jobfooter from './jobcomponents/Jobfooter';

import Middle from './jobcomponents/Middle';
import Upper from './jobcomponents/Upper';
import './jobcomponents/job.module.css'
import JobSlider from './jobcomponents/JobSlider';
import HomeFooter from '../LandingPage/HomePage/HomeFooter';
import Getstartedonmobile from '../Howitworks/Getstartedonmobile.jsx'



export default function Jobs() {
  return (
    <div>
      <Upper/>
   
    <Middle/>
    <Jobfooter/>
    <JobSlider/>
    <Getstartedonmobile />
    <HomeFooter />
    
    
    
    </div>
  )
}
