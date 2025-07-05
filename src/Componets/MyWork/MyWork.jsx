import React from 'react'
import './MyWork.css'
import nav_underline from '../../assets/nav_underline.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const myWork = () => {
  return (
    
    <div id = "work" className='newmywork'>
        <div className="mywork-title">
            <h1> My latest Work</h1>
            <img src={ nav_underline} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img}  alt=" "/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>

  )
}

export default myWork