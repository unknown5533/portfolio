import React from 'react'
import './Hero.css'
import image from '../../assets/image.png'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={image} alt=" " />
        <h1><span>I'm Akash Hede,</span>Java devloper & devops engineer.</h1>
        <p>Computer Engineering with hands-on experience in Java development, cloud deployments (AWS, GCP), and DevOps tools 
        like Jenkins, Docker, Kubernetes, and Terraform. Eager to contribute to scalable backend systems and cloud-native solutions. </p>
       <div className="hero-action">
        <a href="https://www.linkedin.com/in/akash-hede/" className='hero-connect'>connect with me</a>
        <a href="https://drive.google.com/file/d/12OMyAsAmtyZ0xuhQecjL4SmSbAiw7Dgn/view" className="hero-resume">My Resume</a>
       </div>
    </div>
  )
}

export default Hero
