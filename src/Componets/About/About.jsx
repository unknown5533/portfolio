import React from 'react'
import './About.css'
import nav_underline from '../../assets/nav_underline.svg'
import akash_hede from '../../assets/akash_hede.png'
const About = () => {
  return (
   <div id="About" className='about'>
   <div className="about-title">
   <h1>About me</h1>
   <img src={nav_underline} alt="" />
   </div>
   <div className="about-section">
    <div className="about-left">
      <img src={akash_hede} alt="" />
    </div>
     <div className="about-right">
            <div className="about-para">
              <p> Highly adaptable Java Developer & Cloud/DevOps Engineer leveraging hands-on experience in Java, AWS, 
                  Docker, Kubernetes, and Jenkins to build and deploy scalable, efficient cloud-based applications.</p>
                  <p>my passion for java devloper & devops engineer it is good for me on hand on experience</p>
            </div>
            <div className="about-skils">
              <div className="about-skill"><p>Java</p><hr style={{width:"40%"}}/></div>
              <div className="about-skill"><p>Spring Boot</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>Linux</p><hr style={{width:"40%"}}/></div>
              <div className="about-skill"><p>Docker</p><hr style={{width:"30%"}}/></div>
             <div className="about-skill"><p>Jenkins</p><hr style={{width:"35%"}}/></div>
             <div className="about-skill"><p>Kubernetes</p><hr style={{width:"45%"}}/></div>
             <div className="about-skill"><p>cloud Service</p><hr style={{width:"42%"}}/></div>
            </div>
          </div>
          </div>
        <div className="about-achievments">
          <div className="about-achivement">
            <h1>20+</h1>
            <p> PROFICIENCY SKILLS</p>
          </div>
          <hr />
           <div className="about-achivement">
            <h1>5+</h1>
            <p>PROJECT COMPLETED</p>
            </div>
             <hr />
              <div className="about-achivement">
              <h1>8+</h1>
              <p>CERTIFICATION </p>
            </div>
        </div>
    </div>
  )
}

export default About