import React from 'react'
import './Service.css'
import nav_underline from '../../assets/nav_underline.svg'
import Services_data from '../../assets/Services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Service = () => {
  return (
    <div id="services" className='services'>
    <div className="services-title">
      <h1>My services</h1>
      <img src={nav_underline} alt="" />
    </div>
    <div className="services-container">
      {Services_data.map((Service,index)=>{
        return <div key={index} className='services-format'>
          <h3>{Service.s_no}</h3>
          <h2>{Service.title} {Service.icon}</h2>
          <p>{Service.description}</p>
          <div className="services-readmore">
            <p>Read More </p>
            <img src={arrow_icon} alt="" />
          </div>
          </div>
      })}
    </div>

    </div>
  )
}

export default Service